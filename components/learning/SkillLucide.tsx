import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Mail,
  Plane,
  Presentation,
  Sunrise,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Sunrise,
  Plane,
  Mail,
  Presentation,
};

export function SkillLucide({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) {
  const Icon = map[iconName] ?? BookOpen;
  return <Icon className={className} aria-hidden />;
}
