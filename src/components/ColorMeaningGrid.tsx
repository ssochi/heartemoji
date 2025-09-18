import type { ColorGuide } from '@/data/keywordContent';
import type { Locale } from '@/lib/i18n';

interface ColorMeaningGridProps {
  locale: Locale;
  items: ColorGuide[];
}

export function ColorMeaningGrid({ locale, items }: ColorMeaningGridProps) {
  return (
    <div className="color-grid" aria-live="polite">
      {items.map((item) => (
        <article key={item.slug} className="color-card">
          <header className="color-card__header">
            <span className="color-card__emoji" aria-hidden="true">
              {item.emoji}
            </span>
            <h3>{item.title}</h3>
          </header>
          <p>{item.description[locale]}</p>
          <ul className="color-card__keywords">
            {item.keywords.slice(0, 4).map((keyword) => (
              <li key={keyword}>#{keyword}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
