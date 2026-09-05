import { NextResponse } from "next/server";
import { createSession } from "@/lib/auth";
import { isValidCredentials } from "@/lib/session";

export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!isValidCredentials(email, password)) {
    return NextResponse.json(
      { error: "Enter any non-empty email and password (demo auth)." },
      { status: 400 },
    );
  }

  await createSession(email);
  return NextResponse.json({ ok: true });
}
