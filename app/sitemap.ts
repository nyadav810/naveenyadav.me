import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://naveenyadav.me',
      lastModified: new Date(),
    },
  ]
}
