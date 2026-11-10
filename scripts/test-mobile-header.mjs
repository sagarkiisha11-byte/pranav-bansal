import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const SCREENSHOTS_DIR = path.resolve("./screenshots/header-test");

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
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
          if (msg.error) reject(msg.error);
          else resolve(msg.result);
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
    if (this.ws) this.ws.close();
  }
}

async function run() {
  console.log("Launching headless Chrome for Mobile Header & Drawer Testing...");
  const chromeProcess = spawn(CHROME_PATH, [
    "--headless=new",
    "--remote-debugging-port=9233",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--user-data-dir=" + path.resolve("./.chrome-tmp-header2")
  ]);

  let targets = null;
  for (let i = 0; i < 30; i++) {
    try {
      targets = await getJson("http://127.0.0.1:9233/json/list");
      if (targets && targets.length > 0) break;
    } catch (e) {}
    await new Promise(r => setTimeout(r, 200));
  }

  const pageTarget = targets.find(t => t.type === 'page') || targets[0];
  const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await client.connect();

  await client.send("Page.enable");
  await client.send("Runtime.enable");

  const viewports = [
    { width: 360, height: 640, name: "360x640" },
    { width: 390, height: 844, name: "390x844" },
    { width: 412, height: 915, name: "412x915" }
  ];

  const testReport = {};

  for (const vp of viewports) {
    console.log(`\n========================================`);
    console.log(`TESTING VIEWPORT: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`========================================`);

    await client.send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: true
    });

    await client.send("Page.navigate", { url: "http://localhost:3000" });
    await new Promise(r => setTimeout(r, 2200));

    // Dismiss preloader
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
    await new Promise(r => setTimeout(r, 400));

    // TEST 1: Scroll to middle & bottom, verify header is visible
    console.log(`[Test 1] Scrolling to middle (scrollY: 1800)...`);
    await client.send("Runtime.evaluate", {
      expression: `window.scrollTo({ top: 1800, behavior: 'instant' });`
    });
    await new Promise(r => setTimeout(r, 300));

    let headerStatusMiddle = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const header = document.querySelector('header');
          const rect = header.getBoundingClientRect();
          return {
            scrollY: window.scrollY,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height,
            isVisible: rect.top >= 0 && rect.bottom > 0
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Header at middle:", headerStatusMiddle.result.value);

    let screenshotMiddle = await client.send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, `${vp.name}-scrolled-middle.png`), Buffer.from(screenshotMiddle.data, 'base64'));

    console.log(`[Test 1b] Scrolling to bottom (scrollY: 5000)...`);
    await client.send("Runtime.evaluate", {
      expression: `window.scrollTo({ top: 5000, behavior: 'instant' });`
    });
    await new Promise(r => setTimeout(r, 300));

    let headerStatusBottom = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const header = document.querySelector('header');
          const rect = header.getBoundingClientRect();
          return {
            scrollY: window.scrollY,
            top: rect.top,
            bottom: rect.bottom,
            height: rect.height,
            isVisible: rect.top >= 0 && rect.bottom > 0
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Header at bottom:", headerStatusBottom.result.value);

    let screenshotBottom = await client.send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, `${vp.name}-scrolled-bottom.png`), Buffer.from(screenshotBottom.data, 'base64'));

    // TEST 2: Tap the hamburger from the bottom of the page
    console.log(`\n[Test 2] Tapping hamburger from bottom of page...`);
    const scrollBeforeTap = await client.send("Runtime.evaluate", {
      expression: `window.scrollY`,
      returnByValue: true
    });

    await client.send("Runtime.evaluate", {
      expression: `
        const btn = document.querySelector('header button[aria-label="Toggle navigation menu"]');
        if (btn) btn.click();
      `
    });
    await new Promise(r => setTimeout(r, 400));

    let drawerStatus = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const drawer = document.getElementById('mobile-nav-drawer');
          const links = drawer ? Array.from(drawer.querySelectorAll('a')).map(a => a.innerText.trim()) : [];
          return {
            scrollBefore: ${scrollBeforeTap.result.value},
            scrollAfter: window.scrollY,
            didNotScrollToTop: window.scrollY > 1000,
            drawerFound: !!drawer,
            bodyScrollLocked: document.body.style.overflow === 'hidden',
            linkCount: links.length
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Drawer open state:", drawerStatus.result.value);

    let screenshotDrawer = await client.send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, `${vp.name}-drawer-open.png`), Buffer.from(screenshotDrawer.data, 'base64'));

    // TEST 3: Tap "Contact" in the menu
    console.log(`\n[Test 3] Tapping "Contact" in menu...`);
    let contactClick = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const drawer = document.getElementById('mobile-nav-drawer');
          if (!drawer) return { clicked: false, error: 'drawer not found' };
          const contactLink = Array.from(drawer.querySelectorAll('a')).find(a => a.getAttribute('href') === '#contact');
          if (contactLink) {
            contactLink.click();
            return { clicked: true, text: contactLink.innerText.trim() };
          }
          return { clicked: false, error: 'contact link not found' };
        })()
      `,
      returnByValue: true
    });
    console.log("Contact tap result:", contactClick.result.value);
    await new Promise(r => setTimeout(r, 800));

    let contactSectionPosition = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const header = document.querySelector('header');
          const headerRect = header.getBoundingClientRect();
          const contact = document.getElementById('contact');
          const contactRect = contact.getBoundingClientRect();
          const contactHeading = contact.querySelector('h2');
          const headingRect = contactHeading ? contactHeading.getBoundingClientRect() : null;
          
          return {
            scrollY: window.scrollY,
            headerHeight: headerRect.height,
            headerBottom: headerRect.bottom,
            contactTop: contactRect.top,
            headingTop: headingRect ? headingRect.top : null,
            isHeadingVisibleBelowHeader: headingRect ? headingRect.top >= headerRect.bottom : false,
            headingOffsetFromHeader: headingRect ? Math.round(headingRect.top - headerRect.bottom) : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Contact position after tap:", contactSectionPosition.result.value);

    let screenshotContact = await client.send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(SCREENSHOTS_DIR, `${vp.name}-contact-navigated.png`), Buffer.from(screenshotContact.data, 'base64'));

    // TEST 4: Confirm no horizontal overflow
    console.log(`\n[Test 4] Checking horizontal overflow...`);
    let overflowCheck = await client.send("Runtime.evaluate", {
      expression: `
        (() => {
          const docScrollWidth = document.documentElement.scrollWidth;
          const innerWidth = window.innerWidth;
          const bodyScrollWidth = document.body.scrollWidth;
          return {
            docScrollWidth,
            bodyScrollWidth,
            innerWidth,
            hasOverflow: docScrollWidth > innerWidth
          };
        })()
      `,
      returnByValue: true
    });
    console.log("Overflow check:", overflowCheck.result.value);

    testReport[vp.name] = {
      headerMiddle: headerStatusMiddle.result.value,
      headerBottom: headerStatusBottom.result.value,
      drawer: drawerStatus.result.value,
      contactNav: contactSectionPosition.result.value,
      overflow: overflowCheck.result.value
    };
  }

  client.close();
  chromeProcess.kill();

  fs.writeFileSync("./screenshots/header-test/test-report.json", JSON.stringify(testReport, null, 2));
  console.log("\nAll tests completed! Report written to screenshots/header-test/test-report.json");
}

run().catch(console.error);
