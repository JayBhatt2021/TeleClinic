// Check https://prettier.io/docs/en/options to see more config options and https://prettier.io/docs/en/plugins to see
// more plugins.

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const prettierConfig = {
  experimentalTernaries: true,
  printWidth: 120,
  quoteProps: "consistent",
  proseWrap: "always",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default prettierConfig;
