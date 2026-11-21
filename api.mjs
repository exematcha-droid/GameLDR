import { getStore } from "@netlify/blobs";

// Menyimpan state game per room (kode 4-8 huruf). GET = ambil, POST = simpan.
export default async (req) => {
  const store = getStore({ name: "rooms", consistency: "strong" });
  const u = new URL(req.url);
  const room = (u.searchParams.get("room") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  if (!room) return new Response("room kosong", { status: 400 });

  if (req.method === "POST") {
    const body = await req.json();
    await store.setJSON(room, body);
    return Response.json({ ok: true });
  }
  const data = await store.get(room, { type: "json" });
  return Response.json(data || null);
};

export const config = { path: "/api" };
