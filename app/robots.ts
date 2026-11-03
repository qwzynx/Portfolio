import { MetadataRoute } from 'next'

// Required for output: "export" (static build)
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mahanghafarian.com' // Replace with your actual domain if different
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
