module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  env: {
    node: true,
    mocha: true,
    es2022: true,
  },
  plugins: ['import', 'mocha', 'promise'],
  globals: {
    chai: true,
    should: true,
  },
  rules: {
    'no-console': 2,
    semi: [2, 'always'],
    radix: [2, 'always'],
    'dot-notation': 2,
    eqeqeq: [2, 'smart'],
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': 0,
    'no-empty': 0,
    'object-shorthand': 2,
    'arrow-parens': [1, 'always'],
    'arrow-body-style': [1, 'as-needed'],
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/no-duplicates': 2,
    'mocha/no-exclusive-tests': 2,
    'mocha/no-mocha-arrows': 2,
    'promise/no-return-wrap': 1,
    'promise/param-names': 1,
    'promise/catch-or-return': 1,
    'promise/no-native': 2,
    'promise/prefer-await-to-then': 1,
    'promise/prefer-await-to-callbacks': 1,
    'require-await': 2,
    'no-var': 2,
    curly: [2, 'all'],

    // enforce spacing
    'arrow-spacing': 2,
    'keyword-spacing': 2,
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    'array-bracket-spacing': 2,
    'no-trailing-spaces': 2,
    'no-whitespace-before-property': 2,
    'space-in-parens': [2, 'never'],
    'space-before-blocks': [2, 'always'],
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    'space-infix-ops': 2,
    'key-spacing': [
      2,
      {
        mode: 'strict',
        beforeColon: false,
        afterColon: true,
      },
    ],
    'no-multi-spaces': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'no-buffer-constructor': 1,
    'require-atomic-updates': 0,
    'no-prototype-builtins': 1,
    'no-redeclare': 1,
  },
  overrides: [
    /**
     * This disables the `import` plugin from trying to resolve `.test-d.ts` files,
     * which have a weird resolution strategy.
     */
    {files: '*.test-d.ts', rules: {'import/no-unresolved': 'off'}},
  ],
};
