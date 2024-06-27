// eslint.config.mjs
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import node from 'eslint-plugin-node';
import promise from 'eslint-plugin-promise';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...fixupConfigRules(compat.extends(
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:promise/recommended'
  )),
  {
    plugins: {
      import: fixupPluginRules(_import),
      node: fixupPluginRules(node),
      promise: fixupPluginRules(promise)
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },

      ecmaVersion: 2020,
      sourceType: 'module'
    },

    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-unused-vars': ['warn'],
      'no-undef': ['error'],
      'no-console': 'off'
    }
  }
];
