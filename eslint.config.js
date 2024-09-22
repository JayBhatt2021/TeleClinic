import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import globals from "globals";

// Check https://eslint.org/docs/latest/use/configure/configuration-files to see more config options.
const esLintConfig = [
  {
    name: "teleclinic/recommended",
    files: ["**/*.{js,ts,jsx,tsx,mdx}"],
    ignores: [
      "**/.next",
      "**/node_modules",
      "**/out",
      "**/public",
      "**/next-env.d.ts",
      "**/package-lock.json",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "warn",
    },
    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
    },
    rules: {},
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  eslintPluginPrettierRecommended,
];

export default esLintConfig;
