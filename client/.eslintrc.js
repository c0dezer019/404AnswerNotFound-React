module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'array-element-newline': ['error', {
      ArrayExpression: 'consistent',
      ArrayPattern: { minItems: 20 },
    }],
    'arrow-parens': [
      0,
      'as-needed',
      { requireForBlockBody: true },
    ],
    'block-spacing': 2,
    camelcase: [
      'error', { properties: 'never' },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'import/newline-after-import': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': ['error', 119],
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-else-return': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-useless-escape': 0,
    'object-curly-newline': 0,
    'object-shorthand': 0,
    'operator-linebreak': 0,
    'prefer-const': 0,
    'prettier/prettier': 0,
    'template-curly-spacing': ['error', 'always'],
    'react/jsx-pascal-case': 2,
    'react/self-closing-comp': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-curly-spacing': 0,
    'react/no-array-index-key': 0,
  },
};
