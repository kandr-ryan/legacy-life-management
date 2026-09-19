import { NextResponse } from "next/server";

type ContactBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isPlausibleEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please send the form again. The message could not be read." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Please share your name so Bobbie knows who to call back." },
      { status: 400 },
    );
  }

  if (!phone && !email) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please add a phone number or email so Bobbie can reach you.",
      },
      { status: 400 },
    );
  }

  if (email && !isPlausibleEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address does not look complete." },
      { status: 400 },
    );
  }

  if (!message) {
    return NextResponse.json(
      {
        ok: false,
        error: "A short note about what you need helps Bobbie prepare for the call.",
      },
      { status: 400 },
    );
  }

  // No live inbox yet — this validates the request and records it in server logs
  // until Firebase or email delivery is connected.
  console.info("[contact request]", {
    name,
    phone: phone || null,
    email: email || null,
    messageLength: message.length,
  });

  return NextResponse.json({ ok: true });
}
