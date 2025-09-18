"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Dictionary } from '@/data/dictionaries';
import { locales, type Locale } from '@/lib/i18n';

const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '简体中文',
  es: 'Español'
};

type HeaderNavProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type MenuKey = 'more' | 'fun' | 'languages' | null;

function buildLocalizedPath(pathname: string | null) {
  const segments = pathname?.split('/').filter(Boolean) ?? [];
  if (segments.length === 0) {
    return '';
  }
  const [, ...rest] = segments;
  return rest.join('/');
}

export function HeaderNav({ locale, dictionary }: HeaderNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const homeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [keyboardMode, setKeyboardMode] = useState(false);

  useEffect(() => {
    setOpenMenu(null);
    previousFocusRef.current = null;
  }, [pathname]);

  useEffect(() => {
    function handlePointer(event: MouseEvent | TouchEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        previousFocusRef.current = null;
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
        previousFocusRef.current = null;
      }
    }

    function handleFocus(event: FocusEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        previousFocusRef.current = null;
      }
    }

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleKey);
    window.addEventListener('focusin', handleFocus as any);

    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleKey);
      window.removeEventListener('focusin', handleFocus as any);
    };
  }, []);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Tab') {
        setKeyboardMode(true);
      }
    }

    function handleMousedown() {
      setKeyboardMode(false);
    }

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('mousedown', handleMousedown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleMousedown);
    };
  }, []);

  const toggleMenu = (menu: Exclude<MenuKey, null>) => {
    setOpenMenu((prev) => {
      if (prev === menu) {
        previousFocusRef.current?.focus();
        previousFocusRef.current = null;
        return null;
      }
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      return menu;
    });
  };

  const closeMenu = () => {
    if (openMenu) {
      setOpenMenu(null);
      previousFocusRef.current?.focus();
      previousFocusRef.current = null;
    }
  };

  const generatorHref = `/${locale}/generator/200`;
  const moreLinks = useMemo(
    () => [
      { href: `/${locale}/copy-paste`, label: dictionary.common.nav.copy },
      { href: `/${locale}/text-art`, label: dictionary.common.nav.textArt },
      { href: `/${locale}/copy-paste#color-guide-ref`, label: dictionary.common.nav.colors }
    ],
    [dictionary.common.nav.colors, dictionary.common.nav.copy, dictionary.common.nav.textArt, locale]
  );

  const funLinks = useMemo(
    () => [{ href: generatorHref, label: dictionary.common.nav.generator }],
    [dictionary.common.nav.generator, generatorHref]
  );

  const basePath = buildLocalizedPath(pathname);

  return (
    <nav
      className={`site-nav${keyboardMode ? ' site-nav--keyboard' : ''}`}
      aria-label="Primary navigation"
      ref={navRef}
    >
      <Link className="site-nav__link" href={`/${locale}`} ref={homeLinkRef}>
        {dictionary.common.nav.home}
      </Link>

      <div className={`nav-dropdown${openMenu === 'more' ? ' nav-dropdown--open' : ''}`}>
        <button
          type="button"
          className="nav-dropdown__trigger"
          aria-haspopup="true"
          aria-expanded={openMenu === 'more'}
          onClick={() => toggleMenu('more')}
        >
          <span>{dictionary.common.nav.more}</span>
          <span className="nav-dropdown__chevron" aria-hidden="true" />
        </button>
        <div className="nav-dropdown__panel" role="menu">
          {moreLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-dropdown__link"
              role="menuitem"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={`nav-dropdown${openMenu === 'fun' ? ' nav-dropdown--open' : ''}`}>
        <button
          type="button"
          className="nav-dropdown__trigger"
          aria-haspopup="true"
          aria-expanded={openMenu === 'fun'}
          onClick={() => toggleMenu('fun')}
        >
          <span>{dictionary.common.nav.fun}</span>
          <span className="nav-dropdown__chevron" aria-hidden="true" />
        </button>
        <div className="nav-dropdown__panel" role="menu">
          {funLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-dropdown__link"
              role="menuitem"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={`nav-dropdown nav-dropdown--languages${openMenu === 'languages' ? ' nav-dropdown--open' : ''}`}>
        <button
          type="button"
          className="nav-dropdown__trigger nav-dropdown__trigger--languages"
          aria-haspopup="true"
          aria-expanded={openMenu === 'languages'}
          onClick={() => toggleMenu('languages')}
        >
          <span>{dictionary.common.localeLabel}</span>
          <span className="nav-dropdown__current">{localeNames[locale]}</span>
          <span className="nav-dropdown__chevron" aria-hidden="true" />
        </button>
        <div className="nav-dropdown__panel nav-dropdown__panel--languages" role="menu">
          {locales.map((targetLocale) => {
            const href = `/${targetLocale}${basePath ? `/${basePath}` : ''}`;
            const isActive = targetLocale === locale;
            return (
              <Link
                key={targetLocale}
                href={href}
                className={`nav-dropdown__link${isActive ? ' nav-dropdown__link--active' : ''}`}
                role="menuitemradio"
                aria-checked={isActive}
                onClick={closeMenu}
              >
                {localeNames[targetLocale]}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
