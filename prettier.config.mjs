/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  quoteProps: 'consistent',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
};

export default config;
