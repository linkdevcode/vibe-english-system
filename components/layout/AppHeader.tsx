import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function AppHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/50",
        "bg-background/85 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md",
        "transition-colors duration-layout",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          VibeEnglish
        </Link>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Button href="/learning" variant="ghost" size="sm" className="rounded-xl">
            Học
          </Button>
          <Button href="/auth/login" variant="ghost" size="sm" className="rounded-xl">
            Đăng nhập
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
