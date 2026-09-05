const studios = ["Northlight Films","Aether Stage","Framewright","Velvet Reel","Obsidian Cut","Nova Narrative"];
export default function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-ink/80 py-10" aria-label="Demo studio partners">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-stone-500">Trusted by creators · demo logos</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {studios.map((name) => (
            <li key={name} className="font-display text-sm tracking-wide text-stone-600 transition hover:text-stone-400 sm:text-base">{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
