"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { DEMO_EMAIL, DEMO_PASSWORD } from "@/lib/session";

type Mode = "login" | "signup";

export default function AuthForm({
  mode,
  nextPath = "/studio",
}: {
  mode: Mode;
  nextPath?: string;
}) {
  const router = useRouter();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }
      router.push(nextPath.startsWith("/") ? nextPath : "/studio");
      router.refresh();
    } catch {
      setError("Network error — try again");
    } finally {
      setLoading(false);
    }
  }

  const isLogin = mode === "login";

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-6 rounded-2xl border border-amber-glow/30 bg-amber-glow/10 px-4 py-3 text-sm text-amber-soft">
        <p className="font-semibold text-amber-glow">Demo auth</p>
        <p className="mt-1 text-stone-300">
          No external identity provider. Accept any non-empty email + password, or use{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 text-frost-soft">
            {DEMO_EMAIL}
          </code>{" "}
          /{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 text-frost-soft">
            {DEMO_PASSWORD}
          </code>
          .
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-3xl border border-white/10 bg-slate-deep/80 p-8 shadow-[0_0_60px_rgba(245,166,35,0.08)] backdrop-blur"
      >
        <h1 className="font-display text-2xl text-stone-50">
          {isLogin ? "Sign in to Studio" : "Create a demo account"}
        </h1>
        <p className="mt-2 text-sm text-stone-400">
          {isLogin
            ? "Enter the Features studio and try mock AI workflows."
            : "Sign up instantly — credentials are demo-only, stored in a session cookie."}
        </p>

        <label className="mt-6 block text-xs uppercase tracking-wider text-stone-500">
          Email
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-600 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/30"
            placeholder="you@studio.com"
          />
        </label>

        <label className="mt-4 block text-xs uppercase tracking-wider text-stone-500">
          Password
          <input
            type="password"
            autoComplete={isLogin ? "current-password" : "new-password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-stone-100 placeholder:text-stone-600 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/30"
            placeholder="••••••••"
          />
        </label>

        {error && (
          <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-glow to-amber-soft px-6 py-3 text-sm font-semibold text-void transition hover:brightness-110 disabled:opacity-60"
        >
          {loading ? "Working…" : isLogin ? "Log in" : "Sign up"}
        </button>

        <p className="mt-6 text-center text-sm text-stone-500">
          {isLogin ? (
            <>
              No account?{" "}
              <Link href="/signup" className="text-frost-soft hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have a session?{" "}
              <Link href="/login" className="text-frost-soft hover:underline">
                Log in
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
