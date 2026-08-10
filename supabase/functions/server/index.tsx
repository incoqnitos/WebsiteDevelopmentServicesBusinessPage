import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();
const ADMIN_PASSWORD = Deno.env.get("ADMIN_PASSWORD") || "mitai2024admin";

app.use('*', logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check
app.get("/make-server-d0a1053e/health", (c) => c.json({ status: "ok" }));

// ── Admin auth ──────────────────────────────────────────────────────────────
app.post("/make-server-d0a1053e/admin/login", async (c) => {
  try {
    const { password } = await c.req.json();
    if (password === ADMIN_PASSWORD) {
      return c.json({ success: true, token: btoa(`admin:${ADMIN_PASSWORD}:${Date.now()}`) });
    }
    return c.json({ success: false, error: "Invalid password" }, 401);
  } catch (e) {
    return c.json({ error: `Login error: ${e}` }, 500);
  }
});

function verifyAdmin(c: any): boolean {
  const auth = c.req.header("Authorization");
  if (!auth) return false;
  try {
    const decoded = atob(auth.replace("Bearer ", ""));
    return decoded.startsWith(`admin:${ADMIN_PASSWORD}:`);
  } catch {
    return false;
  }
}

// ── Messages ────────────────────────────────────────────────────────────────
app.post("/make-server-d0a1053e/messages", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, subject, message } = body;
    if (!name || !email || !message) {
      return c.json({ error: "Name, email and message are required" }, 400);
    }
    const id = `msg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const entry = { id, name, email, phone: phone || "", subject: subject || "", message, status: "unread", createdAt: new Date().toISOString() };
    await kv.set(id, entry);
    return c.json({ success: true, id });
  } catch (e) {
    return c.json({ error: `Failed to save message: ${e}` }, 500);
  }
});

app.get("/make-server-d0a1053e/messages", async (c) => {
  if (!verifyAdmin(c)) return c.json({ error: "Unauthorized" }, 401);
  try {
    const messages = await kv.getByPrefix("msg_");
    messages.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return c.json(messages);
  } catch (e) {
    return c.json({ error: `Failed to fetch messages: ${e}` }, 500);
  }
});

app.put("/make-server-d0a1053e/messages/:id/status", async (c) => {
  if (!verifyAdmin(c)) return c.json({ error: "Unauthorized" }, 401);
  try {
    const id = c.req.param("id");
    const { status } = await c.req.json();
    const msg = await kv.get(id);
    if (!msg) return c.json({ error: "Message not found" }, 404);
    await kv.set(id, { ...msg, status });
    return c.json({ success: true });
  } catch (e) {
    return c.json({ error: `Failed to update message: ${e}` }, 500);
  }
});

app.delete("/make-server-d0a1053e/messages/:id", async (c) => {
  if (!verifyAdmin(c)) return c.json({ error: "Unauthorized" }, 401);
  try {
    const id = c.req.param("id");
    await kv.del(id);
    return c.json({ success: true });
  } catch (e) {
    return c.json({ error: `Failed to delete message: ${e}` }, 500);
  }
});

// ── Bookings ────────────────────────────────────────────────────────────────
app.post("/make-server-d0a1053e/bookings", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, service, date, time, notes } = body;
    if (!name || !email || !service || !date || !time) {
      return c.json({ error: "Name, email, service, date and time are required" }, 400);
    }
    const id = `bkg_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const entry = { id, name, email, phone: phone || "", service, date, time, notes: notes || "", status: "pending", createdAt: new Date().toISOString() };
    await kv.set(id, entry);
    return c.json({ success: true, id });
  } catch (e) {
    return c.json({ error: `Failed to save booking: ${e}` }, 500);
  }
});

app.get("/make-server-d0a1053e/bookings", async (c) => {
  if (!verifyAdmin(c)) return c.json({ error: "Unauthorized" }, 401);
  try {
    const bookings = await kv.getByPrefix("bkg_");
    bookings.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return c.json(bookings);
  } catch (e) {
    return c.json({ error: `Failed to fetch bookings: ${e}` }, 500);
  }
});

app.put("/make-server-d0a1053e/bookings/:id/status", async (c) => {
  if (!verifyAdmin(c)) return c.json({ error: "Unauthorized" }, 401);
  try {
    const id = c.req.param("id");
    const { status } = await c.req.json();
    const bkg = await kv.get(id);
    if (!bkg) return c.json({ error: "Booking not found" }, 404);
    await kv.set(id, { ...bkg, status });
    return c.json({ success: true });
  } catch (e) {
    return c.json({ error: `Failed to update booking: ${e}` }, 500);
  }
});

app.delete("/make-server-d0a1053e/bookings/:id", async (c) => {
  if (!verifyAdmin(c)) return c.json({ error: "Unauthorized" }, 401);
  try {
    const id = c.req.param("id");
    await kv.del(id);
    return c.json({ success: true });
  } catch (e) {
    return c.json({ error: `Failed to delete booking: ${e}` }, 500);
  }
});

Deno.serve(app.fetch);
