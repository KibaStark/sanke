module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "indent": ["error", 2],
    "import/no-unresolved": "off",
    "no-multi-spaces": 1,
    "no-trailing-spaces": 1,
    "key-spacing": 1,
    "no-empty-function": "off",
    "no-unescaped-entities": "off",
    "object-curly-spacing": ["error", "always"],
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "space-infix-ops": "error",
    "keyword-spacing": "error"
  },
};
