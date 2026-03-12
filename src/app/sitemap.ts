import type { MetadataRoute } from 'next';
import { HEART_EMOJIS } from '@/data/emojis';
import { SEARCH_LANDING_PAGES } from '@/data/searchLandingPages';
import { getLocalePath, locales } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';
const indexableGeneratorCounts = [200, 1000];
const localeStaticPaths = ['', '/copy-paste', '/text-art', '/fun/emoji-fish-tank'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    const prefix = `${siteUrl}${getLocalePath(locale)}`;

    localeStaticPaths.forEach((path, index) => {
      entries.push({
        url: `${prefix}${path}`,
        changeFrequency: 'weekly',
        priority: index === 0 ? 1 : 0.8
      });
    });

    indexableGeneratorCounts.forEach((count) => {
      entries.push({
        url: `${prefix}/generator/${count}`,
        changeFrequency: 'weekly',
        priority: count === 1000 ? 0.8 : 0.7
      });
    });

    HEART_EMOJIS.forEach((emoji) => {
      entries.push({
        url: `${prefix}/emoji/${emoji.slug}`,
        changeFrequency: 'weekly',
        priority: 0.7
      });
    });

    if (locale === 'es') {
      SEARCH_LANDING_PAGES.forEach((page) => {
        entries.push({
          url: `${prefix}/copiar/${page.slug}`,
          changeFrequency: 'weekly',
          priority: 0.85
        });
      });
    }
  });

  return entries;
}
