export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-stone-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          <span className="font-display text-stone-300">
            Lumen<span className="text-amber-glow">Forge</span>
          </span>
          <span className="mx-2 text-stone-700">·</span>
          © {year} LumenForge. All rights reserved.
        </p>
        <nav className="flex gap-6" aria-label="Footer">
          <a href="#features" className="hover:text-stone-300">Features</a>
          <a href="#pricing" className="hover:text-stone-300">Pricing</a>
          <a href="#faq" className="hover:text-stone-300">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}
