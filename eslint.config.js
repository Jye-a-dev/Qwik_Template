import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import { qwikEslint9Plugin } from 'eslint-plugin-qwik';
import eslintConfigPrettier from 'eslint-config-prettier';

const ignores = [
  '**/*.log',
  '**/.DS_Store',
  '**/*.',
  '.vscode/settings.json',
  '**/.history',
  '**/.yarn',
  '**/dist',
  '**/dist-dev',
  '**/lib',
  '**/lib-types',
  '**/node_modules',
  '**/temp',
  '**/tmp',
  '**/.qwik',
  '**/coverage',
  '**/tsc-out',
  '**/target',
  '**/output',
  '**/build',
  '**/.cache',
  '**/.rollup.cache',
  '**/tsconfig.tsbuildinfo',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/server',
  'eslint.config.js',
  'commitlint.config.js',
];

export default tseslint.config(
  globalIgnores(ignores),
  js.configs.recommended,
  tseslint.configs.recommended,
  qwikEslint9Plugin.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.serviceworker,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
);
