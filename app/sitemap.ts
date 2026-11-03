import { MetadataRoute } from 'next'

// Required for output: "export" (static build)
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mahanghafarian.com' // Replace with your actual domain if different
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
