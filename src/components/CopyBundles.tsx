import { COPY_BUNDLES } from '@/data/keywordContent';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';
import { CopyButton } from './CopyButton';

interface CopyBundlesProps {
  dictionary: Dictionary;
  locale: Locale;
  className?: string;
}

export function CopyBundles({ dictionary, locale, className }: CopyBundlesProps) {
  return (
    <div className={className ?? 'bundle-grid'}>
      {COPY_BUNDLES.map((bundle) => (
        <article key={bundle.id} className="bundle-card">
          <h3>{bundle.title[locale]}</h3>
          <p>{bundle.description[locale]}</p>
          <div className="bundle-card__preview" aria-hidden="true">
            {bundle.snippets.map((snippet) => (
              <span key={`${bundle.id}-${snippet}`}>{snippet}</span>
            ))}
          </div>
          <div className="bundle-card__snippets">
            {bundle.snippets.map((snippet, index) => (
              <div className="bundle-snippet" key={`${bundle.id}-${index}`}>
                <span className="bundle-snippet__text">{snippet}</span>
                <CopyButton
                  value={snippet.replace(/\s{2,}/g, ' ').trim()}
                  label={dictionary.common.copy}
                  copiedLabel={dictionary.common.copied}
                  showLabel={false}
                  size="small"
                />
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
