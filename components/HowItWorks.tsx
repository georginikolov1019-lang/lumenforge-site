const steps = [
  { n: "01", title: "Write or import", body: "Paste a script, outline beats, or start from a short creative brief." },
  { n: "02", title: "Direct the look", body: "Set era, lens language, lighting, and character references. Lock continuity." },
  { n: "03", title: "Generate the reel", body: "LumenForge renders scenes with camera craft and audio beds in sequence." },
  { n: "04", title: "Refine and export", body: "Tweak shots, extend arcs, then deliver a polished master for any platform." },
];
export default function HowItWorks() {
  return (
    <section id="product" className="scroll-mt-24 border-y border-white/5 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-glow">How it works</p>
          <h2 className="mt-3 font-display text-3xl text-stone-50 sm:text-4xl">From blank page to premiere</h2>
        </div>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-white/10 bg-void/60 p-6">
              <span className="font-display text-3xl text-amber-dim/80">{s.n}</span>
              <h3 className="mt-3 text-lg font-medium text-stone-100">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
