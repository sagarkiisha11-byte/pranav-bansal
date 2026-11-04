const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
  const publicDir = path.join(__dirname, '..', 'public');
  const faviconPath = path.join(publicDir, 'favicon.png');
  const logoPath = path.join(publicDir, 'logo.png');

  // 1. Generate Favicon sizes
  await sharp(faviconPath).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(faviconPath).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(faviconPath).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await sharp(faviconPath).resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  await sharp(faviconPath).resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  
  // Save as favicon.ico and app/favicon.ico
  await sharp(faviconPath).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
  await sharp(faviconPath).resize(32, 32).png().toFile(path.join(__dirname, '..', 'src', 'app', 'favicon.ico'));
  console.log('✓ Generated all favicon sizes (16, 32, 180, 192, 512, .ico)');

  // 2. Generate 1200x630 OG image for social sharing
  const width = 1200;
  const height = 630;

  // Resize logo for OG card
  const resizedLogoBuffer = await sharp(logoPath)
    .resize(750, null, { fit: 'inside' })
    .toBuffer();

  const logoMetadata = await sharp(resizedLogoBuffer).metadata();

  const cardWidth = 860;
  const cardHeight = 440;
  const cardX = Math.round((width - cardWidth) / 2);
  const cardY = 65;

  const cardSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#16325C" />
          <stop offset="70%" stop-color="#0B1F3F" />
          <stop offset="100%" stop-color="#061329" />
        </radialGradient>
        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E6C766" />
          <stop offset="50%" stop-color="#C9A227" />
          <stop offset="100%" stop-color="#8C6D14" />
        </linearGradient>
      </defs>
      <!-- Base Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGlow)" />
      
      <!-- Outer Decorative Gold Frame -->
      <rect x="25" y="25" width="${width - 50}" height="${height - 50}" rx="24" fill="none" stroke="url(#goldBorder)" stroke-width="2" stroke-opacity="0.4" />

      <!-- Center Logo Card (Crisp White/Cream Glass) -->
      <rect x="${cardX}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="24" fill="#FFFFFF" fill-opacity="0.98" stroke="url(#goldBorder)" stroke-width="3" />
      
      <!-- Slogan Banner at Bottom -->
      <text x="${width / 2}" y="555" text-anchor="middle" fill="#E6C766" font-family="Georgia, serif" font-size="24" font-weight="bold" letter-spacing="2">
        GAURAV ESTATES • PRANAV BANSAL
      </text>
      <text x="${width / 2}" y="588" text-anchor="middle" fill="#CBD5E1" font-family="system-ui, sans-serif" font-size="14" letter-spacing="3">
        BUY | SELL | INVEST • CALL: +91 99888 85889
      </text>
    </svg>
  `);

  const logoTop = Math.round(cardY + (cardHeight - logoMetadata.height) / 2);
  const logoLeft = Math.round((width - logoMetadata.width) / 2);

  await sharp(cardSvg)
    .composite([
      {
        input: resizedLogoBuffer,
        top: logoTop,
        left: logoLeft,
      }
    ])
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('✓ Generated public/og-image.png (1200x630)');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

