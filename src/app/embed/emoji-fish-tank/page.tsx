import type { Metadata } from 'next';
import { EmojiFishTank } from '@/components/EmojiFishTank';

export const metadata: Metadata = {
  title: 'Emoji fish tank embed',
  robots: {
    index: false
  }
};

export default function EmojiFishTankEmbed() {
  return (
    <div className="embed-shell" aria-label="Emoji fish tank embed">
      <EmojiFishTank variant="embed" size="full" />
    </div>
  );
}
