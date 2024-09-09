module.exports = {
  env: {
      browser: true,
      es2021: true,
  },
  extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'prettier',
  ],
  overrides: [
      {
          env: {
              node: true,
          },
          files: ['.eslintrc.{js,cjs}'],
          parserOptions: {
              sourceType: 'script',
          },
      },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
  },
  plugins: [
      '@typescript-eslint',
      'react',
      '@typescript-eslint/eslint-plugin',
      'eslint-plugin-prettier',
  ],
  rules: {
      'prettier/prettier': [
          'warn',
          {
              endOfLine: 'auto',
          },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      /**
       * Крайне плохо устанавливать значение ниже error'a
       */
      'react-hooks/rules-of-hooks': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-const': 'warn',
      
      /** Тоже плохо, оставлять warn, а не error */
      '@typescript-eslint/no-explicit-any': 'warn',

      /** Просто полезные правила */
      'react/no-unescaped-entities': 'warn',
      'no-useless-catch': 'warn',
  },
};
