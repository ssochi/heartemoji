import type { Metadata } from 'next';
import Link from 'next/link';
import { AdSlot } from '@/components/AdSlot';
import { EmojiCard } from '@/components/EmojiCard';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { QuickCopyPanel } from '@/components/QuickCopyPanel';
import { HEART_EMOJIS } from '@/data/emojis';
import { getDictionary } from '@/data/dictionaries';
import { defaultLocale, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN'
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);

  const alternates = locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = currentLocale === defaultLocale ? '/' : `/${currentLocale}`;
    return acc;
  }, {});

  const canonical = locale === defaultLocale ? '/' : `/${locale}`;

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
  const quickCopy = HEART_EMOJIS.slice(0, 24).map((emoji) => ({
    slug: emoji.slug,
    emoji: emoji.emoji,
    name: dictionary.emojiContent[emoji.slug]?.name ?? emoji.meaning
  }));

  return (
    <div>
      <header className="header" id="about">
        <LanguageSwitcher currentLocale={locale} dictionary={dictionary} />

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

      <section id="using-hearts" className="detail-wrapper" aria-label="Guidance">
        <AdSlot label={dictionary.common.adPlaceholder} slotId="mid-rectangle" />
        <div>
          <h2 className="section-heading">{dictionary.home.usageTitle}</h2>
          <p className="card-description">
            {dictionary.detail.metadataDescription}
          </p>
          <p className="card-description">
            {locale === 'en'
              ? 'Need brand-guided assets? Build your own collection by remixing these hearts with gradients, stickers, and fonts.'
              : '打造自定义品牌素材？将这些心形表情与渐变、贴纸和字体搭配，轻松延伸出更多风格。'}
          </p>
          <Link href={`/${locale}/emoji/red-heart`} className="card-link">
            {dictionary.common.viewDetails} →
          </Link>
        </div>
      </section>
    </div>
  );
}
