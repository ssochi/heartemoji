export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getLocaleFromParam(value: string | undefined): Locale {
  if (isLocale(value)) {
    return value;
  }
  return defaultLocale;
}
