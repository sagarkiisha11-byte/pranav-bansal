const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const sourcePath = 'public/assets/Luxury_PB_Monogram_Real_Estate_Logo-Photoroom.png';
  if (!fs.existsSync(sourcePath)) {
    console.error('Source file not found:', sourcePath);
    process.exit(1);
  }

  // 1. Generate clean trimmed logo with 8px subtle padding for crisp display
  console.log('Generating trimmed logo...');
  const trimmedBuffer = await sharp(sourcePath)
    .trim()
    .extend({
      top: 8,
      bottom: 8,
      left: 12,
      right: 12,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  fs.writeFileSync('public/assets/logo.png', trimmedBuffer);
  fs.writeFileSync('public/logo.png', trimmedBuffer);
  console.log('Saved public/assets/logo.png and public/logo.png');

  // Also save unpadded exact trim for inspection
  const meta = await sharp(trimmedBuffer).metadata();
  console.log('Logo dimensions:', meta.width, 'x', meta.height, 'Aspect ratio:', (meta.width / meta.height).toFixed(2));

  // 2. Extract PB Monogram for Favicon & App Icons
  // Monogram is at x: 135 to 314, y: 110 to 229 in the original 1024x341 image
  console.log('Extracting PB monogram for favicons...');
  const monogramCrop = await sharp(sourcePath)
    .extract({ left: 135, top: 110, width: 180, height: 120 })
    .toBuffer();

  // Helper to create square icon with monogram centered
  async function createSquareIcon(size, paddingRatio = 0.15, hasDarkBg = false) {
    const innerSize = Math.round(size * (1 - paddingRatio * 2));
    const resizedMonogram = await sharp(monogramCrop)
      .resize({
        width: innerSize,
        height: innerSize,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    const base = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: hasDarkBg ? { r: 7, g: 8, b: 11, alpha: 1 } : { r: 0, g: 0, b: 0, alpha: 0 }
      }
    });

    return base
      .composite([{ input: resizedMonogram, gravity: 'center' }])
      .png({ quality: 100 })
      .toBuffer();
  }

  // Generate Favicons
  fs.writeFileSync('public/favicon-16x16.png', await createSquareIcon(16, 0.05));
  fs.writeFileSync('public/favicon-32x32.png', await createSquareIcon(32, 0.08));
  fs.writeFileSync('public/favicon.png', await createSquareIcon(192, 0.12));
  fs.writeFileSync('public/assets/favicon.png', await createSquareIcon(192, 0.12));

  // Apple Touch Icon & Android Chrome with luxury dark rounded background
  fs.writeFileSync('public/apple-touch-icon.png', await createSquareIcon(180, 0.18, true));
  fs.writeFileSync('public/assets/apple-touch-icon.png', await createSquareIcon(180, 0.18, true));
  fs.writeFileSync('public/android-chrome-192x192.png', await createSquareIcon(192, 0.18, true));
  fs.writeFileSync('public/android-chrome-512x512.png', await createSquareIcon(512, 0.18, true));
  console.log('Favicons and app icons generated successfully!');

  // 3. Generate 1200x630 OG Image for OpenGraph & Twitter
  console.log('Generating OG / Twitter card image (1200x630)...');
  const ogWidth = 1200;
  const ogHeight = 630;

  // Scale the trimmed logo to width ~820px
  const scaledLogo = await sharp(trimmedBuffer)
    .resize({ width: 820 })
    .toBuffer();

  const ogSvg = `
    <svg width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="radialGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#C5A059" stop-opacity="0.22" />
          <stop offset="50%" stop-color="#C5A059" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#07080B" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#DFC082" />
          <stop offset="50%" stop-color="#C5A059" />
          <stop offset="100%" stop-color="#DFC082" />
        </linearGradient>
      </defs>
      <!-- Base Background -->
      <rect width="100%" height="100%" fill="#07080B" />
      <!-- Ambient Radial Glow -->
      <rect width="100%" height="100%" fill="url(#radialGlow)" />
      <!-- Border Frame -->
      <rect x="24" y="24" width="${ogWidth - 48}" height="${ogHeight - 48}" rx="24" fill="none" stroke="#C5A059" stroke-opacity="0.2" stroke-width="1.5" />
      <!-- Tagline & Description text -->
      <text x="600" y="475" text-anchor="middle" font-family="'Times New Roman', serif" font-size="22" letter-spacing="8" fill="#DFC082" font-weight="600">
        REAL ESTATE CONSULTANT
      </text>
      <text x="600" y="525" text-anchor="middle" font-family="'Arial', sans-serif" font-size="16" letter-spacing="6" fill="#A39D93" font-weight="500">
        BUY  |  SELL  |  INVEST  •  CHANDIGARH TRICITY
      </text>
    </svg>
  `;

  const ogBase = await sharp(Buffer.from(ogSvg)).png().toBuffer();

  const finalOg = await sharp(ogBase)
    .composite([
      {
        input: scaledLogo,
        top: 200,
        left: Math.round((ogWidth - 820) / 2)
      }
    ])
    .png({ quality: 95 })
    .toBuffer();

  fs.writeFileSync('public/og-image.png', finalOg);
  fs.writeFileSync('public/assets/og-image.png', finalOg);
  console.log('Saved public/og-image.png and public/assets/og-image.png');
}

run().catch(console.error);

