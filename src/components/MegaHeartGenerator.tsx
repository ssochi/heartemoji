'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dictionary } from '@/data/dictionaries';
import { HEART_EMOJIS } from '@/data/emojis';
import { CopyButton } from './CopyButton';

interface MegaHeartGeneratorProps {
  dictionary: Dictionary;
  initialCount?: number;
}

type EmojiOption = {
  slug: string;
  emoji: string;
  label: string;
};

const FEATURED_EMOJI_COUNT = 18;
const MIN_COUNT = 10;
const MAX_COUNT = 1000;

export function MegaHeartGenerator({ dictionary, initialCount = 200 }: MegaHeartGeneratorProps) {
  const config = dictionary.pages.generator;
  const options = useMemo<EmojiOption[]>(() => {
    return HEART_EMOJIS.slice(0, FEATURED_EMOJI_COUNT).map((item) => ({
      slug: item.slug,
      emoji: item.emoji,
      label: dictionary.emojiContent[item.slug]?.name ?? item.meaning
    }));
  }, [dictionary.emojiContent]);

  const [selectedSlug, setSelectedSlug] = useState(() => options[0]?.slug ?? 'red-heart');
  useEffect(() => {
    if (!options.length) {
      return;
    }
    if (!options.some((option) => option.slug === selectedSlug)) {
      setSelectedSlug(options[0].slug);
    }
  }, [options, selectedSlug]);

  const selectedOption = useMemo(() => {
    return options.find((option) => option.slug === selectedSlug) ?? options[0] ?? {
      slug: 'red-heart',
      emoji: '❤️',
      label: 'Red Heart'
    };
  }, [options, selectedSlug]);

  const [count, setCount] = useState(initialCount);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [tick, setTick] = useState(0);

  const normalizedCount = Math.min(Math.max(count, MIN_COUNT), MAX_COUNT);
  const megaString = useMemo(
    () => selectedOption.emoji.repeat(normalizedCount),
    [normalizedCount, selectedOption.emoji]
  );
  const previewSample = useMemo(() => {
    const maxPreviewHearts = 24;
    if (normalizedCount <= maxPreviewHearts) {
      return megaString;
    }
    const sample = selectedOption.emoji.repeat(maxPreviewHearts);
    return `${sample}…`;
  }, [megaString, normalizedCount, selectedOption.emoji]);

  useEffect(() => {
    if (tick === 0) {
      return;
    }
    setToastVisible(true);
    const timeout = window.setTimeout(() => setToastVisible(false), 2200);
    return () => window.clearTimeout(timeout);
  }, [tick]);

  const handleCopy = useCallback(() => {
    setToastMessage(
      config.toast.replace('{count}', String(normalizedCount)).replace('{emoji}', selectedOption.label)
    );
    setTick((value) => value + 1);
  }, [config.toast, normalizedCount, selectedOption.label]);

  const handleCountChange = useCallback((value: number) => {
    if (Number.isNaN(value)) {
      setCount(MIN_COUNT);
      return;
    }
    setCount(Math.min(Math.max(value, MIN_COUNT), MAX_COUNT));
  }, []);

  const handleEmojiPick = useCallback((slug: string) => {
    setSelectedSlug(slug);
  }, []);

  return (
    <section className="mega-heart" aria-labelledby="mega-heart-heading">
      <div
        className={`copy-toast${toastVisible ? ' copy-toast--visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" className="copy-toast__emoji">
          ❤️
        </span>
        <span className="copy-toast__message">
          {toastMessage ||
            config.toast
              .replace('{count}', String(normalizedCount))
              .replace('{emoji}', selectedOption.label)}
        </span>
      </div>
      <div className="mega-heart__header">
        <h3 id="mega-heart-heading">{config.title}</h3>
        <p>{config.description}</p>
      </div>
      <div className="mega-heart__body">
        <div className="mega-heart__preview" aria-live="polite">
          <p className="mega-heart__preview-label">{config.previewLabel}</p>
          <div className="mega-heart__preview-card">
            <span className="mega-heart__preview-emoji" aria-hidden="true">
              {previewSample}
            </span>
            <span className="sr-only">
              {normalizedCount} {selectedOption.label}
            </span>
          </div>
        </div>
        <div className="mega-heart__form">
          <div className="mega-heart__field">
            <label htmlFor="mega-heart-count" id="mega-heart-count-label" className="mega-heart__label">
              {config.countLabel}
            </label>
            <div className="mega-heart__sliders">
              <input
                id="mega-heart-slider"
                type="range"
                min={MIN_COUNT}
                max={MAX_COUNT}
                value={normalizedCount}
                onChange={(event) => handleCountChange(Number(event.target.value))}
                className="mega-heart__slider"
                aria-labelledby="mega-heart-count-label"
              />
              <input
                id="mega-heart-count"
                type="number"
                min={MIN_COUNT}
                max={MAX_COUNT}
                value={normalizedCount}
                onChange={(event) => handleCountChange(Number(event.target.value))}
                className="mega-heart__number"
              />
            </div>
          </div>
          <div className="mega-heart__field">
            <span className="mega-heart__label">{config.emojiLabel}</span>
            <p className="mega-heart__helper">{config.emojiHelper}</p>
            <div className="mega-heart__emoji-picker" aria-label={config.emojiLabel}>
              {options.map((option) => {
                const isActive = option.slug === selectedOption.slug;
                return (
                  <button
                    key={option.slug}
                    type="button"
                    aria-pressed={isActive}
                    className={`mega-heart__emoji-button${isActive ? ' mega-heart__emoji-button--active' : ''}`}
                    onClick={() => handleEmojiPick(option.slug)}
                    title={option.label}
                  >
                    <span aria-hidden="true">{option.emoji}</span>
                    <span className="mega-heart__emoji-label">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mega-heart__actions">
            <CopyButton
              value={megaString}
              label={dictionary.common.copy}
              copiedLabel={dictionary.common.copied}
              size="small"
              className="mega-heart__copy"
              hideValue
              staticLabel
              onCopy={handleCopy}
            />
            <span className="mega-heart__count-badge">
              {normalizedCount.toLocaleString()} × {selectedOption.label}
            </span>
          </div>
        </div>
      </div>
      <p className="mega-heart__helper mega-heart__helper--footer">{config.helperText}</p>
      <textarea
        readOnly
        value={megaString}
        aria-label={`${normalizedCount} ${selectedOption.label}`}
        className="mega-heart__textarea"
      />
    </section>
  );
}
