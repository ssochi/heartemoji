import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SearchLandingPage } from '@/components/SearchLandingPage';
import {
  getSearchLandingCollection,
  getSearchLandingCollectionPage
} from '@/data/searchLandingCollections';
import { getDictionary } from '@/data/dictionaries';
import { getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

type SearchLandingRouteProps = {
  params: {
    locale: string;
    slug: string;
  };
};

const openGraphLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  es: 'es_ES'
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSearchLandingCollection(locale).map((page) => ({
      locale,
      slug: page.slug
    }))
  );
}

export function generateMetadata({ params }: SearchLandingRouteProps): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const page = getSearchLandingCollectionPage(locale, params.slug);

  if (!page) {
    return {
      title: 'Not found',
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const canonical = `/${locale}/copy-paste/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${canonical}`,
      locale: openGraphLocaleMap[locale],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description
    }
  };
}

export default function SearchLandingRoute({ params }: SearchLandingRouteProps) {
  const locale = getLocaleFromParam(params.locale);
  const page = getSearchLandingCollectionPage(locale, params.slug);

  if (!page) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const canonical = `/${locale}/copy-paste/${page.slug}`;
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: dictionary.common.nav.home,
        item: `${siteUrl}/${locale}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: dictionary.pages.copy.title,
        item: `${siteUrl}/${locale}/copy-paste`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.h1,
        item: `${siteUrl}${canonical}`
      }
    ]
  };

  return (
    <>
      <SearchLandingPage page={page} locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  );
}
