import { ArrowRight, BookOpen, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-12 px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary transition-colors duration-layout">
          EngFlow
        </p>
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Tiếng Anh giao tiếp &amp; công sở, học có guồng.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground transition-colors duration-layout">
          Micro-SaaS với nội dung JSON có cấu trúc và giao diện hiện đại,
          dark mode và animation mượt.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/learning" size="lg">
          Vào học
          <ArrowRight className="h-5 w-5" aria-hidden />
        </Button>
        <Button href="/auth/login" variant="outline" size="lg">
          Đăng nhập
        </Button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        <Card className="p-6">
          <CardHeader className="p-0 pb-4">
            <BookOpen className="mb-2 h-10 w-10 text-accent" aria-hidden />
            <CardTitle className="text-lg">Giao tiếp</CardTitle>
            <CardDescription>
              Bài học trong <code className="text-foreground">/data/giao-tiep</code>
              — hội thoại, pronunciation, cụm tổng quát.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="p-6">
          <CardHeader className="p-0 pb-4">
            <Building2 className="mb-2 h-10 w-10 text-primary" aria-hidden />
            <CardTitle className="text-lg">Công sở</CardTitle>
            <CardDescription>
              Bài trong <code className="text-foreground">/data/cong-so</code> —
              họp, email, networking.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
