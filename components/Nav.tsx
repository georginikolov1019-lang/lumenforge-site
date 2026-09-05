"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-void/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2" aria-label="LumenForge home">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-glow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-void" />
          </span>
          <span className="font-display text-lg tracking-tight text-stone-100">
            Lumen<span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">Forge</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-stone-400 transition hover:text-stone-100">
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-void shadow-glow-sm transition hover:brightness-110"
          >
            Start creating
          </a>
        </div>
        <button
          type="button"
          className="inline-flex rounded-md p-2 text-stone-300 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-void/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-stone-300 hover:bg-white/5" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#cta" className="rounded-full bg-indigo-500 px-4 py-2.5 text-center text-sm font-semibold text-white" onClick={() => setOpen(false)}>
              Start creating
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
