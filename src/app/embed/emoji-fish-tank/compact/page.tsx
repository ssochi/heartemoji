import type { Metadata } from 'next';
import { EmojiFishTank } from '@/components/EmojiFishTank';

export const metadata: Metadata = {
  title: 'Emoji fish tank embed (compact)',
  robots: {
    index: false
  }
};

export default function EmojiFishTankEmbedCompact() {
  return (
    <div className="embed-shell" aria-label="Emoji fish tank compact embed">
      <EmojiFishTank variant="embed" size="compact" />
    </div>
  );
}
