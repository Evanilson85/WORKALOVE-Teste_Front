import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      semi: 'warn',
      'no-debugger': 'error',
      'no-dupe-else-if': 'warn',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-sparse-arrays': 'error',
      'no-undef': 'error',
      'no-console': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      // 'no-unused-vars': 'warn',
    },
  }
);
