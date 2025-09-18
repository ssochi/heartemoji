import Link from 'next/link';
import type { HeartEmoji } from '@/data/emojis';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';
import { toneLabels } from '@/lib/tone';
import { CopyButton } from './CopyButton';

type EmojiCardProps = {
  emoji: HeartEmoji;
  dictionary: Dictionary;
  locale: Locale;
};

export function EmojiCard({ emoji, dictionary, locale }: EmojiCardProps) {
  const content = dictionary.emojiContent[emoji.slug];
  const toneLabel = toneLabels[locale][emoji.tone];

  return (
    <article className="card">
      <div className="card-header">
        <span className="emoji-preview" aria-hidden="true">
          {emoji.emoji}
        </span>
        <CopyButton value={emoji.emoji} label={dictionary.common.copy} copiedLabel={dictionary.common.copied} />
      </div>
      <h2 className="card-title">{content?.name ?? emoji.meaning}</h2>
      <p className="card-description">{content?.meaning ?? emoji.meaning}</p>
      <div className="card-keywords">
        {emoji.keywords.slice(0, 3).map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
      </div>
      <div className="card-meta">
        <span className="tag">{toneLabel}</span>
        <Link className="card-link" href={`/${locale}/emoji/${emoji.slug}`}>
          {dictionary.common.viewDetails} →
        </Link>
      </div>
    </article>
  );
}
