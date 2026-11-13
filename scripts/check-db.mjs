import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
});

async function run() {
  console.log("Connecting to Turso...");
  console.log("URL defined:", Boolean(process.env.TURSO_DATABASE_URL));
  const tables = await client.execute("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'");
  console.log("Tables found:", tables.rows.map((r) => r.name));

  for (const row of tables.rows) {
    const tableName = String(row.name);
    const info = await client.execute(`PRAGMA table_info(${tableName})`);
    console.log(`\nTable [${tableName}] columns:`);
    console.log(info.rows.map((c) => `${c.name} (${c.type})`).join(", "));
    const count = await client.execute(`SELECT COUNT(*) as c FROM ${tableName}`);
    console.log(`Count in [${tableName}]:`, count.rows[0].c);

    const sample = await client.execute(`SELECT * FROM ${tableName} LIMIT 2`);
    console.log(`Sample from [${tableName}]:`, JSON.stringify(sample.rows, null, 2));
  }
}

run().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
