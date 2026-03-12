import type { HTMLAttributes } from 'react';

type AdSlotProps = {
  label: string;
  slotId: string;
} & HTMLAttributes<HTMLDivElement>;

export function AdSlot({ label, slotId, className, ...props }: AdSlotProps) {
  return (
    <div
      className={className ? `ad-slot ${className}` : 'ad-slot'}
      role="complementary"
      data-slot={slotId}
      {...props}
    >
      {label}
    </div>
  );
}
