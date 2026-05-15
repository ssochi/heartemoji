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
