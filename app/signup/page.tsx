import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Sign up — LumenForge",
  description: "Create a demo LumenForge studio session.",
};

export default function SignupPage() {
  return (
    <main className="relative min-h-screen px-4 pb-16 pt-10 sm:px-6">
      <div className="mx-auto mb-10 flex max-w-md items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-glow to-frost shadow-[0_0_24px_rgba(245,166,35,0.35)]">
            <span className="h-2.5 w-2.5 rounded-full bg-void" />
          </span>
          <span className="font-display text-lg tracking-tight text-stone-100">
            Lumen<span className="bg-gradient-to-r from-amber-glow to-frost bg-clip-text text-transparent">Forge</span>
          </span>
        </Link>
        <Link href="/" className="text-sm text-stone-500 hover:text-stone-300">
          ← Marketing
        </Link>
      </div>
      <AuthForm mode="signup" />
    </main>
  );
}
