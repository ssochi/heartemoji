import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AdSlot } from '@/components/AdSlot';
import { CopyButton } from '@/components/CopyButton';
import { EmojiCard } from '@/components/EmojiCard';
import { getDictionary } from '@/data/dictionaries';
import { HEART_EMOJIS, getEmojiBySlug, getRelatedEmojis, type HeartEmoji } from '@/data/emojis';
import { getEmojiGuide } from '@/data/emojiGuides';
import { COLOR_GUIDE } from '@/data/keywordContent';
import { buildLanguageAlternates, getLocaleFromParam, locales, type Locale } from '@/lib/i18n';
import { toneDescriptions, toneLabels } from '@/lib/tone';

const siteUrl = 'https://heartemojis.org';

const schemaLocales: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES'
};

const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  es: 'es_ES'
};

type DetailPageCopy = {
  heroKicker: string;
  quickAnswerKicker: string;
  searchTermsHeading: string;
  searchTermsDescription: string;
  contextHeading: string;
  copyHeading: string;
  copyDescription: string;
  pairsWellWithHeading: string;
  faqKicker: string;
  faqHeading: string;
  exploreKicker: string;
  exploreHeading: string;
  breadcrumbHome: string;
  faqJumpLabel: string;
  colorMeaningLabel: string;
  keywordLabel: string;
};

const DETAIL_PAGE_COPY: Record<Locale, DetailPageCopy> = {
  en: {
    heroKicker: 'Emoji detail',
    quickAnswerKicker: 'Quick answer',
    searchTermsHeading: 'Search intent',
    searchTermsDescription: 'These are the phrases people tend to use when they want this emoji, its meaning, or a close variant.',
    contextHeading: 'Tone and context',
    copyHeading: 'Copy and paste ideas',
    copyDescription: 'Copy the single emoji or use one of these ready-made combos in captions, replies, or display names.',
    pairsWellWithHeading: 'Pairs well with',
    faqKicker: 'FAQ',
    faqHeading: 'Questions people ask about this emoji',
    exploreKicker: 'Explore more',
    exploreHeading: 'More heart emoji pages worth opening next',
    breadcrumbHome: 'Heart Emojis',
    faqJumpLabel: 'Jump to FAQ',
    colorMeaningLabel: 'Color topic',
    keywordLabel: 'Popular keywords'
  },
  zh: {
    heroKicker: '表情详情',
    quickAnswerKicker: '快速回答',
    searchTermsHeading: '搜索意图',
    searchTermsDescription: '这些词通常对应用户在找这个表情、它的含义，或和它相近的变体时会输入的查询。',
    contextHeading: '语气与场景',
    copyHeading: '复制与搭配',
    copyDescription: '可以直接复制单个表情，也可以拿下面这些现成组合去发帖、回覆或放进昵称。',
    pairsWellWithHeading: '适合一起使用',
    faqKicker: '常见问题',
    faqHeading: '大家常问的几个问题',
    exploreKicker: '继续浏览',
    exploreHeading: '接下来值得打开的心形相关页面',
    breadcrumbHome: '心形表情',
    faqJumpLabel: '跳到常见问题',
    colorMeaningLabel: '颜色主题',
    keywordLabel: '热门关键词'
  },
  es: {
    heroKicker: 'Detalle del emoji',
    quickAnswerKicker: 'Respuesta rápida',
    searchTermsHeading: 'Intención de búsqueda',
    searchTermsDescription: 'Estas frases suelen aparecer cuando la gente busca este emoji, su significado o variantes cercanas.',
    contextHeading: 'Tono y contexto',
    copyHeading: 'Ideas para copiar y pegar',
    copyDescription: 'Copia el emoji suelto o alguno de estos combos listos para usar en captions, respuestas o nombres decorados.',
    pairsWellWithHeading: 'Combina bien con',
    faqKicker: 'FAQ',
    faqHeading: 'Preguntas frecuentes sobre este emoji',
    exploreKicker: 'Explora más',
    exploreHeading: 'Más páginas de emojis de corazón para abrir después',
    breadcrumbHome: 'Emojis de corazón',
    faqJumpLabel: 'Ir al FAQ',
    colorMeaningLabel: 'Tema de color',
    keywordLabel: 'Palabras clave'
  }
};

type DetailGuideContent = {
  aliases: string[];
  meaningBullets: string[];
  usageIdeas: string[];
  combos: string[];
};

type DetailFaq = {
  question: string;
  answer: string;
  keywords: string[];
};

type ExploreCard = {
  href: string;
  title: string;
  description: string;
};

type ResolvedEmojiContent = {
  name: string;
  meaning: string;
  usage: string;
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
  const related = getRelatedEmojis(emoji.slug);
  const relatedNames = related.map((item) => resolveEmojiContent(dictionary.emojiContent[item.slug], item, locale).name);
  const relatedSymbols = related.map((item) => item.emoji);
  const guide = getEmojiGuide(emoji.slug);
  const colorCard = COLOR_GUIDE.find((entry) => entry.slugs.includes(emoji.slug));
  const toneDescription = toneDescriptions[locale][emoji.tone];
  const guideContent = buildGuideContent(
    locale,
    emoji,
    content,
    guide,
    colorCard,
    toneDescription,
    relatedNames,
    relatedSymbols,
    keywordList
  );
  const title = buildMetaTitle(locale, content.name);
  const description = buildMetaDescription(locale, emoji, content, toneDescription);
  const metadataKeywords = uniqueStrings([...keywordList, ...guideContent.aliases, ...(colorCard?.keywords[locale] ?? [])]).slice(0, 12);
  const canonical = `/${locale}/emoji/${emoji.slug}`;

  return {
    title: `${title} | Heart Emojis`,
    description,
    keywords: metadataKeywords,
    alternates: {
      canonical,
      languages: buildLanguageAlternates(`/emoji/${emoji.slug}`)
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonical}`,
      type: 'article',
      locale: openGraphLocales[locale],
      siteName: 'Heart Emojis'
    },
    twitter: {
      card: 'summary_large_image',
      title,
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
  const ui = DETAIL_PAGE_COPY[locale];
  const content = resolveEmojiContent(dictionary.emojiContent[emoji.slug], emoji, locale);
  const keywordList = emoji.keywords[locale] ?? emoji.keywords.en;
  const related = getRelatedEmojis(emoji.slug);
  const relatedNames = related.map((item) => resolveEmojiContent(dictionary.emojiContent[item.slug], item, locale).name);
  const relatedSymbols = related.map((item) => item.emoji);
  const guide = getEmojiGuide(emoji.slug);
  const colorCard = COLOR_GUIDE.find((entry) => entry.slugs.includes(emoji.slug));
  const toneLabel = toneLabels[locale][emoji.tone];
  const toneDescription = toneDescriptions[locale][emoji.tone];
  const guideContent = buildGuideContent(
    locale,
    emoji,
    content,
    guide,
    colorCard,
    toneDescription,
    relatedNames,
    relatedSymbols,
    keywordList
  );
  const pageFaqs = buildDetailFaqs(locale, emoji, content, guideContent, relatedNames, toneDescription);
  const canonical = `/${locale}/emoji/${emoji.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: content.name,
    alternateName: emoji.meaning,
    description: buildQuickAnswer(locale, content, toneDescription, guideContent.aliases, colorCard),
    inLanguage: schemaLocales[locale],
    url: `${siteUrl}${canonical}`,
    identifier: emoji.unicode,
    keywords: uniqueStrings([...keywordList, ...guideContent.aliases]).slice(0, 12)
  };
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: ui.breadcrumbHome,
        item: `${siteUrl}/${locale}`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.name,
        item: `${siteUrl}${canonical}`
      }
    ]
  };
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: schemaLocales[locale],
    mainEntity: pageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
  const spanishSearchLinks: Partial<Record<string, Array<{ href: string; label: string }>>> = {
    'red-heart': [
      { href: '/es/copiar/corazones-para-copiar-y-pegar', label: 'Corazones para copiar y pegar' },
      { href: '/es/copiar/1000-corazones-para-copiar-y-pegar', label: '1000 corazones para copiar y pegar' },
      { href: '/es/copiar/corazones-para-whatsapp', label: 'Corazones para WhatsApp' }
    ],
    'pink-heart': [
      { href: '/es/copiar/corazones-para-copiar-y-pegar', label: 'Corazones para copiar y pegar' },
      { href: '/es/copiar/corazones-para-whatsapp', label: 'Corazones para WhatsApp' }
    ],
    'white-heart': [
      { href: '/es/copiar/corazones-para-copiar-y-pegar', label: 'Corazones para copiar y pegar' },
      { href: '/es/copiar/corazones-para-whatsapp', label: 'Corazones para WhatsApp' }
    ]
  };
  const prioritySpanishLinks = locale === 'es' ? spanishSearchLinks[emoji.slug] ?? [] : [];
  const exploreCards = buildExploreCards(locale, dictionary, prioritySpanishLinks);
  const searchChips = uniqueStrings([...guideContent.aliases, ...keywordList, ...(colorCard?.keywords[locale] ?? [])]).slice(0, 8);
  const copyOptions = uniqueStrings([emoji.emoji, ...guideContent.combos]).slice(0, 4);
  const contextBullets = buildContextBullets(locale, colorCard?.description[locale], relatedNames, relatedSymbols);

  return (
    <div className="detail-page">
      <article className="detail-hero">
        <div className="detail-hero__aside">
          <div className="detail-emoji">
            <span className="emoji-preview" aria-hidden="true">
              {emoji.emoji}
            </span>
            <CopyButton value={emoji.emoji} label={dictionary.common.copy} copiedLabel={dictionary.common.copied} />
          </div>
          <div className="detail-chip-panel" aria-label={ui.searchTermsHeading}>
            <p className="detail-panel-label">{ui.searchTermsHeading}</p>
            <div className="detail-chip-list">
              {searchChips.map((chip) => (
                <span key={chip} className="detail-chip">
                  #{chip}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="detail-summary">
          <span className="hero-kicker">{ui.heroKicker}</span>
          <h1 className="hero-title">{content.name}</h1>
          <p className="hero-subtitle">{buildHeroIntro(locale, content, toneDescription)}</p>
          <div className="detail-meta">
            <div className="detail-meta-item">
              <strong>{dictionary.detail.unicodeLabel}</strong>
              <span>{emoji.unicode}</span>
            </div>
            <div className="detail-meta-item">
              <strong>{toneLabel}</strong>
              <span>{toneDescription}</span>
            </div>
            {colorCard ? (
              <div className="detail-meta-item">
                <strong>{ui.colorMeaningLabel}</strong>
                <span>{colorCard.title[locale]}</span>
              </div>
            ) : null}
          </div>
          <div className="hero-actions">
            <Link className="cta-button" href={`/${locale}/copy-paste`}>
              {dictionary.common.nav.copy}
            </Link>
            <Link className="cta-button cta-button--secondary" href={`/${locale}/generator/200`}>
              {dictionary.common.nav.generator}
            </Link>
            <Link className="cta-button cta-button--ghost" href="#detail-faq">
              {ui.faqJumpLabel}
            </Link>
          </div>
          <div className="detail-summary__body">
            <p className="card-description">{content.meaning}</p>
            <p className="card-description">{content.usage}</p>
          </div>
          <div className="detail-summary__footer">
            <Link href={`/${locale}`} className="card-link">
              ← {dictionary.common.backToList}
            </Link>
            <p className="guide-block__aliases">
              <strong>{dictionary.detail.alsoSearched}:</strong> {guideContent.aliases.join(', ')}
            </p>
          </div>
        </div>
      </article>

      <section className="section-frame section-frame--soft" aria-labelledby="detail-quick-answer">
        <div className="section-intro">
          <span className="section-kicker">{ui.quickAnswerKicker}</span>
          <h2 className="section-heading" id="detail-quick-answer">
            {buildMeaningQuestion(locale, emoji, content.name)}
          </h2>
          <p className="section-copy">{buildQuickAnswer(locale, content, toneDescription, guideContent.aliases, colorCard)}</p>
        </div>
        <div className="snippet-grid detail-answer-grid">
          <article className="snippet-card detail-insight-card">
            <h3>{dictionary.detail.meaningHeading}</h3>
            <p className="snippet-card__description">{content.meaning}</p>
            <ul className="detail-list">
              {guideContent.meaningBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
          <article className="snippet-card detail-insight-card">
            <h3>{ui.contextHeading}</h3>
            <p className="snippet-card__description">{toneDescription}</p>
            <ul className="detail-list">
              {contextBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
          <article className="snippet-card detail-insight-card">
            <h3>{ui.searchTermsHeading}</h3>
            <p className="snippet-card__description">{ui.searchTermsDescription}</p>
            <div className="detail-chip-list">
              {guideContent.aliases.map((alias) => (
                <span key={alias} className="detail-chip">
                  {alias}
                </span>
              ))}
            </div>
            <p className="detail-insight-label">{ui.keywordLabel}</p>
            <div className="detail-chip-list">
              {keywordList.slice(0, 4).map((keyword) => (
                <span key={keyword} className="detail-chip">
                  #{keyword}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="guide-block detail-guide-grid" aria-labelledby="detail-usage-guide">
        <div className="guide-block__column">
          <h2 className="section-heading" id="detail-usage-guide">
            {dictionary.detail.usageHeading}
          </h2>
          <ul className="detail-list detail-list--compact">
            {guideContent.usageIdeas.map((idea) => (
              <li key={idea}>{idea}</li>
            ))}
          </ul>
        </div>
        <div className="guide-block__column">
          <h3>{ui.pairsWellWithHeading}</h3>
          <ul className="detail-list detail-list--compact">
            {related.map((item) => {
              const itemContent = resolveEmojiContent(dictionary.emojiContent[item.slug], item, locale);
              return (
                <li key={item.id}>
                  <Link href={`/${locale}/emoji/${item.slug}`}>{itemContent.name}</Link> {itemContent.meaning}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="guide-block__combos">
          <h3>{ui.copyHeading}</h3>
          <p className="guide-block__aliases">{ui.copyDescription}</p>
          <div className="guide-block__combo-buttons">
            {copyOptions.map((combo) => (
              <CopyButton
                key={`${emoji.slug}-${combo}`}
                value={combo.replace(/\s{2,}/g, ' ').trim()}
                label={dictionary.common.copy}
                copiedLabel={dictionary.common.copied}
                size="small"
                showLabel
                staticLabel
              />
            ))}
          </div>
        </div>
      </section>

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

      <section className="section-frame section-frame--soft" id="detail-faq" aria-labelledby="detail-faq-heading">
        <div className="section-intro">
          <span className="section-kicker">{ui.faqKicker}</span>
          <h2 className="section-heading" id="detail-faq-heading">
            {ui.faqHeading}
          </h2>
        </div>
        <div className="search-related-grid detail-faq-grid">
          {pageFaqs.map((faq) => (
            <article key={faq.question} className="snippet-card detail-faq-card">
              <h3>{faq.question}</h3>
              <p className="snippet-card__description">{faq.answer}</p>
              <div className="detail-chip-list">
                {faq.keywords.map((keyword) => (
                  <span key={keyword} className="detail-chip">
                    #{keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="related-hearts-heading">
        <div className="section-intro">
          <span className="section-kicker">{dictionary.detail.relatedHeading}</span>
          <h2 className="section-heading" id="related-hearts-heading">
            {dictionary.detail.relatedHeading}
          </h2>
        </div>
        <div className="spotlight-grid detail-related-grid">
          {related.map((item) => (
            <EmojiCard key={item.id} emoji={item} dictionary={dictionary} locale={locale} />
          ))}
        </div>
      </section>

      <section className="section-frame section-frame--soft" aria-labelledby="detail-explore-heading">
        <div className="section-intro">
          <span className="section-kicker">{ui.exploreKicker}</span>
          <h2 className="section-heading" id="detail-explore-heading">
            {ui.exploreHeading}
          </h2>
        </div>
        <div className="search-related-grid detail-explore-grid">
          {exploreCards.map((card) => (
            <Link key={card.href} href={card.href} className="search-related-card detail-link-card">
              <strong>{card.title}</strong>
              <span>{card.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot label={dictionary.common.adPlaceholder} slotId="detail-bottom" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    </div>
  );
}

function buildMetaTitle(locale: Locale, name: string) {
  switch (locale) {
    case 'zh':
      return `${name} 含义、用法与复制`;
    case 'es':
      return `${name}: significado, copiar y pegar`;
    default:
      return `${name} meaning, copy and paste`;
  }
}

function buildMetaDescription(locale: Locale, emoji: HeartEmoji, content: ResolvedEmojiContent, toneDescription: string) {
  switch (locale) {
    case 'zh':
      return `${content.meaning}${content.usage}${toneDescription} 立即复制 ${emoji.emoji}，查看 Unicode，并比较相关心形表情。`;
    case 'es':
      return `${content.meaning} ${content.usage} ${toneDescription} Copia ${emoji.emoji}, revisa su Unicode y compara emojis relacionados.`;
    default:
      return `${content.meaning} ${content.usage} ${toneDescription} Copy ${emoji.emoji}, review the Unicode value, and compare related heart emojis.`;
  }
}

function buildHeroIntro(locale: Locale, content: ResolvedEmojiContent, toneDescription: string) {
  switch (locale) {
    case 'zh':
      return `${content.meaning}${content.usage}${toneDescription}`;
    case 'es':
      return `${content.meaning} ${content.usage} ${toneDescription}`;
    default:
      return `${content.meaning} ${content.usage} ${toneDescription}`;
  }
}

function buildQuickAnswer(
  locale: Locale,
  content: ResolvedEmojiContent,
  toneDescription: string,
  aliases: string[],
  colorCard: (typeof COLOR_GUIDE)[number] | undefined
) {
  const aliasText = formatList(locale, aliases.slice(0, 2));

  switch (locale) {
    case 'zh':
      return `${content.meaning}${content.usage} 它整体带有「${toneDescription.replace(/。$/, '')}」的感觉，常对应 ${aliasText} 这类搜索${
        colorCard ? `，也常会和「${colorCard.title[locale]}」一起被比较。` : '。'
      }`;
    case 'es':
      return `${content.meaning} ${content.usage} ${toneDescription} También suele aparecer en búsquedas como ${aliasText}${
        colorCard ? ` y en comparativas sobre ${colorCard.title[locale].toLowerCase()}.` : '.'
      }`;
    default:
      return `${content.meaning} ${content.usage} ${toneDescription} People often search for it as ${aliasText}${
        colorCard ? `, and it often overlaps with ${colorCard.title[locale].toLowerCase()}.` : '.'
      }`;
  }
}

function buildMeaningQuestion(locale: Locale, emoji: HeartEmoji, name: string) {
  switch (locale) {
    case 'zh':
      return `${emoji.emoji} ${name} 是什么意思？`;
    case 'es':
      return `¿Qué significa ${emoji.emoji} ${name}?`;
    default:
      return `What does ${emoji.emoji} ${name} mean?`;
  }
}

function buildContextBullets(locale: Locale, colorDescription: string | undefined, relatedNames: string[], relatedSymbols: string[]) {
  switch (locale) {
    case 'zh':
      return uniqueStrings([
        colorDescription,
        relatedNames.length ? `常被拿来和 ${formatList(locale, relatedNames)} 一起比较，看哪一种情绪更适合当前语境。` : '',
        relatedSymbols.length ? `在复制组合里，也很常和 ${formatList(locale, relatedSymbols)} 这类相近符号放在一起。` : ''
      ]);
    case 'es':
      return uniqueStrings([
        colorDescription,
        relatedNames.length ? `Suele compararse con ${formatList(locale, relatedNames)} para afinar mejor el matiz emocional.` : '',
        relatedSymbols.length ? `En packs de copy-paste también aparece junto a ${formatList(locale, relatedSymbols)}.` : ''
      ]);
    default:
      return uniqueStrings([
        colorDescription,
        relatedNames.length ? `People often compare it with ${formatList(locale, relatedNames)} when they want a nearby emotional shade.` : '',
        relatedSymbols.length ? `It also shows up next to ${formatList(locale, relatedSymbols)} in copy packs and related guides.` : ''
      ]);
  }
}

function buildGuideContent(
  locale: Locale,
  emoji: HeartEmoji,
  content: ResolvedEmojiContent,
  guide: ReturnType<typeof getEmojiGuide>,
  colorCard: (typeof COLOR_GUIDE)[number] | undefined,
  toneDescription: string,
  relatedNames: string[],
  relatedSymbols: string[],
  keywordList: string[]
): DetailGuideContent {
  if (guide) {
    return {
      aliases: guide.aliases[locale],
      meaningBullets: guide.meaningBullets[locale],
      usageIdeas: guide.usageIdeas[locale],
      combos: guide.combos
    };
  }

  const aliases = uniqueStrings([...(colorCard?.keywords[locale] ?? []), ...keywordList, content.name]).slice(0, 4);
  const relatedText = formatList(locale, relatedNames.slice(0, 2));

  switch (locale) {
    case 'zh':
      return {
        aliases,
        meaningBullets: uniqueStrings([
          content.meaning,
          toneDescription,
          colorCard?.description[locale],
          relatedText ? `如果你正在比较相近风格，通常也会一起看 ${relatedText}。` : ''
        ]).slice(0, 4),
        usageIdeas: uniqueStrings([
          content.usage,
          relatedText ? `可以和 ${relatedText} 轮流搭配，做出更有层次的情绪表达。` : '',
          aliases[0] ? `它也常出现在「${aliases[0]}」这类高意图搜索里。` : ''
        ]).slice(0, 3),
        combos: uniqueStrings([
          `${emoji.emoji}${emoji.emoji}${emoji.emoji}`,
          [emoji.emoji, relatedSymbols[0], relatedSymbols[1]].filter(Boolean).join(' '),
          [emoji.emoji, '✨', relatedSymbols[0]].filter(Boolean).join(' ')
        ]).slice(0, 3)
      };
    case 'es':
      return {
        aliases,
        meaningBullets: uniqueStrings([
          content.meaning,
          toneDescription,
          colorCard?.description[locale],
          relatedText ? `Si estás comparando estilos cercanos, normalmente también se revisa junto a ${relatedText}.` : ''
        ]).slice(0, 4),
        usageIdeas: uniqueStrings([
          content.usage,
          relatedText ? `Puedes alternarlo con ${relatedText} para cambiar el matiz sin salirte del mismo mood.` : '',
          aliases[0] ? `También responde bien a búsquedas de intención alta como ${aliases[0]}.` : ''
        ]).slice(0, 3),
        combos: uniqueStrings([
          `${emoji.emoji}${emoji.emoji}${emoji.emoji}`,
          [emoji.emoji, relatedSymbols[0], relatedSymbols[1]].filter(Boolean).join(' '),
          [emoji.emoji, '✨', relatedSymbols[0]].filter(Boolean).join(' ')
        ]).slice(0, 3)
      };
    default:
      return {
        aliases,
        meaningBullets: uniqueStrings([
          content.meaning,
          toneDescription,
          colorCard?.description[locale],
          relatedText ? `It is often compared with ${relatedText} when people want a nearby mood or color cue.` : ''
        ]).slice(0, 4),
        usageIdeas: uniqueStrings([
          content.usage,
          relatedText ? `Try rotating it with ${relatedText} when you want similar energy without repeating the exact same icon.` : '',
          aliases[0] ? `It also maps well to high-intent searches such as ${aliases[0]}.` : ''
        ]).slice(0, 3),
        combos: uniqueStrings([
          `${emoji.emoji}${emoji.emoji}${emoji.emoji}`,
          [emoji.emoji, relatedSymbols[0], relatedSymbols[1]].filter(Boolean).join(' '),
          [emoji.emoji, '✨', relatedSymbols[0]].filter(Boolean).join(' ')
        ]).slice(0, 3)
      };
  }
}

function buildDetailFaqs(
  locale: Locale,
  emoji: HeartEmoji,
  content: ResolvedEmojiContent,
  guideContent: DetailGuideContent,
  relatedNames: string[],
  toneDescription: string
): DetailFaq[] {
  const pairAnswer = relatedNames.length ? formatList(locale, relatedNames.slice(0, 2)) : '';
  const localeKeywords = emoji.keywords[locale] ?? emoji.keywords.en;
  const faqKeywords = uniqueStrings([...guideContent.aliases, ...localeKeywords]).slice(0, 3);

  switch (locale) {
    case 'zh':
      return [
        {
          question: `${emoji.emoji} ${content.name} 是什么意思？`,
          answer: `${content.meaning}${toneDescription}`,
          keywords: faqKeywords
        },
        {
          question: `${content.name} 适合在什么场景使用？`,
          answer: `${content.usage}${guideContent.usageIdeas[0] ? ` ${guideContent.usageIdeas[0]}` : ''}`,
          keywords: uniqueStrings([localeKeywords[0], localeKeywords[1], guideContent.aliases[0]]).slice(0, 3)
        },
        {
          question: `${content.name} 可以和哪些表情一起搭配？`,
          answer: pairAnswer
            ? `常见搭配包括 ${pairAnswer}，也可以直接复制像 ${formatList(locale, guideContent.combos.slice(0, 2))} 这样的组合。`
            : `可以直接复制像 ${formatList(locale, guideContent.combos.slice(0, 2))} 这样的组合。`,
          keywords: uniqueStrings([guideContent.aliases[0], guideContent.aliases[1], localeKeywords[0]]).slice(0, 3)
        }
      ];
    case 'es':
      return [
        {
          question: `¿Qué significa ${emoji.emoji} ${content.name}?`,
          answer: `${content.meaning} ${toneDescription}`,
          keywords: faqKeywords
        },
        {
          question: `¿Cuándo conviene usar ${content.name}?`,
          answer: `${content.usage} ${guideContent.usageIdeas[0] ?? ''}`.trim(),
          keywords: uniqueStrings([localeKeywords[0], localeKeywords[1], guideContent.aliases[0]]).slice(0, 3)
        },
        {
          question: `¿Con qué emojis combina bien ${content.name}?`,
          answer: pairAnswer
            ? `Suele combinar muy bien con ${pairAnswer}. También puedes copiar combos como ${formatList(locale, guideContent.combos.slice(0, 2))}.`
            : `Puedes copiar combos como ${formatList(locale, guideContent.combos.slice(0, 2))}.`,
          keywords: uniqueStrings([guideContent.aliases[0], guideContent.aliases[1], localeKeywords[0]]).slice(0, 3)
        }
      ];
    default:
      return [
        {
          question: `What does ${emoji.emoji} ${content.name} mean?`,
          answer: `${content.meaning} ${toneDescription}`,
          keywords: faqKeywords
        },
        {
          question: `When should I use ${content.name}?`,
          answer: `${content.usage} ${guideContent.usageIdeas[0] ?? ''}`.trim(),
          keywords: uniqueStrings([localeKeywords[0], localeKeywords[1], guideContent.aliases[0]]).slice(0, 3)
        },
        {
          question: `What pairs well with ${content.name}?`,
          answer: pairAnswer
            ? `It works especially well with ${pairAnswer}. You can also copy combos like ${formatList(locale, guideContent.combos.slice(0, 2))}.`
            : `You can also copy combos like ${formatList(locale, guideContent.combos.slice(0, 2))}.`,
          keywords: uniqueStrings([guideContent.aliases[0], guideContent.aliases[1], localeKeywords[0]]).slice(0, 3)
        }
      ];
  }
}

function buildExploreCards(
  locale: Locale,
  dictionary: ReturnType<typeof getDictionary>,
  prioritySpanishLinks: Array<{ href: string; label: string }>
): ExploreCard[] {
  const baseCards: ExploreCard[] = [
    {
      href: `/${locale}`,
      title: dictionary.home.allHeading,
      description: dictionary.home.quickSubtitle
    },
    {
      href: `/${locale}/copy-paste`,
      title: dictionary.pages.copy.title,
      description: dictionary.pages.copy.description
    },
    {
      href: `/${locale}/text-art`,
      title: dictionary.pages.textArt.title,
      description: dictionary.pages.textArt.description
    },
    {
      href: `/${locale}/generator/200`,
      title: dictionary.pages.generator.title,
      description: dictionary.pages.generator.description
    }
  ];

  if (locale !== 'es') {
    return baseCards;
  }

  const spanishCards = prioritySpanishLinks.map((link) => ({
    href: link.href,
    title: link.label,
    description: 'Abre una landing optimizada para copiar, pegar y comparar estilos de corazones.'
  }));

  return [...baseCards, ...spanishCards];
}

function uniqueStrings(items: Array<string | undefined>) {
  return Array.from(new Set(items.map((item) => item?.trim()).filter(Boolean) as string[]));
}

function formatList(locale: Locale, items: Array<string | undefined>) {
  const cleanItems = uniqueStrings(items);

  if (!cleanItems.length) {
    return '';
  }

  if (cleanItems.length === 1) {
    return locale === 'zh' ? `「${cleanItems[0]}」` : cleanItems[0];
  }

  if (locale === 'zh') {
    return cleanItems.map((item) => `「${item}」`).join('、');
  }

  const conjunction = locale === 'es' ? ' y ' : ' and ';

  if (cleanItems.length === 2) {
    return `${cleanItems[0]}${conjunction}${cleanItems[1]}`;
  }

  return `${cleanItems.slice(0, -1).join(', ')},${conjunction}${cleanItems[cleanItems.length - 1]}`;
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
