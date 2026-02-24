
import { MetadataRoute } from 'next'
import { blogPosts as staticPosts } from '@/lib/blog-data'
import { getPostsForRSS } from '@/lib/blog-service'

export async function GET() {
    const baseUrl = 'https://thevirtualminds.com'

    // Fetch live posts from Sanity
    let livePosts = []
    try {
        livePosts = await getPostsForRSS()
    } catch (error) {
        console.error('Failed to fetch Sanity posts for RSS:', error)
    }

    // Combine posts (merged)
    // Map static posts to match Sanity structure for easier XML generation
    const mappedStatic = staticPosts.map(p => ({
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        publishedAt: new Date(p.date).toISOString().includes('Invalid') ? new Date('2026-01-01').toISOString() : new Date(p.date).toISOString(),
        categories: [p.category]
    }))

    // Merge and remove duplicates by slug
    const allPosts = [...livePosts]
    const liveSlugs = new Set(livePosts.map(p => p.slug))

    for (const p of mappedStatic) {
        if (!liveSlugs.has(p.slug)) {
            allPosts.push(p)
        }
    }

    // Sort by date desc
    allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    const rssItems = allPosts.map(post => `
        <item>
            <title>${escapeXml(post.title)}</title>
            <link>${baseUrl}/blog/${post.slug}</link>
            <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
            <description>${escapeXml(post.excerpt)}</description>
            <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
            ${post.categories.map((c: string) => `<category>${escapeXml(c)}</category>`).join('')}
        </item>
    `).join('')

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Virtual Minds - Practice Intelligence</title>
    <link>${baseUrl}/blog</link>
    <description>Expert insights on California psychiatric virtual assistants and practice management.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${rssItems}
</channel>
</rss>`

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}

function escapeXml(unsafe: string) {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}
