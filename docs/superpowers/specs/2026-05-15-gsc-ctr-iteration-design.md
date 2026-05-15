# GSC CTR Iteration Design

## Context

Seven-day Google Search Console data shows two clear signals:

- The English copy-paste page has high impressions but weak click-through. `/en/copy-paste` received 1,570 impressions and 8 clicks, while queries such as `heart emoji copy`, `heart emoji copy paste`, and `heart emojis to copy and paste` show explicit copy intent.
- The Spanish long-count cluster is already working. `/es/copiar/1000-corazones-para-copiar-y-pegar` received 934 impressions and 119 clicks, and the query `1000 corazones para copiar y pegar en whatsapp` received 48 clicks from 131 impressions.

The next iteration should improve how existing pages match proven search intent. This design avoids broad page expansion and focuses on low-risk CTR and landing-page fit improvements.

## Goals

- Make `/en/copy-paste` directly match `heart emoji copy` and `heart emoji copy paste` intent in metadata, H1, intro copy, and the first interactive section.
- Bring copyable heart emoji snippets closer to the top of `/en/copy-paste` so search users can complete the job immediately.
- Lightly strengthen the Spanish `100 / 500 / 1000 / WhatsApp` cluster without disrupting the already successful 1000-corazones page.
- Preserve the current data-driven landing-page architecture and avoid one-off JSX pages.

## Non-Goals

- Do not create separate English pages for `heart emoji copy`, `heart emoji copy paste`, or similar near-duplicate queries in this iteration.
- Do not redesign the full visual system.
- Do not change emoji detail pages, generator routes, or unrelated language clusters.
- Do not make large Spanish content rewrites where the current page is already performing well.

## Approach

Use a focused CTR iteration.

The English copy page should move from a broad "library" framing to a direct "copy and paste" framing. The page already has reusable copy components, so the implementation can add or reorder a small quick-copy section while keeping the existing bundle grid.

The Spanish work should be content-level only: refine page titles, descriptions, intro text, and related-link priority for the specific `SEARCH_LANDING_PAGES` entries that correspond to the GSC data. The 1000-corazones page should remain structurally stable because it is already getting strong clicks.

## English Copy Page Design

Update the English dictionary copy for `/en/copy-paste`:

- Title should include the exact high-intent phrase `Heart Emoji Copy and Paste`.
- Description should say users can copy heart emojis, heart symbols, and heart combinations instantly.
- Intro copy should lead with the action: copy a heart emoji, paste it into messages, bios, comments, or captions.

Add or expose a high-intent quick-copy block before the broader bundle cards:

- Include individual hearts such as `❤️`, `🩷`, `💖`, `💕`, `💞`, `🖤`, `🤍`, `♡`, and `♥`.
- Include short combinations such as romantic, soft, friendship, aesthetic, and text-symbol variants.
- Use existing `CopyButton` behavior where possible.
- Keep the existing bundle grid below this block for users who want themed packs.

This keeps the landing page useful for both exact-search visitors and broader browse visitors.

## Spanish Cluster Design

Refine only the Spanish entries in `src/data/searchLandingPages.ts`:

- `100-corazones-para-copiar-y-pegar`: make WhatsApp and direct copying appear earlier in the title or intro because the top Spanish queries include count-based copy intent.
- `500-corazones-para-copiar-y-pegar`: reinforce the midpoint use case while keeping `WhatsApp`, `copiar y pegar`, `estados`, and `comentarios` visible.
- `corazones-para-whatsapp`: strengthen the copy-paste framing and point users toward 100, 500, and 1000 count pages when they need longer blocks.
- `1000-corazones-para-copiar-y-pegar`: keep the structure stable, but make sure related links continue to route users to 100, 500, WhatsApp, and the main hub.

Do not remove existing successful phrases such as `1000 corazones para copiar y pegar en WhatsApp` or `mil corazones para copiar y pegar`.

## Data Flow

- `/en/copy-paste` uses `getDictionary(locale)`, `CopyBundles`, `COLOR_GUIDE`, and `getSearchLandingCollection(locale)`.
- Spanish `/es/copiar/[slug]` pages use `SEARCH_LANDING_PAGES`, `getSearchLandingPageBySlug`, `SearchLandingPage`, FAQ JSON-LD, and breadcrumb JSON-LD.
- Sitemap generation already includes both `/[locale]/copy-paste` and the Spanish `/es/copiar/[slug]` routes.

The iteration should stay within these existing flows.

## Components And Files

Expected implementation scope:

- `src/data/dictionaries.ts`: English copy page metadata and visible copy.
- `src/app/[locale]/copy-paste/page.tsx`: high-intent quick-copy section placement and any locale-specific labels needed for the English page.
- `src/data/searchLandingPages.ts`: Spanish title, description, intro, and related-link refinements.
- `src/app/globals.css`: only if the quick-copy block needs small layout styles.

No new route is required.

## Error Handling And Accessibility

- Copy controls should keep the existing copied-state behavior and accessible labels.
- The quick-copy block should have a clear section heading and stable button labels.
- Text should remain readable and not depend on hover-only behavior.
- If the clipboard action fails, existing `CopyButton` behavior should remain the source of truth.

## Testing

Run:

```bash
npm run build
```

Verify:

- Static generation succeeds for `/en/copy-paste` and `/es/copiar/[slug]`.
- Metadata compiles without TypeScript errors.
- No sitemap or route generation regression occurs.

If styles are changed, also inspect the local page in a browser at desktop and mobile widths before considering the implementation complete.

## Success Criteria

- `/en/copy-paste` search snippet and H1 visibly match `heart emoji copy and paste` intent.
- A search visitor can copy a common heart from the first meaningful section of the English page.
- Spanish count pages continue to form a clear cluster around `100`, `500`, `1000`, and `WhatsApp`.
- The implementation is small enough to evaluate against GSC after the next seven-day window.
