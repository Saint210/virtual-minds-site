#!/usr/bin/env node
/**
 * Image Optimization Script
 * Converts all images in /public/images to WebP and AVIF formats
 * Generates responsive sizes for better mobile performance
 * 
 * Usage: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Responsive image widths
const SIZES = [400, 800, 1200];

// Quality settings
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 70;
const JPEG_QUALITY = 85;

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
    const ext = path.extname(filename).toLowerCase();
    const basename = path.basename(filename, ext);

    // Skip if not an image
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
        return;
    }

    console.log(`\nOptimizing: ${filename}`);

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        console.log(`  Original: ${(metadata.size / 1024).toFixed(0)}KB (${metadata.width}x${metadata.height})`);

        // Generate responsive sizes
        for (const width of SIZES) {
            // Skip if image is smaller than target width
            if (metadata.width < width) continue;

            const resizedImage = sharp(inputPath).resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });

            // WebP
            await resizedImage
                .clone()
                .webp({ quality: WEBP_QUALITY })
                .toFile(path.join(OUTPUT_DIR, `${basename}-${width}.webp`));

            // AVIF (best compression)
            await resizedImage
                .clone()
                .avif({ quality: AVIF_QUALITY })
                .toFile(path.join(OUTPUT_DIR, `${basename}-${width}.avif`));

            console.log(`  ✓ Generated ${width}w (WebP + AVIF)`);
        }

        // Also create full-size optimized versions
        const webpBuffer = await sharp(inputPath)
            .webp({ quality: WEBP_QUALITY })
            .toBuffer();

        const avifBuffer = await sharp(inputPath)
            .avif({ quality: AVIF_QUALITY })
            .toBuffer();

        await fs.promises.writeFile(
            path.join(OUTPUT_DIR, `${basename}.webp`),
            webpBuffer
        );

        await fs.promises.writeFile(
            path.join(OUTPUT_DIR, `${basename}.avif`),
            avifBuffer
        );

        console.log(`  ✓ WebP: ${(webpBuffer.length / 1024).toFixed(0)}KB (${((1 - webpBuffer.length / metadata.size) * 100).toFixed(0)}% smaller)`);
        console.log(`  ✓ AVIF: ${(avifBuffer.length / 1024).toFixed(0)}KB (${((1 - avifBuffer.length / metadata.size) * 100).toFixed(0)}% smaller)`);

    } catch (error) {
        console.error(`  ✗ Error: ${error.message}`);
    }
}

async function main() {
    console.log('🖼️  Image Optimization Script');
    console.log('================================\n');
    console.log(`Input:  ${INPUT_DIR}`);
    console.log(`Output: ${OUTPUT_DIR}\n`);

    const files = fs.readdirSync(INPUT_DIR);
    const imageFiles = files.filter(f => {
        const ext = path.extname(f).toLowerCase();
        return ['.png', '.jpg', '.jpeg'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to optimize\n`);

    for (const file of imageFiles) {
        await optimizeImage(path.join(INPUT_DIR, file), file);
    }

    console.log('\n✅ Optimization complete!');
    console.log(`\nNext steps:`);
    console.log(`1. Review optimized images in: ${OUTPUT_DIR}`);
    console.log(`2. Update image paths in your components to use optimized versions`);
    console.log(`3. Use <picture> element for format fallbacks`);
}

main().catch(console.error);
