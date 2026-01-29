
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://thevirtualminds.com'

    // Core pages
    const routes = [
        '',
        '/about',
        '/blog',
        '/resources',
        '/book-consultation',
        '/case-studies',
        '/contact',
        '/faq',
        '/pricing',
        '/services',
        '/locations',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // High-value resource blueprints
    const blueprints = [
        '/resources/blueprints/medication-management',
        '/resources/blueprints/revenue-architecture',
        '/resources/blueprints/controlled-substance-ops',
        '/resources/blueprints/ehr-hardening',
        '/resources/blueprints/start-up-roadmap',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Dynamic blog posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(), // Could use post.date if parsed, but dynamic "now" is okay for initial index
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...blueprints, ...posts]
}
