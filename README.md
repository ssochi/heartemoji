# Heart Emojis (heartemojis.org)

This is a multilingual, pre-rendered Next.js site for exploring every heart emoji. It ships a modern landing page, programmatic detail routes for each emoji, and structured data for better SEO. All pages are statically generated at build time.

## Tech Stack

- Next.js 13 (App Router, static generation)
- TypeScript with strict linting via `eslint-config-next`
- PostCSS for basic autoprefixing

## Features

- Multilingual routing with `/en` and `/zh`, easily extendable in `src/lib/i18n.ts`
- Rich emoji dataset with localized copy in `src/data`
- Instant copy-to-clipboard buttons implemented as client components
- Dedicated advertising placeholders ready for ad manager integration
- SEO enhancements including localized metadata and JSON-LD on detail pages

## Getting Started

```bash
npm install
npm run dev
```

The production bundle is static. Run `npm run build` to verify output in `.next` and `out` directories.

## Project Structure

- `src/app/[locale]` — localized routes for the home page and emoji details
- `src/components` — UI building blocks such as cards, copy button, language switcher, and ad slot
- `src/data` — emoji catalog and dictionaries
- `src/lib` — locale helpers and tone descriptors
- `public` — favicon and Open Graph artwork

Feel free to extend `src/data/emojis.ts` and `src/data/dictionaries.ts` to add new hearts or languages.
