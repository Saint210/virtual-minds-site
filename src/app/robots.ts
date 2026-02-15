
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/portal/', '/tools/practice-leaks/report/', '/embed/'],
        },
        sitemap: 'https://thevirtualminds.com/sitemap.xml',
    }
}
