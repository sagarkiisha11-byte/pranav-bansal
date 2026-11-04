const sharp = require('sharp');
const path = require('path');

async function generateOG() {
  const publicDir = path.join(__dirname, '..', 'public');
  const logoPath = path.join(publicDir, 'logo.png');
  const ogPath = path.join(publicDir, 'og-image.png');

  const width = 1200;
  const height = 630;

  // Resize new logo for OG card to width 680 (aspect ratio 816/461 -> height ~384)
  const resizedLogoBuffer = await sharp(logoPath)
    .resize(680, null, { fit: 'inside' })
    .toBuffer();

  const logoMetadata = await sharp(resizedLogoBuffer).metadata();

  const cardSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#141824" />
          <stop offset="60%" stop-color="#07080B" />
          <stop offset="100%" stop-color="#040507" />
        </radialGradient>
        <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#DFC082" />
          <stop offset="50%" stop-color="#C5A059" />
          <stop offset="100%" stop-color="#9D7A37" />
        </linearGradient>
      </defs>
      <!-- Base Background -->
      <rect width="${width}" height="${height}" fill="url(#bgGlow)" />
      
      <!-- Outer Decorative Gold Frame -->
      <rect x="25" y="25" width="${width - 50}" height="${height - 50}" rx="24" fill="none" stroke="url(#goldBorder)" stroke-width="2" stroke-opacity="0.35" />

      <!-- Center Ambient Glow -->
      <circle cx="${width / 2}" cy="240" r="260" fill="#C5A059" opacity="0.06" filter="blur(60px)" />
      
      <!-- Slogan Banner at Bottom -->
      <text x="${width / 2}" y="535" text-anchor="middle" fill="#DFC082" font-family="Georgia, serif" font-size="28" font-weight="bold" letter-spacing="2">
        GAURAV ESTATES • PRANAV BANSAL
      </text>
      <text x="${width / 2}" y="572" text-anchor="middle" fill="#A0AEC0" font-family="system-ui, sans-serif" font-size="15" letter-spacing="3">
        BUY | SELL | INVEST • CALL: +91 99888 85889
      </text>
    </svg>
  `);

  const logoTop = Math.round(50 + (430 - logoMetadata.height) / 2);
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
    .toFile(ogPath);

  console.log(`✓ Generated new 1200x630 OG image at ${ogPath}`);
}

generateOG().catch(console.error);
