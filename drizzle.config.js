import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:HMyU4gR7bPdF@ep-purple-pond-a5abr8r7.us-east-2.aws.neon.tech/mockprep-ai?sslmode=require",
  }
});
