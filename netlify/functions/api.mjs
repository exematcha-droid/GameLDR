import { getStore } from "@netlify/blobs";

const TTL = 10 * 60 * 1000; // room tanpa aktivitas 10 menit = dihapus
const J = (o, s = 200) => Response.json(o, { status: s });
const hash = async (s) =>
  [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)))]
    .map((b) => b.toString(16).padStart(2, "0")).join("");

const wipe = async (s, room) => { for (const x of ["", "-chat", "-sig0", "-sig1"]) await s.delete(room + x); }; // hapus room + chat + sinyal voice

export default async (req) => {
  const store = getStore({ name: "rooms", consistency: "strong" });
  const u = new URL(req.url);
  const room = (u.searchParams.get("room") || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  const act = u.searchParams.get("act") || "";
  let pw = "";
  try { pw = decodeURIComponent(req.headers.get("x-pw") || ""); } catch {}
  if (!room) return J({ e: "room" }, 400);

  const now = Date.now();
  let r = await store.get(room, { type: "json" });
  if (r && now - r.t > TTL) { await wipe(store, room); r = null; }
  const h = await hash(room + ":" + pw);

  if (act === "create") {
    if (r) return J({ e: "exists" }, 409);
    if (pw.length < 3) return J({ e: "pw" }, 400);
    await store.setJSON(room, { h, t: now, s: await req.json() });
    return J({ ok: 1 });
  }
  if (!r) return J({ e: "none" }, 404);
  if (r.h !== h) return J({ e: "pw" }, 403);

  if (act === "chat") { // chat disimpan di key terpisah supaya tidak bentrok dengan state game
    const { m } = await req.json();
    const c = (await store.get(room + "-chat", { type: "json" })) || [];
    c.push({ s: m.s === 1 ? 1 : 0, n: String(m.n || "").slice(0, 14), a: +m.a || 0, t: String(m.t || "").slice(0, 120) });
    await store.setJSON(room + "-chat", c.slice(-40));
    return J({ ok: 1 });
  }
  if (act === "sig") { // sinyal WebRTC untuk voice chat: tiap slot menulis ke key-nya sendiri, jadi tidak bentrok
    const k = room + "-sig" + (u.searchParams.get("slot") === "1" ? 1 : 0);
    if (req.method === "POST") { const l = await req.json(); await store.setJSON(k, Array.isArray(l) ? l.slice(-40) : []); return J({ ok: 1 }); }
    return J((await store.get(k, { type: "json" })) || []);
  }
  if (act === "ping") { r.t = now; await store.setJSON(room, r); return J({ ok: 1 }); }
  if (act === "leave") {
    const i = +u.searchParams.get("slot"), s = r.s;
    if (s.pl && (i === 0 || i === 1)) s.pl[i] = null;
    if (!s.pl || (!s.pl[0] && !s.pl[1])) { await wipe(store, room); return J({ ok: 1 }); } // kosong = hapus
    s.g = "menu"; s.q = null; s.win = null; s.v++;
    r.s = s; r.t = now;
    await store.setJSON(room, r);
    return J({ ok: 1 });
  }
  if (req.method === "POST") { const b = await req.json(); delete b.chat; r.s = b; r.t = now; await store.setJSON(room, r); return J({ ok: 1 }); }
  const chat = (await store.get(room + "-chat", { type: "json" })) || [];
  return J({ ...r.s, chat });
};

export const config = { path: "/api" };
