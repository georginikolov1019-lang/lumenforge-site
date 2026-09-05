"use client";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="cta" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber-glow/20 bg-gradient-to-br from-slate-deep via-void to-ink px-8 py-14 text-center shadow-[0_0_80px_rgba(245,166,35,0.12)] sm:px-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-amber-glow/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-frost/15 blur-3xl" />
          <h2 className="relative font-display text-3xl text-stone-50 sm:text-4xl lg:text-5xl">Your next film starts as light</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-stone-400">
            Log in to the Features studio and try Story→Video, Characters, and long-form scaffolding — demo auth, mock AI.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login"
              className="rounded-full bg-gradient-to-r from-amber-glow to-amber-soft px-6 py-3 text-sm font-semibold text-void transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-glow"
            >
              Start creating
            </Link>
            <Link
              href="/signup"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10"
            >
              Sign up
            </Link>
          </div>
          <p className="relative mt-4 text-xs text-stone-600">Demo auth — any email + password, or demo@lumenforge.app / lumenforge.</p>
        </div>
      </div>
    </section>
  );
}
