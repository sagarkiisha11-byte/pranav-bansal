import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const SCREENSHOTS_DIR = path.resolve("./screenshots/before");

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 0;
    this.callbacks = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.callbacks.has(msg.id)) {
          const { resolve, reject } = this.callbacks.get(msg.id);
          this.callbacks.delete(msg.id);
          if (msg.error) {
            reject(msg.error);
          } else {
            resolve(msg.result);
          }
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.msgId;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function run() {
  console.log("Launching headless Chrome...");
  const chromeProcess = spawn(CHROME_PATH, [
    "--headless=new",
    "--remote-debugging-port=9222",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--user-data-dir=" + path.resolve("./.chrome-tmp")
  ]);

  // Wait for remote debugging port
  let targets = null;
  for (let i = 0; i < 30; i++) {
    try {
      targets = await getJson("http://127.0.0.1:9222/json/list");
      if (targets && targets.length > 0) break;
    } catch (e) {
      // wait
    }
    await new Promise(r => setTimeout(r, 200));
  }

  if (!targets || targets.length === 0) {
    console.error("Failed to connect to Chrome remote debugging port.");
    chromeProcess.kill();
    return;
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  console.log("Found Chrome page target:", pageTarget.webSocketDebuggerUrl);

  const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await client.connect();
  console.log("Connected to CDP.");

  await client.send("Page.enable");
  await client.send("DOM.enable");
  await client.send("Runtime.enable");

  const viewports = [
    { width: 360, height: 640, name: "360x640" },
    { width: 375, height: 667, name: "375x667" },
    { width: 390, height: 844, name: "390x844" },
    { width: 412, height: 915, name: "412x915" },
    { width: 768, height: 1024, name: "768x1024" },
    { width: 844, height: 390, name: "844x390_landscape" }
  ];

  const results = {};

  for (const vp of viewports) {
    console.log(`\nTesting viewport ${vp.name} (${vp.width}x${vp.height})...`);
    await client.send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: vp.width <= 768
    });

    await client.send("Page.navigate", { url: "http://localhost:3000" });
    // Wait for page to load and preloader to dismiss (takes ~2.2s)
    await new Promise(r => setTimeout(r, 2800));

    // Force preloader dismiss if still present
    await client.send("Runtime.evaluate", {
      expression: `
        document.body.classList.remove('is-loading');
        const splash = document.getElementById('site-splash');
        if (splash) splash.remove();
        const content = document.getElementById('site-content');
        if (content) {
          content.style.opacity = '1';
          content.style.visibility = 'visible';
        }
      `
    });
    await new Promise(r => setTimeout(r, 500));

    // Detect overflow elements
    const evalRes = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const innerWidth = window.innerWidth;
          const docWidth = document.documentElement.offsetWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          const bodyScrollWidth = document.body.scrollWidth;
          
          const all = Array.from(document.querySelectorAll('*'));
          const overflows = [];
          
          for (const el of all) {
            const rect = el.getBoundingClientRect();
            if (rect.right > innerWidth + 2) {
              overflows.push({
                tag: el.tagName.toLowerCase(),
                id: el.id || undefined,
                className: typeof el.className === 'string' ? el.className.split(' ').slice(0, 8).join(' ') : undefined,
                text: el.innerText ? el.innerText.slice(0, 40).replace(/\\n/g, ' ') : undefined,
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowAmount: Math.round(rect.right - innerWidth)
              });
            }
          }
          
          return {
            innerWidth,
            scrollWidth,
            bodyScrollWidth,
            overflowCount: overflows.length,
            overflows: overflows.slice(0, 20)
          };
        })()
      `,
      returnByValue: true
    });

    results[vp.name] = evalRes.result?.value;
    console.log(`Results for ${vp.name}:`, JSON.stringify(evalRes.result?.value, null, 2));

    // Capture screenshot
    const screenshot = await client.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false
    });
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, `${vp.name}.png`), Buffer.from(screenshot.data, 'base64'));
    console.log(`Saved screenshot to screenshots/before/${vp.name}.png`);
  }

  client.close();
  chromeProcess.kill();

  fs.writeFileSync("./screenshots/before-results.json", JSON.stringify(results, null, 2));
  console.log("\nDiagnostics complete! Results written to ./screenshots/before-results.json");
}

run().catch(err => {
  console.error("Error running audit:", err);
  process.exit(1);
});

