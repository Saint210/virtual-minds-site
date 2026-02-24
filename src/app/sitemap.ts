
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { locations } from '@/data/locations'
import { glossaryTerms } from '@/data/glossary'
import { getAllPostSlugs } from '@/lib/blog-service'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://thevirtualminds.com'

    // Fetch live posts from Sanity
    let liveSlugs: string[] = []
    try {
        liveSlugs = await getAllPostSlugs()
    } catch (error) {
        console.error('Failed to fetch Sanity slugs for sitemap:', error)
    }

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

    // High-value resource guides
    const guides = [
        '/resources/guides/medication-management',
        '/resources/guides/billing-and-collections',
        '/resources/guides/ehr-optimization',
        '/resources/guides/start-up-roadmap',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Dynamic blog posts - merged from Sanity and Local
    const allSlugs = [...new Set([...liveSlugs, ...blogPosts.map(p => p.slug)])]
    const posts = allSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
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

    return [...routes, ...pillarPages, ...locationRoutes, ...guides, ...posts, ...glossaryRoutes]
}

