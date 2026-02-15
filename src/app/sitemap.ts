
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { locations } from '@/data/locations'
import { glossaryTerms } from '@/data/glossary'

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

    // HIGH-PRIORITY PILLAR PAGES (SEO-critical content)
    const pillarPages = [
        '/services/virtual-assistant',
        '/resources/psychiatry-practice-startup-guide',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 1.0,
    }))

    // Dynamic Location Pages for California Cities
    const locationRoutes = locations.map((location) => ({
        url: `${baseUrl}/locations/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // High-value resource blueprints
    const blueprints = [
        '/resources/blueprints/medication-management',
        '/resources/blueprints/revenue-architecture',

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
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    // Dynamic Glossary Terms
    const glossaryRoutes = glossaryTerms.map((term) => ({
        url: `${baseUrl}/glossary/${term.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...pillarPages, ...locationRoutes, ...blueprints, ...posts, ...glossaryRoutes]
}
