import Link from 'next/link';
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
  const basePath = path.replace(/^\/+|\/+$/g, '');

  return (
    <nav className="lang-switcher" aria-label={dictionary.common.localeLabel}>
      {locales.map((locale) => {
        const href = `/${locale}${basePath ? `/${basePath}` : ''}`;
        const isActive = locale === currentLocale;
        return isActive ? (
          <span key={locale}>{localeNames[locale]}</span>
        ) : (
          <Link key={locale} href={href}>{localeNames[locale]}</Link>
        );
      })}
    </nav>
  );
}
