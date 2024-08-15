import type { Config } from "drizzle-kit";

/** @type {import('drizzle-kit').Config} */
const config: Config = {
  out: "./migrations",
  schema: "./src/models/Schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  verbose: true,
  strict: true,
};

export default config;
