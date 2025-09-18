"use client";

import { useCallback, useEffect, useState } from 'react';
import { TEXT_ART } from '@/data/keywordContent';
import type { Dictionary } from '@/data/dictionaries';
import { CopyButton } from './CopyButton';

interface TextArtShowcaseProps {
  dictionary: Dictionary;
}

export function TextArtShowcase({ dictionary }: TextArtShowcaseProps) {
  const [isToastVisible, setToastVisible] = useState(false);
  const [toastTick, setToastTick] = useState(0);

  useEffect(() => {
    if (toastTick === 0) {
      return;
    }
    setToastVisible(true);
    const timeout = window.setTimeout(() => setToastVisible(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [toastTick]);

  const handleCopy = useCallback(() => {
    setToastTick((tick) => tick + 1);
  }, []);

  return (
    <div className="textart-panel">
      <div
        className={`copy-toast${isToastVisible ? ' copy-toast--visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" className="copy-toast__emoji">
          ❤️
        </span>
        <span className="copy-toast__message">{dictionary.pages.textArt.toast}</span>
      </div>
      <div className="textart-grid">
        {TEXT_ART.map((art, index) => (
          <article key={`${art}-${index}`} className="textart-card">
            <pre aria-label="heart text art">{art}</pre>
            <CopyButton
              value={art}
              label={dictionary.common.copy}
              copiedLabel={dictionary.common.copied}
              size="small"
              showLabel
              hideValue
              staticLabel
              onCopy={handleCopy}
            />
          </article>
        ))}
      </div>
    </div>
  );
}
