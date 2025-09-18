import { TEXT_ART } from '@/data/keywordContent';
import type { Dictionary } from '@/data/dictionaries';
import { CopyButton } from './CopyButton';

interface TextArtShowcaseProps {
  dictionary: Dictionary;
}

export function TextArtShowcase({ dictionary }: TextArtShowcaseProps) {
  return (
    <div className="textart-grid">
      {TEXT_ART.map((art, index) => (
        <article key={`${art}-${index}`} className="textart-card">
          <pre aria-label="heart text art">{art}</pre>
          <CopyButton
            value={art}
            label={dictionary.common.copy}
            copiedLabel={dictionary.common.copied}
            size="small"
            showLabel={false}
          />
        </article>
      ))}
    </div>
  );
}
