import type { Metadata } from 'next';
import Link from 'next/link';
import { TextArtShowcase } from '@/components/TextArtShowcase';
import { getDictionary } from '@/data/dictionaries';
import { defaultLocale, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const canonical = `${locale === defaultLocale ? '' : `/${locale}`}/text-art`;

  return {
    title: dictionary.pages.textArt.title,
    description: dictionary.pages.textArt.description,
    alternates: {
      canonical,
      languages: locales.reduce<Record<string, string>>((acc, lang) => {
        acc[lang] = `${lang === defaultLocale ? '' : `/${lang}`}/text-art`;
        return acc;
      }, {})
    },
    openGraph: {
      title: dictionary.pages.textArt.title,
      description: dictionary.pages.textArt.description,
      url: `${siteUrl}${canonical}`,
      type: 'article'
    }
  };
}

type TextArtPageProps = {
  params: {
    locale: string;
  };
};

export default function TextArtPage({ params }: TextArtPageProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);

  return (
    <div className="page-layout">
      <header className="page-hero">
        <h1>{dictionary.pages.textArt.title}</h1>
        <p>{dictionary.pages.textArt.description}</p>
        <Link className="cta-button" href={`/${locale}/copy-paste`}>
          {dictionary.pages.copy.title}
        </Link>
      </header>

      <TextArtShowcase dictionary={dictionary} />
    </div>
  );
}
