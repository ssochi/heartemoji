import type { ReactNode } from 'react';
import Link from 'next/link';
import { getDictionary } from '@/data/dictionaries';
import { getLocaleFromParam, locales } from '@/lib/i18n';
import { HeaderNav } from '@/components/HeaderNav';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const headerTaglineRaw = dictionary.footer.tagline.split('—').slice(1).join('—').trim();
  const headerTagline = headerTaglineRaw || dictionary.footer.tagline;

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__branding">
            <Link href={`/${locale}`} className="site-logo">
              <span className="site-logo__mark" aria-hidden="true">
                ❤️
              </span>
              <span className="site-logo__text">heartemojis.org</span>
            </Link>
            {headerTagline ? <span className="site-header__tagline">{headerTagline}</span> : null}
          </div>
          <HeaderNav locale={locale} dictionary={dictionary} />
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="site-footer__links">
          <Link href={`/${locale}/copy-paste`}>{dictionary.common.nav.copy}</Link>
          <Link href={`/${locale}/text-art`}>{dictionary.common.nav.textArt}</Link>
          <Link href={`/${locale}/generator/200`}>{dictionary.common.nav.generator}</Link>
          <Link href={`/${locale}/copy-paste#color-guide-ref`}>{dictionary.common.nav.colors}</Link>
        </div>
        <div className="site-footer__meta">
          <span>{dictionary.footer.tagline}</span>
          <div>
            <Link href={`/${locale}#about`}>{dictionary.footer.links.about}</Link>
            <span> · </span>
            <a href="mailto:hello@heartemojis.org">{dictionary.footer.links.feedback}</a>
            <span> · </span>
            <Link href={`/${locale}#privacy`}>{dictionary.footer.links.privacy}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
