const features = [
  { title: "Script-to-video", body: "Drop a treatment or full script. LumenForge structures scenes, pacing, and shot lists automatically.", path: "M4 6h16M4 12h10M4 18h14" },
  { title: "Cinematic camera moves", body: "Dollies, cranes, and motivated pans that feel directed — not random generative jitter.", path: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { title: "Long-form continuity", body: "Characters, wardrobe, lighting, and locations stay consistent across multi-minute arcs.", path: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Unreal-quality look", body: "Volumetric light, filmic contrast, and material detail tuned for premium cinematic output.", path: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { title: "Voice and music", body: "Generate dialogue performances and score beds that lock to your edit timeline.", path: "M9 19V6l12-2v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" },
  { title: "Export anywhere", body: "Deliver masters for YouTube, festivals, or social — with clean timelines and stems.", path: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-frost">Capabilities</p>
          <h2 className="mt-3 font-display text-3xl text-stone-50 sm:text-4xl">Built for directors, not demos</h2>
          <p className="mt-4 text-stone-400">Every control is tuned for narrative length — coherence over clip roulette.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition hover:border-amber-glow/30 hover:shadow-[0_0_40px_rgba(245,166,35,0.08)]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-void text-amber-glow transition group-hover:border-amber-glow/40">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.path} />
                </svg>
              </div>
              <h3 className="font-display text-lg text-stone-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
