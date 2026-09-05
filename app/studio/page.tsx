import Link from "next/link";
import { studioFeatures } from "@/lib/studio-features";

export default function StudioDashboard() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-glow">Features studio</p>
        <h1 className="mt-2 font-display text-3xl text-stone-50 sm:text-4xl">
          Forge your next cut
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-stone-400">
          Product AI is not live yet — each card opens a working mock workspace with inputs,
          Generate, and a fake cinematic preview so you can feel the studio flow.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {studioFeatures.map((f) => (
          <Link
            key={f.slug}
            href={f.href}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${f.accent} bg-slate-deep/80 p-6 transition hover:border-amber-glow/40 hover:shadow-[0_0_40px_rgba(245,166,35,0.1)]`}
          >
            <h2 className="font-display text-xl text-stone-100 group-hover:text-amber-glow">
              {f.title}
            </h2>
            <p className="mt-2 text-sm text-stone-400">{f.blurb}</p>
            <span className="mt-6 inline-flex text-xs font-semibold uppercase tracking-wider text-frost-soft">
              Open →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
