import js from '@eslint/js';
import queryPlugin from '@tanstack/eslint-plugin-query';
import pluginRouter from '@tanstack/eslint-plugin-router';
import { globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  globalIgnores(['dist', 'node_modules', '**/*.d.ts']),
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'eqeqeq': ['error', 'always'],
      'no-console': 'error',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },

  {
    extends: [
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    files: ['**/*.{tsx,jsx}'],
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-refresh/only-export-components': 'error',
    },
  },

  {
    plugins: {
      '@tanstack/query': queryPlugin,
      '@tanstack/router': pluginRouter,
      'import': importPlugin,
      'perfectionist': perfectionist,
    },
    rules: {
      'import/order': [
        'error',
        {
          'alphabetize': { caseInsensitive: true, order: 'asc' },
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          partitionByNewLine: true,
          type: 'natural',
        },
      ],
    },
  },
);
