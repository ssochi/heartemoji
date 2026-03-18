import { CopyButton } from './CopyButton';
import type { SearchLandingSnippet } from '@/data/searchLandingPages';

interface CopySnippetCardProps {
  snippet: SearchLandingSnippet;
  copyLabel: string;
  copiedLabel: string;
}

export function CopySnippetCard({ snippet, copyLabel, copiedLabel }: CopySnippetCardProps) {
  return (
    <article className="snippet-card">
      <div className="snippet-card__header">
        <h3>{snippet.title}</h3>
        <CopyButton value={snippet.value} label={copyLabel} copiedLabel={copiedLabel} size="small" hideValue />
      </div>
      <p className="snippet-card__description">{snippet.description}</p>
      <textarea className="snippet-card__value" readOnly value={snippet.value} aria-label={snippet.title} />
    </article>
  );
}
