"use client";

import { useMemo, type ChangeEvent } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Dictionary } from '@/data/dictionaries';
import { locales, type Locale } from '@/lib/i18n';

type LanguageSwitcherProps = {
  currentLocale: Locale;
  dictionary: Dictionary;
  path?: string;
};

const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  es: 'Español'
};

export function LanguageSwitcher({ currentLocale, dictionary, path = '' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const basePath = useMemo(() => {
    if (path) {
      return path.replace(/^\/+|\/+$/g, '');
    }

    if (!pathname) {
      return '';
    }

    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      return '';
    }

    const [, ...rest] = segments;
    return rest.join('/');
  }, [path, pathname]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    if (nextLocale === currentLocale) {
      return;
    }
    const href = `/${nextLocale}${basePath ? `/${basePath}` : ''}`;
    router.push(href);
  };

  return (
    <label className="lang-select" aria-label={dictionary.common.localeLabel}>
      <span className="lang-select__icon" aria-hidden="true">
        🌐
      </span>
      <select value={currentLocale} onChange={handleChange} aria-label={dictionary.common.localeLabel}>
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
