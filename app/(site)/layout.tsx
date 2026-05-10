import { AppHeader } from "@/components/layout/AppHeader";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col">
      <AppHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
