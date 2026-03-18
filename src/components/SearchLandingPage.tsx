import Link from 'next/link';
import type { SearchLandingPageEntry } from '@/data/searchLandingPages';
import type { Locale } from '@/lib/i18n';
import { CopySnippetSection } from './CopySnippetSection';

interface SearchLandingPageProps {
  page: SearchLandingPageEntry;
  locale: Locale;
}

const landingUiCopy: Record<
  Locale,
  {
    heroKicker: string;
    heroPillsLabel: string;
    faqHeading: string;
    relatedKicker: string;
    relatedHeading: string;
    copyLabel: string;
    copiedLabel: string;
  }
> = {
  en: {
    heroKicker: 'Copy and paste',
    heroPillsLabel: 'Top use cases',
    faqHeading: 'Frequently asked questions',
    relatedKicker: 'Keep exploring',
    relatedHeading: 'Related pages',
    copyLabel: 'Copy',
    copiedLabel: 'Copied'
  },
  zh: {
    heroKicker: '复制与粘贴',
    heroPillsLabel: '高频用途',
    faqHeading: '常见问题',
    relatedKicker: '继续浏览',
    relatedHeading: '相关页面',
    copyLabel: '复制',
    copiedLabel: '已复制'
  },
  es: {
    heroKicker: 'Copiar y pegar',
    heroPillsLabel: 'Usos destacados',
    faqHeading: 'Preguntas frecuentes',
    relatedKicker: 'Sigue explorando',
    relatedHeading: 'Enlaces relacionados',
    copyLabel: 'Copiar',
    copiedLabel: 'Copiado'
  }
};

export function SearchLandingPage({ page, locale }: SearchLandingPageProps) {
  const labels = landingUiCopy[locale];

  return (
    <div className="page-layout search-landing">
      <header className="page-hero search-landing-hero">
        <span className="section-kicker">{labels.heroKicker}</span>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="hero-pill-list" aria-label={labels.heroPillsLabel}>
          {page.heroHighlights.map((item) => (
            <li key={item} className="hero-pill">
              {item}
            </li>
          ))}
        </ul>
      </header>

      {page.sections.map((section) => (
        <CopySnippetSection
          key={section.id}
          section={section}
          copyLabel={labels.copyLabel}
          copiedLabel={labels.copiedLabel}
        />
      ))}

      <section className="section-frame section-frame--faq" aria-labelledby="search-landing-faq">
        <div className="section-intro">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-heading" id="search-landing-faq">
            {labels.faqHeading}
          </h2>
        </div>
        <div className="faq-accordion">
          {page.faqs.map((faq, index) => (
            <details key={faq.question} className="faq-item" open={index === 0}>
              <summary className="faq-item__toggle">
                <span>{faq.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  ?
                </span>
              </summary>
              <div className="faq-item__content">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="section-frame section-frame--soft" aria-labelledby="search-landing-related">
        <div className="section-intro">
          <span className="section-kicker">{labels.relatedKicker}</span>
          <h2 className="section-heading" id="search-landing-related">
            {labels.relatedHeading}
          </h2>
        </div>
        <div className="search-related-grid">
          {page.relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="search-related-card">
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
