"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (theme !== "dark" && theme !== "light") {
      setTheme("light");
    }
  }, [mounted, theme, setTheme]);

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div className="h-7 w-[5.125rem] rounded-full bg-muted/90" aria-hidden />
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Đổi sang giao diện sáng" : "Đổi sang giao diện tối"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "relative h-7 w-14 shrink-0 rounded-full border transition-colors duration-layout ease-soft",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          isDark
            ? "border-primary/40 bg-primary/20"
            : "border-border/80 bg-muted/90 dark:bg-muted/60",
        )}
      >
        <span
          className={cn(
            "absolute left-[3px] top-[3px] flex h-[22px] w-[22px] items-center justify-center rounded-full",
            "bg-card shadow-md ring-1 ring-border/40 transition-transform duration-layout ease-soft",
            isDark ? "translate-x-7" : "translate-x-0",
          )}
          aria-hidden
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-primary" strokeWidth={2.25} />
          ) : (
            <Sun className="h-3 w-3 text-amber-600 dark:text-amber-400" strokeWidth={2.25} />
          )}
        </span>
      </button>
    </div>
  );
}
