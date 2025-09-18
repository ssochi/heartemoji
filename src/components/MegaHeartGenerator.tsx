'use client';

import { useMemo, useState } from 'react';
import type { Dictionary } from '@/data/dictionaries';
import { CopyButton } from './CopyButton';

interface MegaHeartGeneratorProps {
  dictionary: Dictionary;
}

export function MegaHeartGenerator({ dictionary }: MegaHeartGeneratorProps) {
  const [count, setCount] = useState(200);

  const megaString = useMemo(() => '❤️'.repeat(Math.min(Math.max(count, 10), 1000)), [count]);

  return (
    <section className="mega-heart" aria-labelledby="mega-heart-heading">
      <div className="mega-heart__header">
        <h3 id="mega-heart-heading">1000 heart emojis copy and paste</h3>
        <p>
          Build massive strings of hearts for fan projects, typography art, or viral comment storms. Choose a number up to
          1000 and tap copy when you are ready.
        </p>
      </div>
      <div className="mega-heart__controls">
        <label>
          Count
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
      <textarea
        readOnly
        value={megaString}
        aria-label="mass heart emojis ready to copy"
        className="mega-heart__textarea"
      />
    </section>
  );
}
