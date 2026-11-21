
import { getStore } from "@netlify/blobs";

// Jalan tiap jam: hapus room yang ditinggalkan > 10 menit (beserta chat-nya).
export default async () => {
  const store = getStore({ name: "rooms", consistency: "strong" });
  const { blobs } = await store.list();
  const now = Date.now();
  const keys = new Set(blobs.map((b) => b.key));
  for (const k of keys) {
    const side = k.match(/^(.+)-(chat|sig[01])$/);
    if (side) { if (!keys.has(side[1])) await store.delete(k); continue; } // chat / sinyal voice yatim
    const r = await store.get(k, { type: "json" });
    if (!r || now - r.t > 10 * 60 * 1000) { for (const x of ["", "-chat", "-sig0", "-sig1"]) await store.delete(k + x); }
  }
};

export const config = { schedule: "@hourly" };
