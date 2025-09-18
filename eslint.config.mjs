import nextPlugin from 'eslint-config-next';

export default [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  ...nextPlugin(),
  {
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
];
