import { createClient, type Client } from "@libsql/client";

const isServer = typeof window === "undefined";
const url = process.env.TURSO_DATABASE_URL || "";
const authToken = process.env.TURSO_AUTH_TOKEN || "";

/**
 * Turso Database Client (Hanya berjalan di Server-side).
 * Di client/browser, nilai `turso` adalah null untuk keamanan credential
 * dan menghindari pemanggilan fungsi Node.js di browser.
 */
export const turso: Client | null =
  isServer && url
    ? createClient({
        url,
        authToken,
      })
    : null;
