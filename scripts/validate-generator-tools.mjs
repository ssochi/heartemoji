import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const dictionarySource = readFileSync('src/data/dictionaries.ts', 'utf8');
const generatorPageSource = readFileSync('src/app/[locale]/generator/[count]/page.tsx', 'utf8');
const toolsSource = readFileSync('src/components/HeartExpressionTools.tsx', 'utf8');
const milestoneSource = readFileSync('docs/seo-milestones.md', 'utf8');

assert.match(dictionarySource, /bio:\s*{/, 'Generator dictionary should include Bio Generator copy');
assert.match(dictionarySource, /caption:\s*{/, 'Generator dictionary should include Caption Generator copy');
assert.match(dictionarySource, /toolsKicker/, 'Generator dictionary should include localized section kicker copy');
assert.match(dictionarySource, /Heart bio generator/, 'English Bio Generator title should be present');
assert.match(dictionarySource, /Heart caption generator/, 'English Caption Generator title should be present');

assert.match(
  toolsSource,
  /export function HeartExpressionTools/,
  'HeartExpressionTools component should export the combined tools UI'
);
assert.match(toolsSource, /bioTemplates/, 'Bio Generator should use deterministic bio templates');
assert.match(toolsSource, /captionTemplates/, 'Caption Generator should use deterministic caption templates');
assert.match(toolsSource, /config\.toolsKicker/, 'Tools section kicker should come from localized dictionary copy');
assert.match(toolsSource, /name="generator-style"/, 'Tools should expose style choices');
assert.match(toolsSource, /CopyButton/, 'Generated outputs should be copyable');

assert.match(
  generatorPageSource,
  /<HeartExpressionTools dictionary={dictionary} \/>/,
  'Generator page should render the Bio and Caption tools'
);

assert.match(
  milestoneSource,
  /已上线 Bio Generator 和 Caption Generator/,
  'SEO milestones should record the completed generator tools'
);

console.log('Generator tools validation passed');
