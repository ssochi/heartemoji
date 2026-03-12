import type { SearchLandingSection } from '@/data/searchLandingPages';
import { CopySnippetCard } from './CopySnippetCard';

interface CopySnippetSectionProps {
  section: SearchLandingSection;
}

export function CopySnippetSection({ section }: CopySnippetSectionProps) {
  return (
    <section className="search-landing-section" aria-labelledby={section.id}>
      <div className="section-intro">
        {section.eyebrow ? <span className="section-kicker">{section.eyebrow}</span> : null}
        <h2 className="section-heading" id={section.id}>
          {section.title}
        </h2>
        <p className="section-copy">{section.description}</p>
      </div>

      {section.snippets?.length ? (
        <div className="snippet-grid">
          {section.snippets.map((snippet) => (
            <CopySnippetCard key={`${section.id}-${snippet.title}`} snippet={snippet} />
          ))}
        </div>
      ) : null}

      {section.bullets?.length ? (
        <div className="search-landing-notes">
          <ul>
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
