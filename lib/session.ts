export const SESSION_COOKIE = "lf_session";
export const DEMO_EMAIL = "demo@lumenforge.app";
export const DEMO_PASSWORD = "lumenforge";

export type SessionPayload = {
  email: string;
  createdAt: number;
};

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]!);
  const b64 = btoa(binary);
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string): string {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export function encodeSession(payload: SessionPayload): string {
  return toBase64Url(JSON.stringify(payload));
}

export function decodeSession(value: string): SessionPayload | null {
  try {
    const data = JSON.parse(fromBase64Url(value)) as SessionPayload;
    if (!data?.email || typeof data.email !== "string") return null;
    if (typeof data.createdAt !== "number") return null;
    return data;
  } catch {
    return null;
  }
}

export function parseSessionCookie(raw: string | undefined): SessionPayload | null {
  if (!raw) return null;
  return decodeSession(raw);
}

export function isValidCredentials(email: string, password: string): boolean {
  return email.trim().length > 0 && password.length > 0;
}
