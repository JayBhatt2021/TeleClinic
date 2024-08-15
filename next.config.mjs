import withBundleAnalyzer from "@next/bundle-analyzer";

// const jiti = createJiti(fileURLToPath(import.meta.url));

// jiti("./src/libs/Env");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["."],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["@electric-sql/pglite"],
  },
};

export default bundleAnalyzer(nextConfig);
