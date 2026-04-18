import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Fix: Next.js 16 workspace root detection warning
    turbopack: {
        root: __dirname,
    },

    // 301 redirects: consolidate versioned resource pages to v4 (canonical)
    async redirects() {
        const base = '/resources/virtual-assistants-for-psychiatrists/california-psychiatric-va-cost-analysis-2026';
        return [
            { source: base,       destination: `${base}-v4`, permanent: true },
            { source: `${base}-v2`, destination: `${base}-v4`, permanent: true },
            { source: `${base}-v3`, destination: `${base}-v4`, permanent: true },
        ];
    },

    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days (was 60s)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'staticmap.openstreetmap.de',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
