import Link from "next/link";
import { Mail } from "lucide-react";
import { AuthGlassCard } from "@/components/auth/AuthGlassCard";
import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import { authInputClassName } from "@/components/auth/auth-input";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  return (
    <AuthPageLayout>
      <AuthGlassCard>
        <div className="mb-8 space-y-2 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-muted/80 ring-1 ring-border/50 dark:from-primary/20 dark:to-muted/30">
            <Mail className="h-7 w-7 text-primary" aria-hidden />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Quên mật khẩu</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Nhập email đã đăng ký — chúng tôi gửi link đặt lại mật khẩu (kết nối
            backend ở bước sau).
          </p>
        </div>

        <form className="space-y-5" action="#" method="post">
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
          <Button type="submit" variant="gradient" size="lg" className="w-full">
            Gửi link đặt lại
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Nhớ mật khẩu?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Quay lại đăng nhập
          </Link>
        </p>
      </AuthGlassCard>
    </AuthPageLayout>
  );
}
