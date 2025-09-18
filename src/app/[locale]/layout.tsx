import type { ReactNode } from 'react';
import Link from 'next/link';
import { getDictionary } from '@/data/dictionaries';
import { getLocaleFromParam, locales } from '@/lib/i18n';

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

  return (
    <>
      <main>{children}</main>
      <footer className="footer">
        <span>{dictionary.footer.tagline}</span>
        <div>
          <Link href={`/${locale}#about`}>{dictionary.footer.links.about}</Link>
          <span> · </span>
          <a href="mailto:hello@heartemojis.org">{dictionary.footer.links.feedback}</a>
          <span> · </span>
          <Link href={`/${locale}#privacy`}>{dictionary.footer.links.privacy}</Link>
        </div>
      </footer>
    </>
  );
}
