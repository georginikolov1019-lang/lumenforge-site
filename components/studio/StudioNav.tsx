"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function StudioNav({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-void/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/studio" className="flex items-center gap-2">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-amber-glow to-frost">
              <span className="h-2 w-2 rounded-full bg-void" />
            </span>
            <span className="font-display text-base tracking-tight text-stone-100">
              Lumen<span className="bg-gradient-to-r from-amber-glow to-frost bg-clip-text text-transparent">Forge</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-4 sm:flex">
            <Link
              href="/studio"
              className={`text-sm transition ${
                pathname === "/studio" ? "text-amber-glow" : "text-stone-400 hover:text-stone-100"
              }`}
            >
              Studio
            </Link>
            <Link href="/" className="text-sm text-stone-500 hover:text-stone-300">
              Marketing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden max-w-[180px] truncate text-xs text-stone-500 sm:inline" title={email}>
            {email}
          </span>
          <button
            type="button"
            onClick={logout}
            disabled={loggingOut}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-stone-300 transition hover:bg-white/5 disabled:opacity-50"
          >
            {loggingOut ? "…" : "Log out"}
          </button>
        </div>
      </div>
    </header>
  );
}
