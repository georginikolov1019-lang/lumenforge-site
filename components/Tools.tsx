const tools = [
  { title: "Story to Video", blurb: "Drop a narrative outline. Get a multi-scene cut with pacing and mood.", accent: "from-indigo-500/30 to-transparent" },
  { title: "Text to Video", blurb: "Plain prose becomes cinematic sequences with camera language baked in.", accent: "from-cyan-500/30 to-transparent" },
  { title: "Script to Video", blurb: "Screenplay format in, locked shots and dialogue-ready scenes out.", accent: "from-violet-500/30 to-transparent" },
  { title: "Image to Video", blurb: "Still frames expand into moving masters with depth and parallax.", accent: "from-sky-500/30 to-transparent" },
  { title: "Character Forge", blurb: "Lock faces and wardrobe across an entire long-form arc.", accent: "from-fuchsia-500/30 to-transparent" },
  { title: "Scene Bridge", blurb: "Smart transitions that feel directed, not templated.", accent: "from-blue-500/30 to-transparent" },
];

export default function Tools() {
  return (
    <section id="tools" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Creation tools</h2>
      <p className="mt-3 max-w-2xl text-zinc-400">Pick an entry point. Every path lands in the same forge.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <article key={tool.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40 hover:bg-white/[0.05]">
            <div className={"pointer-events-none absolute inset-0 bg-gradient-to-br " + tool.accent + " opacity-60"} />
            <h3 className="relative text-lg font-medium text-white">{tool.title}</h3>
            <p className="relative mt-2 text-sm text-zinc-400">{tool.blurb}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
