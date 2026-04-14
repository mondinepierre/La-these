import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Supprimez ou commentez la ligne disallow: '/blog/'
      },
    ],
    sitemap: 'https://www.lathese.fr/sitemap.xml',
  }
}