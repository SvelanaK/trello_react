module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    semi: ["error", "always"],
    "@typescript-eslint/semi": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/member-delimiter-style": "off",
  },
};
