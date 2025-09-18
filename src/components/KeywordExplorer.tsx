'use client';

import { useMemo, useState } from 'react';
import { HEART_KEYWORDS } from '@/data/keywordList';

interface KeywordExplorerProps {
  heading?: string;
}

export function KeywordExplorer({ heading = 'Heart emoji keyword explorer' }: KeywordExplorerProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return HEART_KEYWORDS;
    }
    return HEART_KEYWORDS.filter((keyword) => keyword.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <section className="keyword-explorer" aria-labelledby="keyword-explorer-heading">
      <div className="keyword-explorer__header">
        <h3 id="keyword-explorer-heading">{heading}</h3>
        <p>
          Every phrase below appears across search demand for heart emojis. Use them to inspire blog posts, alt text,
          or campaign copy that captures long-tail intent.
        </p>
        <label className="keyword-explorer__search">
          <span className="sr-only">Filter keywords</span>
          <input
            type="search"
            placeholder="Filter keywords, e.g. blue heart emoji meaning"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="keyword-explorer__list" aria-live="polite">
        {filtered.map((keyword) => (
          <span key={keyword} className="keyword-pill">
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
}
