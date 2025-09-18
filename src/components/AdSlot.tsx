import type { HTMLAttributes } from 'react';

type AdSlotProps = {
  label: string;
  slotId: string;
} & HTMLAttributes<HTMLDivElement>;

export function AdSlot({ label, slotId, ...props }: AdSlotProps) {
  return (
    <div className="ad-slot" role="complementary" data-slot={slotId} {...props}>
      {label}
    </div>
  );
}
