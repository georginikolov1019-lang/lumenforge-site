"use client";

const faqs = [
  { q: "How long can a LumenForge project be?", a: "Pro plans target multi-scene arcs up to roughly 90 minutes of generated footage per month. Continuity tools are designed for episode-length storytelling." },
  { q: "Do I need Unreal Engine installed?", a: "No. LumenForge runs in the cloud with an Unreal-inspired look pipeline. You direct in the browser." },
  { q: "Can I keep characters consistent across episodes?", a: "Yes. Character locks store appearance, wardrobe, and voice so sequels stay coherent." },
  { q: "What formats can I export?", a: "H.264/H.265 masters, ProRes on Studio, plus optional audio stems and shot manifests." },
  { q: "Is commercial use allowed?", a: "Yes on paid plans. Review the license for early-access terms." },
  { q: "When does public beta open?", a: "Creators are onboarded in waves. Join the waitlist via Start creating." },
];
export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-frost">FAQ</p>
          <h2 className="mt-3 font-display text-3xl text-stone-50 sm:text-4xl">Answers before the first take</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="faq-details group rounded-xl border border-white/10 bg-white/[0.03] px-5 py-1 open:border-amber-glow/30 open:bg-amber-glow/5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-glow">
                <span className="font-medium">{item.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-stone-400 transition group-open:rotate-45 group-open:border-amber-glow/40 group-open:text-amber-glow">+</span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-stone-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
