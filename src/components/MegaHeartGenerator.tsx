'use client';

import { useMemo, useState } from 'react';
import type { Dictionary } from '@/data/dictionaries';
import { CopyButton } from './CopyButton';

interface MegaHeartGeneratorProps {
  dictionary: Dictionary;
  initialCount?: number;
}

export function MegaHeartGenerator({ dictionary, initialCount = 200 }: MegaHeartGeneratorProps) {
  const [count, setCount] = useState(initialCount);

  const megaString = useMemo(() => '❤️'.repeat(Math.min(Math.max(count, 10), 1000)), [count]);
  const config = dictionary.pages.generator;

  return (
    <section className="mega-heart" aria-labelledby="mega-heart-heading">
      <div className="mega-heart__header">
        <h3 id="mega-heart-heading">{config.title}</h3>
        <p>{config.description}</p>
      </div>
      <div className="mega-heart__controls">
        <label>
          {config.countLabel}
          <input
            type="number"
            min={10}
            max={1000}
            value={count}
            onChange={(event) => setCount(Number(event.target.value) || 0)}
          />
        </label>
        <CopyButton
          value={megaString}
          label={dictionary.common.copy}
          copiedLabel={dictionary.common.copied}
          size="small"
          showLabel
        />
      </div>
      <p className="mega-heart__helper">{config.helperText}</p>
      <textarea
        readOnly
        value={megaString}
        aria-label="mass heart emojis ready to copy"
        className="mega-heart__textarea"
      />
    </section>
  );
}
