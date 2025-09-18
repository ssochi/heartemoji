import type { Metadata } from 'next';
import { MegaHeartGenerator } from '@/components/MegaHeartGenerator';
import { getDictionary } from '@/data/dictionaries';
import { defaultLocale, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';
const PRESET_COUNTS = [50, 100, 200, 300, 500, 1000];

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    PRESET_COUNTS.map((count) => ({
      locale,
      count: String(count)
    }))
  );
}

function sanitizeCount(input: string) {
  const value = Number.parseInt(input, 10);
  if (!Number.isFinite(value)) {
    return 200;
  }
  return Math.min(Math.max(value, 10), 1000);
}

export function generateMetadata({ params }: { params: { locale: string; count: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const count = sanitizeCount(params.count);
  const canonical = `${locale === defaultLocale ? '' : `/${locale}`}/generator/${count}`;

  return {
    title: `${dictionary.pages.generator.title} — ${count}`,
    description: dictionary.pages.generator.description,
    alternates: {
      canonical,
      languages: locales.reduce<Record<string, string>>((acc, lang) => {
        acc[lang] = `${lang === defaultLocale ? '' : `/${lang}`}/generator/${count}`;
        return acc;
      }, {})
    },
    openGraph: {
      title: `${dictionary.pages.generator.title} (${count})`,
      description: dictionary.pages.generator.description,
      url: `${siteUrl}${canonical}`,
      type: 'article'
    }
  };
}

type GeneratorPageProps = {
  params: {
    locale: string;
    count: string;
  };
};

export default function GeneratorPage({ params }: GeneratorPageProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const count = sanitizeCount(params.count);

  return (
    <div className="page-layout">
      <header className="page-hero">
        <h1>{dictionary.pages.generator.title}</h1>
        <p>{dictionary.pages.generator.description}</p>
      </header>

      <MegaHeartGenerator dictionary={dictionary} initialCount={count} />
    </div>
  );
}
