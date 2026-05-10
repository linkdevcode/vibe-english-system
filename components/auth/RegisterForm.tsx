"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { registerAction, type AuthActionState } from "@/lib/actions/auth";
import { AuthGlassCard } from "@/components/auth/AuthGlassCard";
import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import { authInputClassName } from "@/components/auth/auth-input";
import { AuthSubmitButton } from "@/components/auth/AuthSubmitButton";
import { Input } from "@/components/ui/Input";

function mapRegisterError(state: AuthActionState): string | null {
  if (!state || state.ok) return null;
  if (state.error === "EMAIL_EXISTS") {
    return "Email này đã được đăng ký. Hãy đăng nhập hoặc dùng email khác.";
  }
  if (state.error === "UNKNOWN") {
    return "Có lỗi xảy ra. Thử lại sau giây lát.";
  }
  return null;
}

const initialState: AuthActionState = null;

export function RegisterForm() {
  const [state, formAction] = useFormState(registerAction, initialState);
  const globalError = mapRegisterError(state);

  return (
    <AuthPageLayout>
      <AuthGlassCard>
        <div className="mb-8 space-y-2 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-primary/15 ring-1 ring-border/50 dark:from-accent/20 dark:to-primary/20">
            <UserPlus className="h-7 w-7 text-accent" aria-hidden />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Tạo tài khoản</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Miễn phí để bắt đầu — nâng cấp sau khi bạn vào nhịp học.
          </p>
        </div>

        {globalError ? (
          <p
            role="alert"
            className="mb-4 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive dark:text-red-300"
          >
            {globalError}
          </p>
        ) : null}

        <form className="space-y-5" action={formAction}>
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-xs font-medium tracking-wide text-muted-foreground"
            >
              Họ tên
            </label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="Nguyễn Văn A"
              className={authInputClassName}
              aria-invalid={Boolean(state?.ok === false && state.fieldErrors?.name)}
            />
            {state?.ok === false && state.fieldErrors?.name ? (
              <p className="text-xs text-destructive dark:text-red-300">
                {state.fieldErrors.name}
              </p>
            ) : null}
          </div>
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
              aria-invalid={Boolean(state?.ok === false && state.fieldErrors?.email)}
            />
            {state?.ok === false && state.fieldErrors?.email ? (
              <p className="text-xs text-destructive dark:text-red-300">
                {state.fieldErrors.email}
              </p>
            ) : null}
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
              autoComplete="new-password"
              required
              placeholder="Tối thiểu 8 ký tự"
              className={authInputClassName}
              minLength={8}
              aria-invalid={
                Boolean(state?.ok === false && state.fieldErrors?.password)
              }
            />
            {state?.ok === false && state.fieldErrors?.password ? (
              <p className="text-xs text-destructive dark:text-red-300">
                {state.fieldErrors.password}
              </p>
            ) : null}
          </div>
          <AuthSubmitButton pendingLabel="Đang tạo tài khoản…">
            Đăng ký
          </AuthSubmitButton>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Đã có tài khoản?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Đăng nhập
          </Link>
        </p>
      </AuthGlassCard>
    </AuthPageLayout>
  );
}
