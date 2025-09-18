import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AdSlot } from '@/components/AdSlot';
import { CopyButton } from '@/components/CopyButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getDictionary } from '@/data/dictionaries';
import { HEART_EMOJIS, getEmojiBySlug, getRelatedEmojis, type HeartEmoji } from '@/data/emojis';
import { COLOR_GUIDE } from '@/data/keywordContent';
import { getEmojiGuide } from '@/data/emojiGuides';
import { defaultLocale, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';
import { toneDescriptions, toneLabels } from '@/lib/tone';

const siteUrl = 'https://heartemojis.org';

const localeCodes: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES'
};

type EmojiPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    HEART_EMOJIS.map((emoji) => ({
      locale,
      slug: emoji.slug
    }))
  );
}

export function generateMetadata({ params }: EmojiPageProps): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const emoji = getEmojiBySlug(params.slug);
  if (!emoji) {
    return { title: 'Emoji not found' };
  }

  const dictionary = getDictionary(locale);
  const content = resolveEmojiContent(dictionary.emojiContent[emoji.slug], emoji, locale);
  const keywordList = emoji.keywords[locale] ?? emoji.keywords.en;

  const canonical = `${locale === defaultLocale ? '' : `/${locale}`}/emoji/${emoji.slug}`;
  const alternates = locales.reduce<Record<string, string>>((acc, currentLocale) => {
    acc[currentLocale] = `${currentLocale === defaultLocale ? '' : `/${currentLocale}`}/emoji/${emoji.slug}`;
    return acc;
  }, {});

  const description = `${content.meaning} ${content.usage}`.trim();

  return {
    title: `${content.name} — Heart Emojis`,
    description,
    keywords: keywordList,
    alternates: {
      canonical,
      languages: alternates
    },
    openGraph: {
      title: content.name,
      description,
      url: `${siteUrl}${canonical}`,
      type: 'article',
      locale: localeCodes[locale]
    },
    twitter: {
      card: 'summary',
      title: content.name,
      description
    }
  };
}

export default function EmojiDetailPage({ params }: EmojiPageProps) {
  const locale = getLocaleFromParam(params.locale);
  const emoji = getEmojiBySlug(params.slug);

  if (!emoji) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const content = resolveEmojiContent(dictionary.emojiContent[emoji.slug], emoji, locale);
  const keywordList = emoji.keywords[locale] ?? emoji.keywords.en;
  const related = getRelatedEmojis(emoji.slug);
  const guide = getEmojiGuide(emoji.slug);
  const colorCard = COLOR_GUIDE.find((entry) => entry.slugs.includes(emoji.slug));
  const toneLabel = toneLabels[locale][emoji.tone];
  const toneDescription = toneDescriptions[locale][emoji.tone];
  const canonical = `${locale === defaultLocale ? '' : `/${locale}`}/emoji/${emoji.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: content.name,
    alternateName: emoji.meaning,
    description: content.meaning,
    inLanguage: localeCodes[locale],
    url: `${siteUrl}${canonical}`,
    identifier: emoji.unicode,
    keywords: keywordList
  };

  return (
    <div className="detail-page">
      <LanguageSwitcher currentLocale={locale} dictionary={dictionary} path={`emoji/${emoji.slug}`} />
      <article className="detail-hero">
        <div className="detail-emoji">
          <span className="emoji-preview" aria-hidden="true">
            {emoji.emoji}
          </span>
          <CopyButton value={emoji.emoji} label={dictionary.common.copy} copiedLabel={dictionary.common.copied} />
        </div>
        <div className="detail-summary">
          <h1 className="hero-title">{content.name}</h1>
          <p className="card-description">{content.meaning}</p>
          <p className="card-description">{content.usage}</p>
          <div className="detail-meta">
            <div className="detail-meta-item">
              <strong>{dictionary.detail.unicodeLabel}</strong>
              <span>{emoji.unicode}</span>
            </div>
            <div className="detail-meta-item">
              <strong>{toneLabel}</strong>
              <span>{toneDescription}</span>
            </div>
          </div>
          <Link href={`/${locale}`} className="card-link">
            ← {dictionary.common.backToList}
          </Link>
        </div>
      </article>

      {colorCard ? (
        <section className="color-detail-card" aria-labelledby="color-meaning">
          <div className="color-card__header">
            <span className="color-card__emoji" aria-hidden="true">
              {colorCard.emoji}
            </span>
            <h2 className="section-heading" id="color-meaning">
              {colorCard.title[locale]}
            </h2>
          </div>
          <p>{colorCard.description[locale]}</p>
          <ul className="color-card__keywords">
            {colorCard.keywords[locale].slice(0, 4).map((keyword) => (
              <li key={keyword}>#{keyword}</li>
            ))}
          </ul>
          <Link className="card-link" href={`/${locale}/copy-paste#color-guide-ref`}>
            {dictionary.home.colorHeading} →
          </Link>
        </section>
      ) : null}

      {guide ? (
        <section className="guide-block" aria-labelledby="guide-heading">
          <div className="guide-block__column">
            <h2 className="section-heading" id="guide-heading">
              {dictionary.detail.guideHeading}
            </h2>
            <ul>
              {guide.meaningBullets[locale].map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div className="guide-block__column">
            <h3>{dictionary.detail.usageListHeading}</h3>
            <ul>
              {guide.usageIdeas[locale].map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ul>
          </div>
          <div className="guide-block__combos">
            <h3>{dictionary.detail.combosHeading}</h3>
            <div className="guide-block__combo-buttons">
              {guide.combos.map((combo) => (
                <CopyButton
                  key={`${emoji.slug}-${combo}`}
                  value={combo.replace(/\s{2,}/g, ' ').trim()}
                  label={dictionary.common.copy}
                  copiedLabel={dictionary.common.copied}
                  size="small"
                  showLabel
                />
              ))}
            </div>
          </div>
          <p className="guide-block__aliases">
            <strong>{dictionary.detail.alsoSearched}:</strong> {guide.aliases[locale].join(', ')}
          </p>
        </section>
      ) : null}

      <section>
        <h2 className="section-heading">{dictionary.detail.relatedHeading}</h2>
        <div className="related-grid">
          {related.map((item) => (
            <Link key={item.id} href={`/${locale}/emoji/${item.slug}`}>
              {resolveEmojiContent(dictionary.emojiContent[item.slug], item, locale).name}
            </Link>
          ))}
        </div>
      </section>

      <AdSlot label={dictionary.common.adPlaceholder} slotId="detail-bottom" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}

function resolveEmojiContent(
  entry: { name: string; meaning: string; usage: string } | undefined,
  emoji: HeartEmoji,
  locale: Locale
) {
  if (entry) {
    return entry;
  }

  switch (locale) {
    case 'zh':
      return {
        name: `${emoji.emoji} ${emoji.meaning}`,
        meaning: `${emoji.meaning}（尚未提供中文说明）`,
        usage: `可用于：${emoji.usage}`
      };
    case 'es':
      return {
        name: `${emoji.emoji} ${emoji.meaning}`,
        meaning: `${emoji.meaning} (descripción en español próximamente)`,
        usage: `Úsalo para: ${emoji.usage}`
      };
    default:
      return {
        name: emoji.meaning,
        meaning: emoji.meaning,
        usage: emoji.usage
      };
  }
}
