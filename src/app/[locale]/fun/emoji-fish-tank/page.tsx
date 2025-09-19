import type { Metadata } from 'next';
import { EmojiFishTank } from '@/components/EmojiFishTank';
import { CopyButton } from '@/components/CopyButton';
import { getDictionary } from '@/data/dictionaries';
import { defaultLocale, getLocaleFromParam, locales } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';
const EMBED_PATHS = {
  full: '/embed/emoji-fish-tank',
  compact: '/embed/emoji-fish-tank/compact'
} as const;
const EMBED_DIMENSIONS: Record<'full' | 'compact', { maxWidth: number; height: number }> = {
  full: { maxWidth: 720, height: 420 },
  compact: { maxWidth: 360, height: 320 }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function buildEmbedCode(variant: 'full' | 'compact'): string {
  const path = EMBED_PATHS[variant];
  const { maxWidth, height } = EMBED_DIMENSIONS[variant];
  const borderRadius = variant === 'compact' ? 18 : 24;
  const src = `${siteUrl}${path}`;
  return `<iframe src="${src}" title="Emoji fish tank" loading="lazy" allow="accelerometer; autoplay" style="width:100%;max-width:${maxWidth}px;height:${height}px;border:0;border-radius:${borderRadius}px;overflow:hidden;background:linear-gradient(135deg,#061a3a,#0b3a52);"></iframe>`;
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const canonical = `${locale === defaultLocale ? '' : `/${locale}`}/fun/emoji-fish-tank`;

  return {
    title: dictionary.pages.fun.fishTank.title,
    description: dictionary.pages.fun.fishTank.description,
    alternates: {
      canonical,
      languages: locales.reduce<Record<string, string>>((acc, lang) => {
        acc[lang] = `${lang === defaultLocale ? '' : `/${lang}`}/fun/emoji-fish-tank`;
        return acc;
      }, {})
    },
    openGraph: {
      title: dictionary.pages.fun.fishTank.title,
      description: dictionary.pages.fun.fishTank.description,
      url: `${siteUrl}${canonical}`,
      type: 'article'
    }
  };
}

type FishTankPageProps = {
  params: {
    locale: string;
  };
};

export default function FishTankPage({ params }: FishTankPageProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const content = dictionary.pages.fun.fishTank;
  const embedVariants = content.embedVariants.map((variant) => {
    const code = buildEmbedCode(variant.id);
    const href = EMBED_PATHS[variant.id];
    const link = `${siteUrl}${href}`;
    return { ...variant, code, href, link };
  });

  return (
    <div className="page-layout">
      <header className="page-hero">
        <h1>{content.title}</h1>
        <p>{content.description}</p>
      </header>

      <EmojiFishTank />

      <section className="fish-tank-section" aria-labelledby="fish-tank-intro-heading">
        <h2 id="fish-tank-intro-heading" className="sr-only">
          {content.title}
        </h2>
        <div className="fish-tank-card">
          {content.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="fish-tank-card fish-tank-card--embed">
          <h2>{content.embedHeading}</h2>
          <p>{content.embedDescription}</p>
          <div className="fish-tank-embed-options">
            {embedVariants.map((variant) => (
              <div key={variant.id} className="fish-tank-embed-option">
                <div className="fish-tank-embed-option__header">
                  <h3>{variant.label}</h3>
                  <p>{variant.hint}</p>
                  {variant.note ? <p className="fish-tank-embed-option__note">{variant.note}</p> : null}
                </div>
                <div className="fish-tank-snippet">
                  <textarea
                    className="fish-tank-snippet__code"
                    readOnly
                    value={variant.code}
                    aria-label={`${variant.label} iframe`}
                  />
                  <CopyButton
                    value={variant.code}
                    label={content.embedCopyLabel}
                    copiedLabel={content.embedCopied}
                    className="fish-tank-snippet__copy"
                    hideValue
                  />
                </div>
                <p className="fish-tank-note">
                  <a href={variant.href} target="_blank" rel="noreferrer" className="fish-tank-embed-link">
                    {variant.link}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <p className="fish-tank-note">{content.embedNote}</p>
        </div>
      </section>
    </div>
  );
}
