import type { Metadata } from 'next';
import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import { EmojiCard } from '@/components/EmojiCard';
import { FaqAccordion } from '@/components/FaqAccordion';
import { QuickCopyPanel } from '@/components/QuickCopyPanel';
import { TextArtShowcase } from '@/components/TextArtShowcase';
import { HEART_EMOJIS } from '@/data/emojis';
import { getDictionary } from '@/data/dictionaries';
import { defaultLocale, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  es: 'es_ES'
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);

  const alternates = locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = `/${currentLocale}`;
    return acc;
  }, {});

  const canonical = `/${locale}`;

  return {
    title: dictionary.home.heroTitle,
    description: dictionary.home.seoDescription,
    alternates: {
      canonical,
      languages: alternates
    },
    openGraph: {
      url: `${siteUrl}${canonical}`,
      locale: openGraphLocales[locale],
      title: dictionary.home.heroTitle,
      description: dictionary.home.seoDescription,
      siteName: 'Heart Emojis',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.home.heroTitle,
      description: dictionary.home.seoDescription
    }
  };
}

type LocaleHomePageProps = {
  params: {
    locale: string;
  };
};

export default function LocaleHomePage({ params }: LocaleHomePageProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const spotlight = HEART_EMOJIS.slice(0, 4);
  const quickCopy = HEART_EMOJIS.slice(0, 28).map((emoji) => ({
    slug: emoji.slug,
    emoji: emoji.emoji,
    name: dictionary.emojiContent[emoji.slug]?.name ?? emoji.meaning
  }));
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: HEART_EMOJIS.slice(0, 10).map((emoji, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${siteUrl}/${locale}/emoji/${emoji.slug}`
    }))
  };

  return (
    <div>
      <header className="header" id="about">
        <section className="quick-copy" aria-labelledby="quick-copy-heading">
          <div className="quick-copy-header">
            <h1 className="hero-title" id="quick-copy-heading">
              {dictionary.home.quickTitle}
            </h1>
            <p className="hero-subtitle">{dictionary.home.quickSubtitle}</p>
          </div>
          <QuickCopyPanel dictionary={dictionary} items={quickCopy} />
        </section>

        <div className="hero-topline">
          <h2 className="hero-title">{dictionary.home.heroTitle}</h2>
          <p className="hero-subtitle">{dictionary.home.heroSubtitle}</p>
          <div className="hero-actions">
            <a href="#all-hearts">{dictionary.home.heroCtaPrimary}</a>
            <a href="#using-hearts">{dictionary.home.heroCtaSecondary}</a>
          </div>
        </div>

        <AdSlot label={dictionary.common.adPlaceholder} slotId="top-leaderboard" />
      </header>

      <section aria-labelledby="spotlight" id="spotlight">
        <h2 className="section-heading" id="spotlight">
          {dictionary.home.spotlightTitle}
        </h2>
        <div className="spotlight-grid">
          {spotlight.map((emoji) => (
            <EmojiCard key={emoji.id} emoji={emoji} dictionary={dictionary} locale={locale} />
          ))}
        </div>
      </section>

      <section aria-labelledby="all-hearts" id="all-hearts">
        <h2 className="section-heading">{dictionary.home.allHeading}</h2>
        <div className="container">
          {HEART_EMOJIS.map((emoji) => (
            <EmojiCard key={emoji.id} emoji={emoji} dictionary={dictionary} locale={locale} />
          ))}
        </div>
      </section>

      <section id="text-art" aria-labelledby="text-art-heading">
        <h2 className="section-heading" id="text-art-heading">
          {dictionary.home.textArtHeading}
        </h2>
        <p className="card-description">{dictionary.home.textArtDescription}</p>
        <TextArtShowcase dictionary={dictionary} />
      </section>

      <section className="cta-panel" aria-label="Call to action">
        <div className="cta-card">
          <h3>{dictionary.pages.copy.title}</h3>
          <p>{dictionary.home.copyDescription}</p>
          <Link className="cta-button" href={`/${locale}/copy-paste`}>
            {dictionary.common.nav.copy}
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

      <section id="using-hearts" className="detail-wrapper" aria-label="Guidance">
        <AdSlot label={dictionary.common.adPlaceholder} slotId="mid-rectangle" />
        <div>
          <h2 className="section-heading">{dictionary.home.usageTitle}</h2>
          <p className="card-description">{dictionary.detail.metadataDescription}</p>
          <p className="card-description">{dictionary.home.usageBody}</p>
          <Link href={`/${locale}/emoji/red-heart`} className="card-link">
            {dictionary.common.viewDetails} →
          </Link>
        </div>
      </section>

      <section id="emoji-faq" aria-labelledby="emoji-faq-heading">
        <h2 className="section-heading" id="emoji-faq-heading">
          {dictionary.home.faqHeading}
        </h2>
        <FaqAccordion locale={locale} />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </div>
  );
}
