import type { MetadataRoute } from 'next';
import { HEART_EMOJIS } from '@/data/emojis';
import { defaultLocale, locales } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';
const generatorCounts = [50, 100, 200, 300, 500, 1000];
const localeStaticPaths = ['', '/copy-paste', '/text-art', '/fun/emoji-fish-tank'];

function localePrefix(locale: string) {
  return locale === defaultLocale ? '' : `/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const timestamp = new Date();

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    const prefix = `${siteUrl}${localePrefix(locale)}`;

    localeStaticPaths.forEach((path, index) => {
      entries.push({
        url: `${prefix}${path}`,
        lastModified: timestamp,
        changeFrequency: 'weekly',
        priority: index === 0 ? 1 : 0.8
      });
    });

    generatorCounts.forEach((count) => {
      entries.push({
        url: `${prefix}/generator/${count}`,
        lastModified: timestamp,
        changeFrequency: 'weekly',
        priority: 0.7
      });
    });

    HEART_EMOJIS.forEach((emoji) => {
      entries.push({
        url: `${prefix}/emoji/${emoji.slug}`,
        lastModified: timestamp,
        changeFrequency: 'weekly',
        priority: 0.7
      });
    });
  });

  ['/embed/emoji-fish-tank', '/embed/emoji-fish-tank/compact'].forEach((path) => {
    entries.push({
      url: `${siteUrl}${path}`,
      lastModified: timestamp,
      changeFrequency: 'weekly',
      priority: 0.4
    });
  });

  return entries;
}
