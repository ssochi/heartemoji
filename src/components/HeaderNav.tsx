"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useMemo, useRef, useState } from 'react';
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
  const navWrapperRef = useRef<HTMLDivElement | null>(null);
  const homeLinkRef = useRef<HTMLAnchorElement | null>(null);
  const mobileToggleRef = useRef<HTMLButtonElement | null>(null);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [keyboardMode, setKeyboardMode] = useState(false);
  const reactNavId = useId().replace(/:/g, '');
  const navId = `site-nav-${locale}-${reactNavId}`;

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
    previousFocusRef.current = null;
  }, [pathname]);

  useEffect(() => {
    function handlePointer(event: MouseEvent | TouchEvent) {
      if (!navWrapperRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        if (mobileOpen) {
          setMobileOpen(false);
        }
        previousFocusRef.current = null;
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        if (mobileOpen) {
          setMobileOpen(false);
          mobileToggleRef.current?.focus();
        } else {
          setOpenMenu(null);
          if (previousFocusRef.current) {
            previousFocusRef.current.focus();
          }
          previousFocusRef.current = null;
        }
      }
    }

    function handleFocus(event: FocusEvent) {
      if (!navWrapperRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
        previousFocusRef.current = null;
      }
    }

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleKey);
    document.addEventListener('focusin', handleFocus as any);

    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('focusin', handleFocus as any);
    };
  }, [mobileOpen]);

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

  useEffect(() => {
    const media = window.matchMedia('(max-width: 720px)');
    function handleChange() {
      if (!media.matches) {
        setMobileOpen(false);
      }
    }

    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
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

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      if (prev) {
        setOpenMenu(null);
        previousFocusRef.current = null;
      }
      return !prev;
    });
  };

  const handleNavigate = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    previousFocusRef.current = null;
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
    () => [
      { href: `/${locale}/fun/emoji-fish-tank`, label: dictionary.common.nav.fishTank },
      { href: generatorHref, label: dictionary.common.nav.generator }
    ],
    [dictionary.common.nav.fishTank, dictionary.common.nav.generator, generatorHref, locale]
  );

  const basePath = buildLocalizedPath(pathname);

  return (
    <div
      className={`site-nav-wrapper${mobileOpen ? ' site-nav-wrapper--open' : ''}${keyboardMode ? ' site-nav-wrapper--keyboard' : ''}`}
      ref={navWrapperRef}
    >
      <button
        type="button"
        className="site-nav__toggle"
        aria-controls={navId}
        aria-expanded={mobileOpen}
        onClick={toggleMobile}
        ref={mobileToggleRef}
      >
        <span className="site-nav__toggle-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="site-nav__toggle-label">
          {mobileOpen ? dictionary.common.nav.close : dictionary.common.nav.menu}
        </span>
      </button>

      <nav
        id={navId}
        className={`site-nav${keyboardMode ? ' site-nav--keyboard' : ''}${mobileOpen ? ' site-nav--mobile-open' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="site-nav__item">
          <Link className="site-nav__button" href={`/${locale}`} ref={homeLinkRef} onClick={handleNavigate}>
            {dictionary.common.nav.home}
          </Link>
        </div>

        <div className={`site-nav__item nav-dropdown${openMenu === 'more' ? ' nav-dropdown--open' : ''}`}>
        <button
          type="button"
          className="site-nav__button nav-dropdown__trigger"
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
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className={`site-nav__item nav-dropdown${openMenu === 'fun' ? ' nav-dropdown--open' : ''}`}>
        <button
          type="button"
          className="site-nav__button nav-dropdown__trigger"
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
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`site-nav__item nav-dropdown nav-dropdown--languages${openMenu === 'languages' ? ' nav-dropdown--open' : ''}`}
      >
        <button
          type="button"
          className="site-nav__button nav-dropdown__trigger nav-dropdown__trigger--languages"
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
                onClick={handleNavigate}
              >
                {localeNames[targetLocale]}
              </Link>
            );
          })}
        </div>
      </div>
      </nav>

      <div
        className={`site-nav__backdrop${mobileOpen ? ' site-nav__backdrop--visible' : ''}`}
        aria-hidden="true"
        onClick={() => setMobileOpen(false)}
      />
    </div>
  );
}
