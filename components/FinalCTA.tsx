"use client";
export default function FinalCTA() {
  return (
    <section id="cta" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-amber-glow/20 bg-gradient-to-br from-slate-deep via-void to-ink px-8 py-14 text-center shadow-[0_0_80px_rgba(245,166,35,0.12)] sm:px-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-amber-glow/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-frost/15 blur-3xl" />
          <h2 className="relative font-display text-3xl text-stone-50 sm:text-4xl lg:text-5xl">Your next film starts as light</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-stone-400">Join the LumenForge waitlist and be first to forge cinematic long-form video with AI that respects continuity.</p>
          <form className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()} action="#">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" name="email" type="email" required placeholder="you@studio.com" className="flex-1 rounded-full border border-white/15 bg-black/40 px-5 py-3 text-sm text-stone-100 placeholder:text-stone-600 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/30" />
            <button type="submit" className="rounded-full bg-gradient-to-r from-amber-glow to-amber-soft px-6 py-3 text-sm font-semibold text-void transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-glow">Start creating</button>
          </form>
          <p className="relative mt-4 text-xs text-stone-600">No spam. Early access invites only. Demo form — wire up later.</p>
        </div>
      </div>
    </section>
  );
}
