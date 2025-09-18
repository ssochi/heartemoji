import type { Metadata } from 'next';
import Link from 'next/link';
import { CopyBundles } from '@/components/CopyBundles';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getDictionary } from '@/data/dictionaries';
import { COLOR_GUIDE } from '@/data/keywordContent';
import { defaultLocale, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const canonical = `${locale === defaultLocale ? '' : `/${locale}`}/copy-paste`;

  return {
    title: dictionary.pages.copy.title,
    description: dictionary.pages.copy.description,
    alternates: {
      canonical,
      languages: locales.reduce<Record<string, string>>((acc, lang) => {
        acc[lang] = `${lang === defaultLocale ? '' : `/${lang}`}/copy-paste`;
        return acc;
      }, {})
    },
    openGraph: {
      title: dictionary.pages.copy.title,
      description: dictionary.pages.copy.description,
      url: `${siteUrl}${canonical}`,
      type: 'article'
    }
  };
}

type CopyPageProps = {
  params: {
    locale: string;
  };
};

export default function CopyPage({ params }: CopyPageProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);

  return (
    <div className="page-layout">
      <header className="page-hero">
        <LanguageSwitcher currentLocale={locale} dictionary={dictionary} path="copy-paste" />
        <h1>{dictionary.pages.copy.title}</h1>
        <p>{dictionary.pages.copy.description}</p>
        <Link className="cta-button" href={`/${locale}/text-art`}>
          {dictionary.pages.textArt.title}
        </Link>
      </header>

      <section aria-labelledby="bundles-intro">
        <h2 className="section-heading" id="bundles-intro">
          {dictionary.pages.copy.bundlesIntro}
        </h2>
        <CopyBundles dictionary={dictionary} locale={locale} className="bundle-grid bundle-grid--spacious" />
      </section>

      <section aria-labelledby="color-guide-ref" id="color-guide-ref">
        <h2 className="section-heading" id="color-guide-ref">
          {dictionary.home.colorHeading}
        </h2>
        <p className="card-description">{dictionary.home.colorDescription}</p>
        <ul className="inline-color-list" aria-label="Color heart emojis quick view">
          {COLOR_GUIDE.map((item) => (
            <li key={item.slug}>
              <Link href={`/${locale}/emoji/${item.slugs[0]}`}>
                <span aria-hidden="true">{item.emoji}</span> {item.title[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-panel" aria-label="Related tools">
        <div className="cta-card">
          <h3>{dictionary.pages.textArt.title}</h3>
          <p>{dictionary.pages.textArt.description}</p>
          <Link className="cta-button" href={`/${locale}/text-art`}>
            {dictionary.common.nav.textArt}
          </Link>
        </div>
        <div className="cta-card">
          <h3>{dictionary.pages.generator.title}</h3>
          <p>{dictionary.pages.generator.description}</p>
          <Link className="cta-button" href={`/${locale}/generator/200`}>
            {dictionary.common.nav.generator}
          </Link>
        </div>
      </section>
    </div>
  );
}
