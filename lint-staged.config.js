// Check https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration to see more config options.
const lintStagedConfig = {
  // Runs type-checking on TS and TSX files to catch errors early
  "**/*.ts?(x)": "npm run check-types",

  // Checks the formatting of the specified files to ensure consistent code style
  "**/*.{js,mjs,jsx,ts,tsx,json,css}": "npm run check-format",

  // Lints the specified files to enforce code quality and consistency
  "**/*.{js,mjs,jsx,ts,tsx}": "npm run check-lint",
};

export default lintStagedConfig;
1;
