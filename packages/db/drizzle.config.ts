import "dotenv/config";
import type { Config } from "drizzle-kit";
import serverConfig from "@hoarder/shared/config";

// const databaseURL = serverConfig.dataDir
//   ? `${serverConfig.dataDir}/db.db`
//   : "./db.db";

const databaseURL = "D:/AAAshizhengPracticeCode/current-project/hoarder/packages/db/db.db";

console.log('⚡databaseURL', databaseURL);

export default {
  dialect: "sqlite",
  schema: "./schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: databaseURL,
  },
} satisfies Config;
