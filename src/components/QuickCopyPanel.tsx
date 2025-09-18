'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dictionary } from '@/data/dictionaries';
import { CopyButton } from './CopyButton';

type QuickCopyItem = {
  slug: string;
  emoji: string;
  name: string;
};

type QuickCopyPanelProps = {
  items: QuickCopyItem[];
  dictionary: Dictionary;
};

export function QuickCopyPanel({ items, dictionary }: QuickCopyPanelProps) {
  const [toastEmoji, setToastEmoji] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!visible) {
      return;
    }
    const timeout = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [visible]);

  const handleCopy = useCallback(
    (item: QuickCopyItem) => {
      const message = dictionary.common.copiedToast.replace('{name}', item.name);
      setToastEmoji(item.emoji);
      setToastMessage(message);
      setVisible(true);
    },
    [dictionary.common.copiedToast]
  );

  const buttons = useMemo(
    () =>
      items.map((item) => (
        <CopyButton
          key={`quick-${item.slug}`}
          value={item.emoji}
          label={`${dictionary.common.copy} ${item.name}`}
          copiedLabel={dictionary.common.copied}
          size="small"
          showLabel={false}
          onCopy={() => handleCopy(item)}
        />
      )),
    [dictionary.common.copy, dictionary.common.copied, handleCopy, items]
  );

  return (
    <div className="quick-panel">
      <div
        className={`copy-toast${visible ? ' copy-toast--visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" className="copy-toast__emoji">
          {toastEmoji}
        </span>
        <span className="copy-toast__message">{toastMessage}</span>
      </div>
      <div className="quick-grid">{buttons}</div>
    </div>
  );
}
