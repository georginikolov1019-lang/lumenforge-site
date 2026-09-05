const studios = [
  "Northlight Films",
  "Aether Stage",
  "Framewright",
  "Velvet Reel",
  "Obsidian Cut",
  "Nova Narrative",
];

const stats = [
  { value: "12k+", label: "Creators forging" },
  { value: "480k", label: "Minutes rendered" },
  { value: "2.1M", label: "Scenes locked" },
  { value: "98%", label: "Continuity score" },
];

export default function SocialProof() {
  return (
    <section
      className="border-y border-white/5 bg-ink/80 py-12 sm:py-14"
      aria-label="Social proof"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-void/50 px-4 py-5 text-center backdrop-blur-sm"
            >
              <p className="font-display text-2xl text-amber-glow sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-stone-500">
          Trusted by indie studios &amp; story teams
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {studios.map((name) => (
            <li
              key={name}
              className="font-display text-sm tracking-wide text-stone-600 transition hover:text-stone-400 sm:text-base"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
