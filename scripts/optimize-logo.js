const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, '../public/images/virtual-minds-logo.png');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

async function optimizeLogo() {
    if (!fs.existsSync(INPUT_FILE)) {
        console.error('Input file not found:', INPUT_FILE);
        return;
    }

    console.log('Optimizing logo...');

    // 1. Generate WebP (Best for modern browsers)
    await sharp(INPUT_FILE)
        .resize(400, null, { withoutEnlargement: true }) // Max 400px width
        .webp({ quality: 85 })
        .toFile(path.join(OUTPUT_DIR, 'virtual-minds-logo-opt.webp'));

    console.log('Generated virtual-minds-logo-opt.webp');

    // 2. Generate Optimized PNG (Fallback/Standard)
    await sharp(INPUT_FILE)
        .resize(400, null, { withoutEnlargement: true })
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(path.join(OUTPUT_DIR, 'virtual-minds-logo-opt.png'));

    console.log('Generated virtual-minds-logo-opt.png');
}

optimizeLogo().catch(console.error);
