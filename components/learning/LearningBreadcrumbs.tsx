import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { href: string; label: string };

type LearningBreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function LearningBreadcrumbs({
  items,
  className,
}: LearningBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-1 text-sm", className)}>
      {items.map((c, i) => (
        <span key={`${c.href}-${i}`} className="flex items-center gap-1">
          {i > 0 ? (
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
          ) : null}
          {i === items.length - 1 ? (
            <span className="truncate font-medium text-foreground">{c.label}</span>
          ) : (
            <Link
              href={c.href}
              className="truncate text-muted-foreground transition-colors hover:text-primary"
            >
              {c.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
