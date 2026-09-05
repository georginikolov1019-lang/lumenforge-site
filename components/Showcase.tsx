const frames = [
  { title: "Neon Alley · Episode 03", tag: "Thriller", gradient: "from-amber-glow/40 via-fuchsia-900/40 to-void" },
  { title: "Ashwood Manor", tag: "Period drama", gradient: "from-frost/30 via-slate-deep to-amber-dim/30" },
  { title: "Orbital Dawn", tag: "Sci-fi", gradient: "from-frost-dim/50 via-void to-amber-glow/20" },
  { title: "Salt & Silence", tag: "Documentary", gradient: "from-stone-600/40 via-slate-mist to-void" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-frost">Showcase</p>
            <h2 className="mt-3 font-display text-3xl text-stone-50 sm:text-4xl">Frames from the forge</h2>
            <p className="mt-3 max-w-lg text-stone-400">
              Mock gallery cards — cinematic gradients standing in for finished renders.
            </p>
          </div>
          <a href="#cta" className="text-sm text-amber-glow transition hover:text-amber-soft">
            Generate your first reel →
          </a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {frames.map((f) => (
            <figure key={f.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-deep">
              <div className={`relative aspect-video bg-gradient-to-br ${f.gradient} transition duration-500 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">
                  <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-stone-300">
                    {f.tag}
                  </span>
                  <figcaption className="mt-2 font-display text-lg text-stone-50">{f.title}</figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
