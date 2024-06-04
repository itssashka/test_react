module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
      'react-refresh',
      'react',
      '@typescript-eslint',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    'no-unused-vars': 'warn',
    "indent": ["error", 4],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'quotes': [2, 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': 'error',
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
  },
}
