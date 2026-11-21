import { getStore } from "@netlify/blobs";

// Jalan tiap jam: hapus room yang ditinggalkan > 10 menit (beserta chat-nya).
export default async () => {
  const store = getStore({ name: "rooms", consistency: "strong" });
  const { blobs } = await store.list();
  const now = Date.now();
  const keys = new Set(blobs.map((b) => b.key));
  for (const k of keys) {
    if (k.endsWith("-chat")) {
      if (!keys.has(k.slice(0, -5))) await store.delete(k); // chat yatim
      continue;
    }
    const r = await store.get(k, { type: "json" });
    if (!r || now - r.t > 10 * 60 * 1000) { await store.delete(k); await store.delete(k + "-chat"); }
  }
};

export const config = { schedule: "@hourly" };
