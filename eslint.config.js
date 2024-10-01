import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import globals from "globals";

// Check https://eslint.org/docs/latest/use/configure/configuration-files to see more config options.
const esLintConfig = [
  {
    name: "teleclinic/recommended",
    files: ["**/*.ts", "**/*.tsx", "**/*.jsx"],
    ignores: [
      "**/.next/",
      "**/out/",
      "**/public/",
      "next-env.d.ts",
      "package-lock.json",
    ],
    languageOptions: {
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
