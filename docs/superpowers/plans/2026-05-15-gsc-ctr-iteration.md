# GSC CTR Iteration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve `/en/copy-paste` CTR fit for `heart emoji copy and paste` queries and lightly reinforce the Spanish count/WhatsApp cluster.

**Architecture:** Keep the existing Next.js App Router and data-driven landing-page model. Add one small English quick-copy section to the existing copy page, refine dictionary metadata, and update Spanish landing-page copy without introducing new routes.

**Tech Stack:** Next.js 13 App Router, React 18, TypeScript, CSS modules through `src/app/globals.css`, static generation.

---

## File Structure

- Create: `scripts/validate-gsc-ctr-iteration.mjs`
  - Validates the SEO/product requirements that are easy to regress: English title text, direct copy-paste framing, first-section quick-copy labels, and Spanish count/WhatsApp language.
- Modify: `src/data/dictionaries.ts`
  - Updates the English `/en/copy-paste` title, description, bundle intro, and toast copy.
- Modify: `src/app/[locale]/copy-paste/page.tsx`
  - Adds an English-only quick-copy section before the bundle grid while leaving existing localized collection and Spanish sections intact.
- Modify: `src/data/searchLandingPages.ts`
  - Refines Spanish `100`, `500`, `1000`, and WhatsApp page copy and related-link emphasis.
- Modify: `src/app/globals.css`
  - Adds small, scoped styles for the quick-copy section if existing card/grid classes are not enough.

### Task 1: Add Failing Product Validation

**Files:**
- Create: `scripts/validate-gsc-ctr-iteration.mjs`

- [ ] **Step 1: Write the failing validation script**

```js
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const dictionarySource = readFileSync('src/data/dictionaries.ts', 'utf8');
const copyPageSource = readFileSync('src/app/[locale]/copy-paste/page.tsx', 'utf8');
const spanishSource = readFileSync('src/data/searchLandingPages.ts', 'utf8');

assert.match(
  dictionarySource,
  /title:\s*'Heart Emoji Copy and Paste'/,
  'English copy page title should exactly target Heart Emoji Copy and Paste'
);

assert.match(
  dictionarySource,
  /Copy heart emojis, heart symbols, and heart combinations instantly/,
  'English copy page description should lead with instant copy intent'
);

assert.match(
  copyPageSource,
  /englishQuickCopyItems/,
  'English copy page should define a first-screen quick-copy item set'
);

assert.match(
  copyPageSource,
  /Popular heart emojis to copy/,
  'English copy page should add a quick-copy section before broader bundles'
);

assert.match(
  copyPageSource,
  /Romantic heart combo/,
  'English quick-copy section should include common short combinations'
);

assert.match(
  spanishSource,
  /100 corazones para copiar y pegar en WhatsApp/,
  'Spanish 100 hearts page should surface WhatsApp copy intent early'
);

assert.match(
  spanishSource,
  /500 corazones para copiar y pegar en WhatsApp/,
  'Spanish 500 hearts page should surface WhatsApp copy intent early'
);

assert.match(
  spanishSource,
  /1000 corazones para copiar y pegar en WhatsApp/,
  'Spanish cluster should preserve the strongest 1000 hearts WhatsApp phrase'
);

assert.match(
  spanishSource,
  /elige 100, 500 o 1000 corazones/,
  'Spanish WhatsApp page should point users to count-based pages'
);

console.log('GSC CTR iteration validation passed');
```

- [ ] **Step 2: Run validation to verify it fails**

Run: `node scripts/validate-gsc-ctr-iteration.mjs`

Expected: FAIL with an assertion mentioning the current English title or missing quick-copy section.

- [ ] **Step 3: Commit the failing validation script**

```bash
git add scripts/validate-gsc-ctr-iteration.mjs
git commit -m "Add GSC CTR validation"
```

### Task 2: Update English Copy-Page Intent

**Files:**
- Modify: `src/data/dictionaries.ts`

- [ ] **Step 1: Update English dictionary copy**

Change the English `pages.copy` entry to:

```ts
copy: {
  title: 'Heart Emoji Copy and Paste',
  description:
    'Copy heart emojis, heart symbols, and heart combinations instantly for messages, bios, captions, comments, and profiles.',
  bundlesIntro:
    'Start with the most-used hearts, then choose a themed pack for romance, friendship, gradients, fandoms, or minimalist designs.',
  toast: 'Copied! Heart emoji ready to paste.'
}
```

- [ ] **Step 2: Run validation and expect remaining failures**

Run: `node scripts/validate-gsc-ctr-iteration.mjs`

Expected: FAIL on missing `englishQuickCopyItems` or Spanish phrase assertions, not on the English dictionary assertions.

### Task 3: Add English Quick-Copy Section

**Files:**
- Modify: `src/app/[locale]/copy-paste/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Import `CopyButton`**

Add:

```ts
import { CopyButton } from '@/components/CopyButton';
```

- [ ] **Step 2: Add the quick-copy data near `searchLandingCopy`**

```ts
const englishQuickCopyItems = [
  { label: 'Red heart emoji', value: '❤️' },
  { label: 'Pink heart emoji', value: '🩷' },
  { label: 'Sparkling heart emoji', value: '💖' },
  { label: 'Two hearts emoji', value: '💕' },
  { label: 'Revolving hearts emoji', value: '💞' },
  { label: 'Black heart emoji', value: '🖤' },
  { label: 'White heart emoji', value: '🤍' },
  { label: 'Outline heart symbol', value: '♡' },
  { label: 'Classic heart symbol', value: '♥' },
  { label: 'Romantic heart combo', value: '❤️💕💌' },
  { label: 'Soft heart combo', value: '🩷💖💕' },
  { label: 'Friendship heart combo', value: '💛💚🩵' },
  { label: 'Aesthetic heart combo', value: '🤍🩶♡' },
  { label: 'Text heart combo', value: '♡ ♥︎ ❣' }
];
```

- [ ] **Step 3: Render the quick-copy section before the bundle section**

```tsx
{locale === 'en' ? (
  <section className="section-frame quick-copy-strip" aria-labelledby="popular-heart-copy">
    <div className="section-intro">
      <span className="section-kicker">Copy now</span>
      <h2 className="section-heading" id="popular-heart-copy">
        Popular heart emojis to copy
      </h2>
      <p className="section-copy">
        Tap a heart or short combo, then paste it into a message, bio, caption, comment, or profile.
      </p>
    </div>
    <div className="quick-copy-strip__grid">
      {englishQuickCopyItems.map((item) => (
        <div key={item.label} className="quick-copy-strip__item">
          <span className="quick-copy-strip__value" aria-hidden="true">
            {item.value}
          </span>
          <span className="quick-copy-strip__label">{item.label}</span>
          <CopyButton
            value={item.value}
            label={dictionary.common.copy}
            copiedLabel={dictionary.common.copied}
            size="small"
            hideValue
            staticLabel
          />
        </div>
      ))}
    </div>
  </section>
) : null}
```

- [ ] **Step 4: Add scoped CSS**

```css
.quick-copy-strip {
  display: grid;
  gap: 1rem;
}

.quick-copy-strip__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.75rem;
}

.quick-copy-strip__item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 0.9rem;
  border-radius: 1rem;
  border: 1px solid rgba(227, 104, 89, 0.14);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
}

.quick-copy-strip__value {
  font-size: 1.3rem;
  line-height: 1;
}

.quick-copy-strip__label {
  min-width: 0;
  color: var(--text);
  font-weight: 800;
  line-height: 1.3;
}
```

- [ ] **Step 5: Run validation and expect Spanish-only failures**

Run: `node scripts/validate-gsc-ctr-iteration.mjs`

Expected: FAIL only on Spanish phrase assertions.

### Task 4: Refine Spanish Cluster Copy

**Files:**
- Modify: `src/data/searchLandingPages.ts`

- [ ] **Step 1: Update the `100-corazones-para-copiar-y-pegar` entry**

Set:

```ts
title: '100 corazones para copiar y pegar en WhatsApp',
description:
  'Copia 100 corazones para copiar y pegar en WhatsApp, estados, comentarios y mensajes. Versiones rojas, rosas, brillantes, negras y mezcladas listas para usar.',
intro: [
  'Si buscas 100 corazones para copiar y pegar en WhatsApp, esta versión corta es más práctica para chats, estados y comentarios que necesitan verse bonitos sin ocupar toda la pantalla.',
  'Aquí tienes bloques de 100 corazones listos para copiar en varios estilos: romántico, cute, brillante, oscuro o mezclado.'
]
```

- [ ] **Step 2: Update the `500-corazones-para-copiar-y-pegar` entry**

Set:

```ts
title: '500 corazones para copiar y pegar en WhatsApp',
description:
  'Copia 500 corazones para copiar y pegar en WhatsApp, TikTok, Instagram y comentarios largos. Versiones rojas, rosas, brillantes, negras y mezcladas listas para usar.',
intro: [
  '500 corazones para copiar y pegar en WhatsApp son un punto medio útil cuando 100 se sienten pocos y 1000 ya ocupan demasiado. Esta longitud funciona muy bien en publicaciones, comentarios largos y estados llamativos.',
  'Preparamos varias versiones listas para copiar: románticas, suaves, brillantes, oscuras o mezcladas.'
]
```

- [ ] **Step 3: Update the `corazones-para-whatsapp` intro**

Set the first intro paragraph to:

```ts
'Si buscas corazones para WhatsApp listos para copiar y pegar, aquí tienes selecciones rápidas para mensajes, estados, nombres de grupo y biografías.'
```

Add this sentence to the second intro paragraph:

```ts
'Si necesitas una cadena larga, elige 100, 500 o 1000 corazones según cuánto espacio quieras ocupar.'
```

- [ ] **Step 4: Run validation and expect pass**

Run: `node scripts/validate-gsc-ctr-iteration.mjs`

Expected: PASS with `GSC CTR iteration validation passed`.

### Task 5: Build And Commit Implementation

**Files:**
- All modified files from Tasks 2-4

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: PASS with Next.js build completing static page generation.

- [ ] **Step 2: Inspect working tree**

Run: `git status -sb`

Expected: only the intended plan, validation, dictionary, copy page, Spanish data, and optional CSS files are modified.

- [ ] **Step 3: Commit implementation**

```bash
git add docs/superpowers/plans/2026-05-15-gsc-ctr-iteration.md scripts/validate-gsc-ctr-iteration.mjs src/data/dictionaries.ts src/app/[locale]/copy-paste/page.tsx src/data/searchLandingPages.ts src/app/globals.css
git commit -m "Improve GSC copy intent landing pages"
```

### Task 6: Publish Branch

**Files:**
- No file edits.

- [ ] **Step 1: Confirm GitHub CLI availability**

Run: `gh --version`

Expected in this environment: command may be unavailable. If unavailable, skip PR creation and push the branch.

- [ ] **Step 2: Push branch**

Run: `git push -u origin codex/gsc-ctr-iteration`

Expected: branch is pushed to GitHub.

- [ ] **Step 3: If `gh` is available, create a draft PR**

Run:

```bash
gh pr create --draft --fill --head codex/gsc-ctr-iteration
```

Expected: draft PR URL is returned.

- [ ] **Step 4: If `gh` is unavailable, report the pushed branch and blocker**

Report that the branch is published but PR creation could not be automated because `gh` is not installed.
