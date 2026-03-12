import type { Metadata } from 'next';
import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import { EmojiCard } from '@/components/EmojiCard';
import { FaqAccordion } from '@/components/FaqAccordion';
import { QuickCopyPanel } from '@/components/QuickCopyPanel';
import { TextArtShowcase } from '@/components/TextArtShowcase';
import { HEART_EMOJIS } from '@/data/emojis';
import { getDictionary } from '@/data/dictionaries';
import { FAQS } from '@/data/keywordContent';
import { buildLanguageAlternates, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

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
  const canonical = `/${locale}`;

  return {
    title: dictionary.home.heroTitle,
    description: dictionary.home.seoDescription,
    alternates: {
      canonical,
      languages: buildLanguageAlternates()
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
  const heroHighlights = HEART_EMOJIS.slice(0, 5);
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
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.content[locale].question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content[locale].answer
      }
    }))
  };

  return (
    <div className="home-page">
      <header className="home-hero" id="about">
        <div className="home-hero__content">
          <span className="hero-kicker">heartemojis.org</span>
          <div className="hero-stack">
            <h1 className="hero-title">{dictionary.home.heroTitle}</h1>
            <p className="hero-subtitle">{dictionary.home.heroSubtitle}</p>
          </div>
          <div className="hero-actions">
            <a className="cta-button" href="#all-hearts">
              {dictionary.home.heroCtaPrimary}
            </a>
            <Link className="cta-button cta-button--secondary" href={`/${locale}/generator/200`}>
              {dictionary.common.nav.generator}
            </Link>
            <a className="cta-button cta-button--ghost" href="#using-hearts">
              {dictionary.home.heroCtaSecondary}
            </a>
          </div>
          <ul className="hero-pill-list" aria-label="Featured heart emoji styles">
            {heroHighlights.map((emoji) => (
              <li key={`hero-${emoji.id}`} className="hero-pill">
                <span aria-hidden="true">{emoji.emoji}</span>
                <span>{dictionary.emojiContent[emoji.slug]?.name ?? emoji.meaning}</span>
              </li>
            ))}
          </ul>
        </div>

        <section className="quick-copy home-quick-copy" aria-labelledby="quick-copy-heading">
          <div className="quick-copy-header">
            <span className="section-kicker">Quick Copy</span>
            <h2 className="hero-title" id="quick-copy-heading">
              {dictionary.home.quickTitle}
            </h2>
            <p className="hero-subtitle">{dictionary.home.quickSubtitle}</p>
          </div>
          <QuickCopyPanel dictionary={dictionary} items={quickCopy} />
        </section>
      </header>

      <div className="home-ad-row">
        <AdSlot label={dictionary.common.adPlaceholder} slotId="top-leaderboard" className="ad-slot--soft" />
      </div>

      <section className="section-frame section-frame--spotlight" aria-labelledby="spotlight" id="spotlight">
        <div className="section-intro">
          <span className="section-kicker">Highlights</span>
          <h2 className="section-heading" id="spotlight">
            {dictionary.home.spotlightTitle}
          </h2>
          <p className="section-copy">{dictionary.home.copyDescription}</p>
          <div className="section-actions">
            <Link className="inline-link" href={`/${locale}/copy-paste`}>
              {dictionary.common.nav.copy} →
            </Link>
          </div>
        </div>
        <div className="spotlight-grid">
          {spotlight.map((emoji) => (
            <EmojiCard key={emoji.id} emoji={emoji} dictionary={dictionary} locale={locale} />
          ))}
        </div>
      </section>

      <section className="section-frame" aria-labelledby="all-hearts-heading" id="all-hearts">
        <div className="section-intro">
          <span className="section-kicker">Library</span>
          <h2 className="section-heading" id="all-hearts-heading">
            {dictionary.home.allHeading}
          </h2>
          <p className="section-copy">{dictionary.home.quickSubtitle}</p>
        </div>
        <div className="container">
          {HEART_EMOJIS.map((emoji) => (
            <EmojiCard key={emoji.id} emoji={emoji} dictionary={dictionary} locale={locale} />
          ))}
        </div>
      </section>

      <section className="cta-panel" aria-label="Call to action">
        <div className="cta-card cta-card--warm">
          <h3>{dictionary.pages.copy.title}</h3>
          <p>{dictionary.home.copyDescription}</p>
          <Link className="cta-button" href={`/${locale}/copy-paste`}>
            {dictionary.common.nav.copy}
          </Link>
        </div>
        <div className="cta-card cta-card--cool">
          <h3>{dictionary.pages.generator.title}</h3>
          <p>{dictionary.pages.generator.description}</p>
          <Link className="cta-button" href={`/${locale}/generator/200`}>
            {dictionary.common.nav.generator}
          </Link>
        </div>
      </section>

      {locale === 'es' ? (
        <section className="section-frame section-frame--soft" aria-labelledby="es-search-spotlight">
          <div className="section-intro">
            <span className="section-kicker">Búsquedas populares</span>
            <h2 className="section-heading" id="es-search-spotlight">
              Páginas que ya están captando búsquedas en español
            </h2>
            <p className="section-copy">
              Accesos rápidos a dos consultas con intención alta: cadenas largas para copiar y corazones listos
              para WhatsApp.
            </p>
          </div>
          <div className="search-related-grid">
            <Link href="/es/copiar/1000-corazones-para-copiar-y-pegar" className="search-related-card">
              <strong>1000 corazones para copiar y pegar</strong>
              <span>Copia bloques largos para WhatsApp, Instagram, TikTok y comentarios.</span>
            </Link>
            <Link href="/es/copiar/corazones-para-whatsapp" className="search-related-card">
              <strong>Corazones para WhatsApp</strong>
              <span>Combos para mensajes, estados, grupos y biografías dentro de WhatsApp.</span>
            </Link>
          </div>
        </section>
      ) : null}

      <section id="using-hearts" className="detail-wrapper home-guidance" aria-label="Guidance">
        <AdSlot label={dictionary.common.adPlaceholder} slotId="mid-rectangle" className="ad-slot--soft" />
        <div className="home-guidance__content">
          <span className="section-kicker">Guide</span>
          <h2 className="section-heading">{dictionary.home.usageTitle}</h2>
          <p className="card-description">{dictionary.detail.metadataDescription}</p>
          <p className="card-description">{dictionary.home.usageBody}</p>
          <Link href={`/${locale}/emoji/red-heart`} className="card-link">
            {dictionary.common.viewDetails} →
          </Link>
        </div>
      </section>

      <section id="text-art" className="section-frame section-frame--soft" aria-labelledby="text-art-heading">
        <div className="section-intro">
          <span className="section-kicker">Creative</span>
          <h2 className="section-heading" id="text-art-heading">
            {dictionary.home.textArtHeading}
          </h2>
          <p className="section-copy">{dictionary.home.textArtDescription}</p>
        </div>
        <TextArtShowcase dictionary={dictionary} />
      </section>

      <section className="section-frame section-frame--faq" id="emoji-faq" aria-labelledby="emoji-faq-heading">
        <div className="section-intro">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-heading" id="emoji-faq-heading">
            {dictionary.home.faqHeading}
          </h2>
        </div>
        <FaqAccordion locale={locale} />
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    </div>
  );
}
