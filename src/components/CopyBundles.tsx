"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
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
  const [toastVisible, setToastVisible] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (tick === 0) {
      return;
    }
    setToastVisible(true);
    const timeout = window.setTimeout(() => setToastVisible(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [tick]);

  const handleCopy = useCallback(() => {
    setTick((value) => value + 1);
  }, []);

  const gridClassName = useMemo(() => className ?? 'bundle-grid', [className]);
  const toastMessage = dictionary.pages.copy.toast;

  return (
    <div className="bundle-panel">
      <div
        className={`copy-toast${toastVisible ? ' copy-toast--visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" className="copy-toast__emoji">
          ❤️
        </span>
        <span className="copy-toast__message">{toastMessage}</span>
      </div>
      <div className={gridClassName}>
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
              {bundle.snippets.map((snippet, index) => {
                const trimmed = snippet.replace(/\s{2,}/g, ' ').trim();
                return (
                  <div className="bundle-snippet" key={`${bundle.id}-${index}`}>
                    <span className="bundle-snippet__text">{snippet}</span>
                    <CopyButton
                      value={trimmed}
                      label={dictionary.common.copy}
                      copiedLabel={dictionary.common.copied}
                      size="small"
                      hideValue
                      staticLabel
                      onCopy={handleCopy}
                    />
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
