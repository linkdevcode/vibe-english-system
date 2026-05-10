import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "destructive"
    | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
};

const variants: Record<
  NonNullable<ButtonProps["variant"]>,
  string
> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-transparent",
  ghost: "bg-transparent hover:bg-muted text-foreground",
  outline:
    "border border-border bg-transparent hover:bg-muted/80 text-foreground",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  gradient:
    "border-0 bg-gradient-to-r from-primary via-violet-500 to-accent bg-[length:200%_100%] text-white shadow-lg shadow-primary/30 " +
    "transition-[background-position,box-shadow,filter,transform] duration-500 ease-soft " +
    "hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-primary/35 hover:brightness-[1.03] active:brightness-100 " +
    "dark:via-violet-400 dark:shadow-primary/25",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm rounded-2xl",
  md: "h-11 px-6 text-sm rounded-2xl",
  lg: "h-12 px-8 text-base rounded-3xl",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-layout ease-soft " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] transition-transform";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    const merged = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      className,
    );

    if (href) {
      return (
        <Link href={href} className={merged} aria-disabled={disabled}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={merged}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
