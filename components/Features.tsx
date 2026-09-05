const features = [
  { title: "Character continuity", body: "Keep the same protagonist across dozens of shots — wardrobe, face, and vibe stay consistent." },
  { title: "Long-form ready", body: "Built for arcs up to about 50 minutes: chapters, acts, and recurring motifs without losing the thread." },
  { title: "Cinematic transitions", body: "Match cuts, dissolves, and motivated camera moves that read like a real edit bay." },
  { title: "Director templates", body: "Genre packs for thriller, fantasy, docu-drama, and game-cinematic trailers." },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white">Built for the long cut</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="glass rounded-2xl p-6">
            <h3 className="text-lg font-medium text-indigo-200">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
