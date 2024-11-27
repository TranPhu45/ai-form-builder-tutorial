// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./src/db/schema.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString:
//       process.env.DATABASE_URL ||
//       "postgres://postgres:postgres@localhost:5432/postgres",
//   },
// } satisfies Config;
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "postgresql://postgres.iterdvllnuymyxulwbyd:Phu.vt2654.%40%40%23%24@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres",
  },
} satisfies Config;
