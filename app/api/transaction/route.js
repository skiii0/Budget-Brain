import arcjet, { shield } from "@arcjet/next";
import { prisma } from "@/lib/db";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
  ],
});

export async function POST(req) {
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return new Response("Blocked", { status: 403 });
  }

  const body = await req.json();

  const transaction = await prisma.transaction.create({
    data: body,
  });

  return Response.json(transaction);
}
