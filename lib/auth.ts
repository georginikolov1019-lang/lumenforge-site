import { cookies } from "next/headers";
import {
  SESSION_COOKIE,
  encodeSession,
  parseSessionCookie,
  type SessionPayload,
} from "@/lib/session";

export {
  SESSION_COOKIE,
  DEMO_EMAIL,
  DEMO_PASSWORD,
  isValidCredentials,
  parseSessionCookie,
  type SessionPayload,
} from "@/lib/session";

export async function createSession(email: string): Promise<void> {
  const jar = await cookies();
  const payload: SessionPayload = {
    email: email.trim().toLowerCase(),
    createdAt: Date.now(),
  };
  jar.set(SESSION_COOKIE, encodeSession(payload), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession(): Promise<void> {
  const jar = await cookies();
  jar.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function getSession(): Promise<SessionPayload | null> {
  const jar = await cookies();
  return parseSessionCookie(jar.get(SESSION_COOKIE)?.value);
}
