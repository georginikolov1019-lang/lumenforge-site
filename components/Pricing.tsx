const tiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    blurb: "Solo creators testing long-form ideas.",
    features: [
      "Up to 20 min / month",
      "720p & 1080p export",
      "2 character locks",
      "Community support",
    ],
    cta: "Start free trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    blurb: "Serious storytellers shipping weekly.",
    features: [
      "Up to 90 min / month",
      "4K export + stems",
      "Unlimited character locks",
      "Priority render queue",
      "Voice & score suite",
    ],
    cta: "Go Pro",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$349",
    period: "/mo",
    blurb: "Teams and boutique production houses.",
    features: [
      "Unlimited minutes*",
      "Shared workspaces",
      "Brand kits & review links",
      "Dedicated success partner",
      "Custom model tuning",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 border-y border-white/5 bg-ink py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-glow">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl text-stone-50 sm:text-4xl">
            Plans that scale with the story
          </h2>
          <p className="mt-4 text-sm text-stone-400">
            Start free, upgrade when the cut demands more minutes and polish.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm ${
                t.highlighted
                  ? "border-amber-glow/50 bg-gradient-to-b from-amber-glow/10 to-void/90 shadow-[0_0_60px_rgba(245,166,35,0.12)]"
                  : "border-white/10 bg-void/60"
              }`}
            >
              {t.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-glow px-3 py-0.5 text-xs font-semibold text-void">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl text-stone-100">{t.name}</h3>
              <p className="mt-2 text-sm text-stone-400">{t.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl text-stone-50">
                  {t.price}
                </span>
                <span className="text-stone-500">{t.period}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {t.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-stone-300"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-glow"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  t.highlighted
                    ? "bg-amber-glow text-void hover:brightness-110 focus-visible:outline-amber-glow"
                    : "border border-white/15 text-stone-100 hover:bg-white/5 focus-visible:outline-frost"
                }`}
              >
                {t.cta}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-stone-600">
          *Fair-use caps apply on Studio during early access.
        </p>
      </div>
    </section>
  );
}
