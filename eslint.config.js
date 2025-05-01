const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const reactPlugin = require("eslint-plugin-react");

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module"
    },
    plugins: {
      react: reactPlugin
    },
    rules: {
      indent: ["error", 2],
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-undef": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-console": "off",
      ...reactPlugin.configs.recommended.rules
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    ignores: ["node_modules/", "build/", ".next/", "public/"]
  }
];
