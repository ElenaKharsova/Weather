module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
	quotes: [2, "double", { avoidEscape: true }],
    'max-len': [
      'error',
      {
        ignoreComments: true,
      },
    ],
	"comma-dangle": "off",
    'import/prefer-default-export': 'off',
  },
};
