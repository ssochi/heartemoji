'use client';

import { useCallback, useState } from 'react';

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
  size?: 'default' | 'small';
  showLabel?: boolean;
  className?: string;
  onCopy?: (value: string) => void;
};

export function CopyButton({
  value,
  label,
  copiedLabel,
  size = 'default',
  showLabel = true,
  className,
  onCopy
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopy?.(value);
    } catch (error) {
      console.error('Failed to copy emoji', error);
    }
  }, [value, onCopy]);

  const classes = ['copy-button'];
  if (size === 'small') {
    classes.push('copy-button--small');
  }
  if (!showLabel) {
    classes.push('copy-button--icon');
  }
  if (copied) {
    classes.push('copy-button--copied');
  }
  if (className) {
    classes.push(className);
  }

  const accessibleLabel = copied ? copiedLabel : label;

  return (
    <button
      type="button"
      className={classes.join(' ')}
      onClick={handleCopy}
      aria-live="polite"
      aria-label={accessibleLabel}
      title={accessibleLabel}
      data-label={accessibleLabel}
    >
      <span aria-hidden="true" className="copy-button__emoji">
        {value}
      </span>
      {showLabel ? <span className="copy-button__text">{accessibleLabel}</span> : null}
    </button>
  );
}
