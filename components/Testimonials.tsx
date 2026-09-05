const quotes = [
  {
    quote:
      "I locked a six-minute cold open in an afternoon — characters stayed consistent from beat to beat.",
    name: "Mira Chen",
    role: "Independent director",
  },
  {
    quote:
      "The camera language finally feels directed. We ship weekly episodes without losing the look.",
    name: "Jonah Reyes",
    role: "Series showrunner",
  },
  {
    quote:
      "Voice, score, and continuity in one pass cut our polish cycle from days to hours.",
    name: "Aisha Okonkwo",
    role: "Creative producer",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 py-20 sm:py-28"
      aria-label="Creator testimonials"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-frost">
            Voices from the forge
          </p>
          <h2 className="mt-3 font-display text-3xl text-stone-50 sm:text-4xl">
            What creators are shipping
          </h2>
          <p className="mt-4 text-stone-400">
            Short notes from storytellers using LumenForge on real cuts.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 backdrop-blur-sm"
            >
              <p className="flex-1 text-sm leading-relaxed text-stone-300">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/5 pt-4">
                <cite className="not-italic">
                  <span className="block font-display text-sm text-stone-100">
                    {q.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-stone-500">
                    {q.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
