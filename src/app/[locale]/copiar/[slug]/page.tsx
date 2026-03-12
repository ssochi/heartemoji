import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SearchLandingPage } from '@/components/SearchLandingPage';
import {
  SEARCH_LANDING_PAGES,
  getSearchLandingPageBySlug
} from '@/data/searchLandingPages';
import { getLocaleFromParam } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

type SearchLandingRouteProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return SEARCH_LANDING_PAGES.map((page) => ({
    locale: 'es',
    slug: page.slug
  }));
}

export function generateMetadata({ params }: SearchLandingRouteProps): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const page = getSearchLandingPageBySlug(params.slug);

  if (locale !== 'es' || !page) {
    return {
      title: 'Not found',
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const canonical = `/es/copiar/${page.slug}`;

  return {
    title: page.title,
    description: page.description,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical,
      languages: {
        es: canonical,
        'x-default': canonical
      }
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteUrl}${canonical}`,
      locale: 'es_ES',
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
  const page = getSearchLandingPageBySlug(params.slug);

  if (locale !== 'es' || !page) {
    notFound();
  }

  const canonical = `/es/copiar/${page.slug}`;
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
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
        name: 'Heart Emojis',
        item: `${siteUrl}/es`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Copiar corazones',
        item: `${siteUrl}/es/copy-paste`
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
      <SearchLandingPage page={page} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  );
}
