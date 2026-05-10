"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { loginAction, type AuthActionState } from "@/lib/actions/auth";
import { AuthGlassCard } from "@/components/auth/AuthGlassCard";
import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import { authInputClassName } from "@/components/auth/auth-input";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton";
import { Input } from "@/components/ui/Input";

function mapLoginError(state: AuthActionState): string | null {
  if (!state || state.ok) return null;
  if (
    state.error === "INVALID_CREDENTIALS" ||
    state.error === "VALIDATION_ERROR"
  ) {
    return "Email hoặc mật khẩu không đúng.";
  }
  if (state.error === "UNKNOWN") {
    return "Có lỗi xảy ra. Thử lại sau giây lát.";
  }
  return null;
}

const initialState: AuthActionState = null;

type LoginFormProps = {
  registeredBanner?: boolean;
};

export function LoginForm({ registeredBanner }: LoginFormProps) {
  const [state, formAction] = useFormState(loginAction, initialState);
  const errorMessage = mapLoginError(state);

  return (
    <AuthPageLayout>
      <AuthGlassCard>
        <div className="mb-8 space-y-2 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border/50 dark:from-primary/25 dark:to-accent/15">
            <Sparkles className="h-7 w-7 text-primary" aria-hidden />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Đăng nhập</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Tiếp tục lộ trình tiếng Anh công sở trên VibeEnglish.
          </p>
        </div>

        {registeredBanner ? (
          <p
            role="status"
            className="mb-4 rounded-2xl border border-success/40 bg-success/10 px-4 py-3 text-sm text-success dark:text-emerald-300"
          >
            Đăng ký thành công. Hãy đăng nhập bằng tài khoản vừa tạo.
          </p>
        ) : null}

        {errorMessage ? (
          <p
            role="alert"
            className="mb-4 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive dark:text-red-300"
          >
            {errorMessage}
          </p>
        ) : null}

        <form className="space-y-5" action={formAction}>
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium tracking-wide text-muted-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="ban@congty.com"
              className={authInputClassName}
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-xs font-medium tracking-wide text-muted-foreground"
            >
              Mật khẩu
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className={authInputClassName}
            />
          </div>
          <AuthSubmitButton pendingLabel="Đang đăng nhập…">
            Đăng nhập
          </AuthSubmitButton>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Quên mật khẩu?
          </Link>
          <span className="mx-2 text-border">·</span>
          <Link
            href="/auth/register"
            className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Tạo tài khoản
          </Link>
        </p>
      </AuthGlassCard>
    </AuthPageLayout>
  );
}
