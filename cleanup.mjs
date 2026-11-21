import { getStore } from "@netlify/blobs";

// Jalan tiap jam: hapus semua room yang sudah ditinggalkan > 10 menit.
export default async () => {
  const store = getStore({ name: "rooms", consistency: "strong" });
  const { blobs } = await store.list();
  const now = Date.now();
  for (const b of blobs) {
    const r = await store.get(b.key, { type: "json" });
    if (!r || now - r.t > 10 * 60 * 1000) await store.delete(b.key);
  }
};

export const config = { schedule: "@hourly" };
