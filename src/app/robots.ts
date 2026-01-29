
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/portal/',
        },
        sitemap: 'https://thevirtualminds.com/sitemap.xml',
    }
}
