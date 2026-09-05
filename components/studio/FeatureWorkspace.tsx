"use client";

import { FormEvent, useEffect, useState } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "textarea" | "select" | "file";
  placeholder?: string;
  options?: string[];
  rows?: number;
};

type Phase = "idle" | "running" | "done";

const STAGES = [
  "Queued on cinematic render farm…",
  "Parsing creative brief…",
  "Locking character continuity…",
  "Composing camera & lighting…",
  "Synthesizing mock frames…",
  "Muxing preview reel…",
];

export default function FeatureWorkspace({
  title,
  blurb,
  fields,
  resultTitle = "Mock result",
  resultHint,
}: {
  title: string;
  blurb: string;
  fields: Field[];
  resultTitle?: string;
  resultHint?: string;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(STAGES[0]!);
  const [summary, setSummary] = useState<string>("");
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""])),
  );

  useEffect(() => {
    if (phase !== "running") return;
    setProgress(0);
    let tick = 0;
    const id = setInterval(() => {
      tick += 1;
      const pct = Math.min(100, tick * 8);
      setProgress(pct);
      setStage(STAGES[Math.min(STAGES.length - 1, Math.floor(tick / 2))]!);
      if (pct >= 100) {
        clearInterval(id);
        setPhase("done");
      }
    }, 280);
    return () => clearInterval(id);
  }, [phase]);

  function onGenerate(e: FormEvent) {
    e.preventDefault();
    const filled = fields
      .map((f) => {
        const v = values[f.name]?.trim();
        if (!v) return null;
        return `${f.label}: ${v.length > 80 ? v.slice(0, 80) + "…" : v}`;
      })
      .filter(Boolean);
    setSummary(filled.join(" · ") || "Empty brief — using house style defaults");
    setPhase("running");
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-glow">Demo feature</p>
        <h1 className="mt-2 font-display text-3xl text-stone-50">{title}</h1>
        <p className="mt-3 text-sm text-stone-400">{blurb}</p>
      </div>

      <form
        onSubmit={onGenerate}
        className="space-y-5 rounded-3xl border border-white/10 bg-slate-deep/70 p-6 backdrop-blur sm:p-8"
      >
        {fields.map((field) => (
          <label key={field.name} className="block text-xs uppercase tracking-wider text-stone-500">
            {field.label}
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                rows={field.rows ?? 4}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm normal-case tracking-normal text-stone-100 placeholder:text-stone-600 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/30"
              />
            ) : field.type === "select" ? (
              <select
                name={field.name}
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm normal-case tracking-normal text-stone-100 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/30"
              >
                <option value="">Select…</option>
                {(field.options ?? []).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "file" ? (
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setValues((v) => ({
                    ...v,
                    [field.name]: e.target.files?.[0]?.name ?? "",
                  }))
                }
                className="mt-2 block w-full text-sm normal-case tracking-normal text-stone-300 file:mr-4 file:rounded-full file:border-0 file:bg-amber-glow/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-amber-glow"
              />
            ) : (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm normal-case tracking-normal text-stone-100 placeholder:text-stone-600 focus:border-amber-glow/50 focus:outline-none focus:ring-2 focus:ring-amber-glow/30"
              />
            )}
          </label>
        ))}

        <button
          type="submit"
          disabled={phase === "running"}
          className="rounded-full bg-gradient-to-r from-amber-glow to-amber-soft px-6 py-3 text-sm font-semibold text-void transition hover:brightness-110 disabled:opacity-60"
        >
          {phase === "running" ? "Generating…" : "Generate"}
        </button>
      </form>

      {(phase === "running" || phase === "done") && (
        <div className="mt-6 rounded-3xl border border-white/10 bg-ink/80 p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-stone-200">
              {phase === "running" ? stage : resultTitle}
            </p>
            <span className="text-xs text-stone-500">{progress}%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-glow to-frost transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {phase === "done" && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/80 via-zinc-950 to-black">
              <div className="relative aspect-video">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(245,166,35,0.35),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(110,193,255,0.25),transparent_40%)]" />
                <div className="absolute inset-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-widest text-frost/80">Mock preview</p>
                  <p className="mt-1 text-lg font-medium text-white">{title}</p>
                  <p className="mt-2 line-clamp-2 text-xs text-stone-400">{summary}</p>
                </div>
              </div>
              <p className="border-t border-white/10 px-4 py-3 text-xs text-stone-500">
                {resultHint ??
                  "This is a demo result — no real video was generated. Product AI pipelines are not wired yet."}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
