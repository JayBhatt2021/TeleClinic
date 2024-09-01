import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7856ff",
        "dark-fill-2": "hsla(0,0%,100%,.14)",
      },
    },
  },
  plugins: [],
};

export default config;
