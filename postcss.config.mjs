/** @type {import('postcss-load-config').Config} */
const postCssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};

export default postCssConfig;
