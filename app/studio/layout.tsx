import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import StudioNav from "@/components/studio/StudioNav";

export const metadata = {
  title: "Studio — LumenForge",
  description: "LumenForge Features studio (demo).",
};

export default async function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-void">
      <StudioNav email={session.email} />
      <main className="px-4 py-10 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
