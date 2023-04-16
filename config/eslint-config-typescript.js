module.exports = {
  env: {
    browser: true, // browser global variables.
    es2021: true, // adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
    node: true, // Node.js global variables and Node.js scoping.
  },
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',

    // Uses rules from eslint-config-airbnb-typescript plugin
    'airbnb-base',
    'airbnb-typescript/base',
    // Uses the all recommended rules from prettier plugin
    // https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
    'plugin:prettier/recommended',
  ],
  // Ignore files we don't want to lint
  ignorePatterns: [
    'node_modules/*',
    '**/*.d.ts',
    '**/__generated__/*',
    'vite.config.ts',
    '.eslintrc.cjs',
    '.prettier.config.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: [
    '@typescript-eslint',
    'typescript-sort-keys',
    'sort-destructure-keys',
    'import',
    'prettier',
  ],
  rules: {
    /**
     * Prettier
     */

    // Show prettier errors in eslint
    'prettier/prettier': ['error'],

    /**
     * Base
     */

    // Specify curly brace conventions for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'all'],

    // Require the use of === and !==
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: ['error'],

    // Disallow the use of alert, confirm, and prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // Warn about warning comments, e.g: todo, fixme
    // https://eslint.org/docs/2.0.0/rules/no-warning-comments
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      },
    ],

    // TODO: create logger function which uses "?debug=true" for logging
    // Allow console.log only in development as warning for debugging purposes
    // Allow warning and error logs also in production
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      {
        allow: ['error', 'warn'],
      },
    ],

    // Allow debugger with warning for development
    // https://eslint.org/docs/rules/no-debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Disallow else blocks after return statements in if statements
    // https://eslint.org/docs/latest/rules/no-else-return
    'no-else-return': 'error',

    // Disallow nested ternary for better readability
    // https://eslint.org/docs/latest/rules/no-nested-ternary
    'no-nested-ternary': 'error',

    // Disallow reassigning function parameters
    // https://eslint.org/docs/latest/rules/no-param-reassign
    'no-param-reassign': [
      'error',
      {
        props: true,
        /** Exception is for:
         * 1. 'acc' in reduce function
         * 2. 'ref' in React -> ref.current
         */
        ignorePropertyModificationsFor: ['acc', 'ref'],
      },
    ],

    // Enforce blank lines:
    // Before every return, case, default and try
    // After every const, let and var but not between each other
    // After every multiline block statement
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      // Always require blank lines after import
      { blankLine: 'always', prev: 'import', next: '*' },
      // Allow no or any empty lines between imports
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'export'] },
      { blankLine: 'always', prev: ['const', 'let', 'export'], next: '*' },
      // Allow no or any empty lines between variable declarations
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      // Always require blank lines before class declaration, if, do/while, switch, try, break
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try', 'break'],
      },
      // Always require blank lines after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
      // Always require blank lines after block statement
      {
        blankLine: 'always',
        prev: [
          'multiline-block-like',
          'multiline-expression',
          'multiline-const',
          'multiline-let',
          'multiline-var',
          'export',
        ],
        next: '*',
      },
      // Allow no or any empty lines between exports
      { blankLine: 'any', prev: ['export'], next: ['export'] },
    ],

    // Require destructuring from arrays and/or objects
    // https://eslint.org/docs/latest/rules/prefer-destructuring
    'prefer-destructuring': 'error',

    // Require template literals instead of string concatenation
    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',

    /**
     * Typescript
     */

    // Allow @ts-<directive> comments for development
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': true,
        // ignores next line
        'ts-ignore': 'allow-with-description',
        // ignores whole file
        'ts-nocheck': 'allow-with-description',
        'ts-check': true,
      },
    ],

    // Use consistent type definitions, prefer "type" over "interface"
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // Ensure that type imports are separated from modules
    // https://typescript-eslint.io/rules/consistent-type-imports/#:~:text=Enforce%20consistent%20usage%20of%20type%20imports.&text=Some%20problems%20reported%20by%20this,type%20system%2C%20not%20at%20runtime.
    '@typescript-eslint/consistent-type-imports': ['error'],

    // Typescript is good in inferring return types, so there is no need to specify
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Typescript is good in inferring return types, so there is no need to specify
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Enforces naming conventions for everything across the codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'error',
      // Enforce casing for variables
      {
        selector: 'variable',
        format: ['PascalCase', 'UPPER_CASE', 'snake_case'],
        // Allow "_" at the beginning of the variable name, e.g. for private or re-assigned variables, because of "no-param-reassign" rule
        leadingUnderscore: 'allow',
      },
      // Use camelCase for functions
      // Use PascalCase for React components
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      // class, interface, typeAlias, enum, typeParameter
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    // Disallow "any" type
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 'error',

    // Allow shadowing, since "const" and "let" are block scoped
    // https://github.com/typescript-eslint/typescript-eslint/blob/v4.26.1/packages/eslint-plugin/docs/rules/no-shadow.md
    '@typescript-eslint/no-shadow': ['off'],

    // Allow unused variables for development purposes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      { argsIgnorePattern: '^_' },
    ],

    // Sort keys in ascending order in types, interface
    // https://github.com/infctr/eslint-plugin-typescript-sort-keys
    'typescript-sort-keys/interface': ['error', 'asc', { caseSensitive: false }],

    // Sort keys in ascending order in enums
    // https://github.com/infctr/eslint-plugin-typescript-sort-keys/blob/master/docs/rules/string-enum.md
    'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: false }],

    /**
     * Import
     */

    'import/extensions': ['error', { json: 'always', pattern: { ssr: 'always' } }],

    // Ensures that there is no resolvable path back to this module via its dependencies.
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['warn'],

    // Disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Allow devDependencies for following files and folders
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.test.{ts,tsx}',
          '**/*.spec.{ts,tsx}',
          '**/__tests__/**',
          '**/__spec__/**',
          '**/jest.config.{js,ts}',
          '**/webpack.config.{js,ts}',
          '**/webpack.config.*.{js,ts}',
          '**/vite.config.{js,ts}',
        ],
      },
    ],

    // Do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Allow structured order of import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        groups: [['type'], ['builtin', 'external'], ['parent'], ['sibling', 'index']],
        'newlines-between': 'always',
      },
    ],

    // Allow using named exports as single export, preferred way of exports
    'import/prefer-default-export': 'off',

    // Sort destructured keys in alphabetical order
    // https://github.com/mthadley/eslint-plugin-sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      {
        caseSensitive: false, // ignore case in sorting
      },
    ],

    // Used for sorting within import braces { a, b, c }
    // https://eslint.org/docs/latest/rules/sort-imports
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true, // ignore sorting
        ignoreMemberSort: false, // force sorting of import order inside imports
        ignoreCase: true, // ignore case
      },
    ],
  },
};