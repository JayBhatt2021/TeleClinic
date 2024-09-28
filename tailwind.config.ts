import type { Config } from "tailwindcss";

// See https://tailwindcss.com/docs/configuration#using-esm-or-type-script for more guildlines.
const tailwindConfig: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
