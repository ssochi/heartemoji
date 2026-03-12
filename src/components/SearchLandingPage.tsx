import Link from 'next/link';
import type { SearchLandingPageEntry } from '@/data/searchLandingPages';
import { CopySnippetSection } from './CopySnippetSection';

interface SearchLandingPageProps {
  page: SearchLandingPageEntry;
}

export function SearchLandingPage({ page }: SearchLandingPageProps) {
  return (
    <div className="page-layout search-landing">
      <header className="page-hero search-landing-hero">
        <span className="section-kicker">SEO Landing</span>
        <h1>{page.h1}</h1>
        {page.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="hero-pill-list" aria-label="Usos destacados">
          {page.heroHighlights.map((item) => (
            <li key={item} className="hero-pill">
              {item}
            </li>
          ))}
        </ul>
      </header>

      {page.sections.map((section) => (
        <CopySnippetSection key={section.id} section={section} />
      ))}

      <section className="section-frame section-frame--faq" aria-labelledby="search-landing-faq">
        <div className="section-intro">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-heading" id="search-landing-faq">
            Preguntas frecuentes
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
          <span className="section-kicker">Sigue explorando</span>
          <h2 className="section-heading" id="search-landing-related">
            Enlaces relacionados
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
