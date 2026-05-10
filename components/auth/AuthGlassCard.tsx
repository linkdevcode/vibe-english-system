import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AuthGlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function AuthGlassCard({ children, className }: AuthGlassCardProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[420px]", className)}>
      <div className="rounded-[1.75rem] border border-border/60 bg-card/80 p-8 shadow-2xl shadow-primary/8 backdrop-blur-xl transition-colors duration-layout dark:border-border/40 dark:bg-card/50 dark:shadow-black/40 sm:p-10">
        {children}
      </div>
    </div>
  );
}
