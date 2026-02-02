import { defineEventHandler } from 'file:///Users/mac/Desktop/siteweb/1xlite_17342.bar/node_modules/h3/dist/index.mjs';
import postgres from 'file:///Users/mac/Desktop/siteweb/1xlite_17342.bar/node_modules/postgres/src/index.js';

let sql;
function getDatabaseConnection() {
  if (!sql) {
    sql = postgres(process.env.POSTGRES_URL || {
      host: process.env.POSTGRES_HOST || "dpg-d60dc9h4tr6s73bbdr9g-a.frankfurt-postgres.render.com",
      port: process.env.POSTGRES_PORT || 5432,
      database: process.env.POSTGRES_DATABASE || "yakin",
      username: process.env.POSTGRES_USER || "yakin",
      password: process.env.POSTGRES_PASSWORD || "FldHcf75GTambWKRorCXdJ8lPwsKd2hO",
      ssl: "require"
    });
  }
  return sql;
}
async function testConnection() {
  try {
    const sql2 = getDatabaseConnection();
    const result = await sql2`SELECT NOW()`;
    console.log("Database connection successful:", result);
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

const testDb_get = defineEventHandler(async (event) => {
  try {
    const isConnected = await testConnection();
    if (isConnected) {
      return {
        status: "success",
        message: "Database connection established",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
    } else {
      return {
        status: "error",
        message: "Database connection failed",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
    }
  } catch (error) {
    return {
      status: "error",
      message: "Database test failed",
      error: error.message,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
});

export { testDb_get as default };
//# sourceMappingURL=test-db.get.mjs.map
