// Check https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration to see more config options.
const lintStagedConfig = {
  // Runs type-checking on TypeScript files
  "**/*.ts?(x)": "npm run check-types",

  // Checks the formatting of and lints staged files to ensure consistency
  "**/*.{js,ts,jsx,tsx,mdx,json}": [
    "npm run check-format",
    "npm run check-lint",
  ],
};

export default lintStagedConfig;
