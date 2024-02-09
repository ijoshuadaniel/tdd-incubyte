module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [
    {
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": [2, "always-multiline"],
    semi: "always",
    indent: ["error", 2],
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-else-return": "error",
    "no-floating-decimal": "error",
    "no-lonely-if": "error",
    "no-multi-spaces": "error",
    "no-useless-return": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
    "consistent-return": "error",
    "dot-notation": "error",
    "no-empty-function": "error",
    "no-param-reassign": "error",
    "no-undef-init": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    strict: ["error", "global"],
  },
};
