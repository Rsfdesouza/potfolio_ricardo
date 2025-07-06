import { defineConfig } from "drizzle-kit";

// Only require DATABASE_URL if not using memory storage
if (!process.env.DATABASE_URL && process.env.USE_MEMORY_STORAGE !== "true") {
  throw new Error("DATABASE_URL is required when not using memory storage. Set USE_MEMORY_STORAGE=true for development without database.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://dummy:dummy@localhost:5432/dummy",
  },
});
