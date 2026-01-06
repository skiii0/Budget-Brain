import arcjet, { shield } from "@arcjet/next";
import { seedTransactions } from "@/actions/seed";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }), // enough for this route
  ],
});

export async function GET(req) {
  // 🚫 Disable seeding in production
  if (process.env.NODE_ENV === "production") {
    return new Response("Seeding disabled in production", { status: 403 });
  }

  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return new Response("Blocked", { status: 403 });
  }

  const result = await seedTransactions();
  return Response.json(result);
}
