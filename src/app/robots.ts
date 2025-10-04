import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://heartemojis.org/sitemap.xml',
    host: 'https://heartemojis.org'
  };
}