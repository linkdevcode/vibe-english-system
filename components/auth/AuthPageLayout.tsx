import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AuthPageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function AuthPageLayout({ children, className }: AuthPageLayoutProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-background text-foreground transition-colors duration-layout",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-primary/18 blur-3xl dark:bg-primary/12" />
        <div className="absolute -bottom-32 -right-32 h-[22rem] w-[22rem] rounded-full bg-accent/14 blur-3xl dark:bg-accent/10" />
        <div className="absolute left-1/2 top-[20%] h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/12 blur-3xl dark:bg-violet-400/8" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-lg flex-col px-4 pb-12 pt-6 sm:px-6">
        <header className="shrink-0">
          <Button
            href="/"
            variant="ghost"
            size="sm"
            className="-ml-2 gap-2 rounded-2xl text-muted-foreground transition-colors duration-layout hover:bg-muted/80 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Trang chủ
          </Button>
        </header>

        <div className="flex flex-1 flex-col justify-center py-10">{children}</div>
      </div>
    </div>
  );
}
