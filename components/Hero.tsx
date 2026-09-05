export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-64 max-w-3xl rounded-full bg-amber-glow/20 blur-3xl" />
      <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-frost-soft">
        AI · Long-form · Cinematic
      </p>
      <h1 className="glow-text max-w-4xl font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl sm:leading-[1.05]">
        Forge long-form video with{" "}
        <span className="bg-gradient-to-r from-amber-glow via-frost to-amber-soft bg-clip-text text-transparent">
          cinematic AI
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        LumenForge turns stories, scripts, and stills into directed long-form films — character
        continuity, Unreal-grade atmosphere, and edit-ready scenes in one dark studio.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#cta" className="rounded-full bg-gradient-to-r from-amber-glow to-amber-soft px-6 py-3 text-sm font-semibold text-zinc-950 shadow-glow transition hover:brightness-110">
          Start creating
        </a>
        <a href="#showcase" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/10">Watch demo</a>
      </div>
      <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/80 via-zinc-950 to-black p-1 shadow-glow">
        <div className="relative aspect-video overflow-hidden rounded-[1.35rem] bg-[#0a0b12]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.35),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.2),transparent_40%)]" />
          <div className="absolute inset-8 rounded-2xl border border-white/10 glass" />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-frost/80">Preview reel</p>
              <p className="text-lg font-medium text-white">Act I · Signal Awakening</p>
            </div>
            <span className="rounded-full bg-black/50 px-3 py-1 text-xs text-zinc-300">04:12 / 48:00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
