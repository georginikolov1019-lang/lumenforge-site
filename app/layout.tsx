import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "LumenForge — AI Long-Form Cinematic Video",
  description:
    "Forge cinematic long-form video with AI. Story, script, and stills become directed films with character continuity and Unreal-grade atmosphere.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="grain-overlay font-sans antialiased bg-void text-stone-100">{children}</body>
    </html>
  );
}
