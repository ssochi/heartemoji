import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://heartemojis.org'),
  title: {
    default: 'Heart Emojis — Copy & Explore Every Style',
    template: '%s | Heart Emojis'
  },
  description:
    'Discover every heart emoji in one place. Copy instantly, explore meanings, and get localized descriptions for each symbol on heartemojis.org.',
  keywords: ['heart emoji', 'love emoji', 'heart symbols', 'copy heart emoji'],
  openGraph: {
    title: 'Heart Emojis — Copy & Explore Every Style',
    description:
      'Explore a curated, multilingual catalog of heart emojis. Copy any emoji instantly and learn when to use each symbol.',
    url: 'https://heartemojis.org',
    siteName: 'Heart Emojis',
    images: [{ url: '/og-heartemojis.svg', width: 1200, height: 630, alt: 'Heart Emojis preview' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heart Emojis — Copy & Explore Every Style',
    description:
      'Copy and understand every heart emoji instantly. Multilingual descriptions, fast clipboard actions, and SEO-friendly pages.',
    images: ['/og-heartemojis.svg']
  },
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      zh: '/zh'
    }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
