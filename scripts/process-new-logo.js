const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const inputPath = 'C:/Users/pc/.gemini/antigravity/brain/6d872375-145d-41ee-80d9-44dbca67a753/.user_uploaded/media_1793783431380_fe6f2af8.jpg';
  const outputPath = 'd:/pranav-bansal/public/logo.png';

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // 1. Find tight bounding box of visible artwork
  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const maxVal = Math.max(r, g, b);
      if (maxVal > 28) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 16px horizontal and 10px vertical padding for clean breathing room
  const padX = 16;
  const padY = 10;
  const cropLeft = Math.max(0, minX - padX);
  const cropTop = Math.max(0, minY - padY);
  const cropWidth = Math.min(width - cropLeft, (maxX - minX) + padX * 2);
  const cropHeight = Math.min(height - cropTop, (maxY - minY) + padY * 2);

  console.log('Tight crop dimensions:', { cropLeft, cropTop, cropWidth, cropHeight });

  // 2. Crop to tight region
  const cropped = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cWidth = cropped.info.width;
  const cHeight = cropped.info.height;
  const cData = cropped.data;

  // 3. Compute transparency:
  // Flood fill from outside borders to identify background
  const isBackground = new Uint8Array(cWidth * cHeight);
  const queue = [];

  function getLuminance(x, y) {
    const idx = (y * cWidth + x) * 3;
    return 0.299 * cData[idx] + 0.587 * cData[idx + 1] + 0.114 * cData[idx + 2];
  }

  // Push all dark edge pixels into queue
  for (let x = 0; x < cWidth; x++) {
    if (getLuminance(x, 0) < 30) { isBackground[0 * cWidth + x] = 1; queue.push([x, 0]); }
    if (getLuminance(x, cHeight - 1) < 30) { isBackground[(cHeight - 1) * cWidth + x] = 1; queue.push([x, cHeight - 1]); }
  }
  for (let y = 0; y < cHeight; y++) {
    if (getLuminance(0, y) < 30) { isBackground[y * cWidth + 0] = 1; queue.push([0, y]); }
    if (getLuminance(cWidth - 1, y) < 30) { isBackground[y * cWidth + (cWidth - 1)] = 1; queue.push([cWidth - 1, y]); }
  }

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const neighbors = [
      [cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < cWidth && ny >= 0 && ny < cHeight) {
        const nPos = ny * cWidth + nx;
        if (isBackground[nPos] === 0) {
          const lum = getLuminance(nx, ny);
          if (lum < 28) {
            isBackground[nPos] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Also in text area (bottom 45% of crop), any pixel with luminance < 18 is part of letter counters
  const textAreaY = Math.round(cHeight * 0.55);
  for (let y = textAreaY; y < cHeight; y++) {
    for (let x = 0; x < cWidth; x++) {
      if (getLuminance(x, y) < 18) {
        isBackground[y * cWidth + x] = 1;
      }
    }
  }

  const rgbaBuffer = Buffer.alloc(cWidth * cHeight * 4);

  for (let y = 0; y < cHeight; y++) {
    for (let x = 0; x < cWidth; x++) {
      const srcIdx = (y * cWidth + x) * 3;
      const dstIdx = (y * cWidth + x) * 4;
      const r = cData[srcIdx];
      const g = cData[srcIdx + 1];
      const b = cData[srcIdx + 2];
      const lum = getLuminance(x, y);

      rgbaBuffer[dstIdx] = r;
      rgbaBuffer[dstIdx + 1] = g;
      rgbaBuffer[dstIdx + 2] = b;

      const bgMark = isBackground[y * cWidth + x];

      if (bgMark === 1) {
        if (lum <= 14) {
          rgbaBuffer[dstIdx + 3] = 0;
        } else {
          // Smooth alpha ramp for anti-aliasing edges
          const alpha = Math.min(255, Math.max(0, Math.round(((lum - 14) / 14) * 255)));
          rgbaBuffer[dstIdx + 3] = alpha;
        }
      } else {
        rgbaBuffer[dstIdx + 3] = 255;
      }
    }
  }

  await sharp(rgbaBuffer, { raw: { width: cWidth, height: cHeight, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log(`✓ Processed and saved tightly cropped transparent logo to ${outputPath} (${cWidth}x${cHeight})`);
}

processLogo().catch(console.error);
