module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "max-len": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "no-console": "off",
    "no-new": "off",
    "no-undef": "off",
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "no-alert": "off",
  },
};
