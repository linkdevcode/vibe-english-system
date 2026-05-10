import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, Building2, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { listCategoriesOverview } from "@/lib/learning";

const metaBySlug: Record<
  string,
  {
    Icon: LucideIcon;
    descriptionVi: string;
    iconTone: string;
  }
> = {
  communication: {
    Icon: BookOpen,
    iconTone: "text-accent",
    descriptionVi:
      "Hội thoại và tình huống hằng ngày",
  },
  business: {
    Icon: Building2,
    iconTone: "text-primary",
    descriptionVi:
      "Email, thuyết trình và tình huống công sở",
  },
  toeic: {
    Icon: FileText,
    iconTone: "text-accent",
    descriptionVi: "Luyện thi định hướng TOEIC — đang được chuẩn bị.",
  },
  ielts: {
    Icon: FileText,
    iconTone: "text-primary",
    descriptionVi: "Lộ trình ôn IELTS chọn lọc — đang được chuẩn bị.",
  },
};

export default async function HomePage() {
  const categories = await listCategoriesOverview();

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-12 px-6 py-16">
      <div className="space-y-4">
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
          Tiếng Anh giao tiếp &amp; công sở
        </h1>
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
        {categories.length === 0 ? (
          <p className="col-span-full rounded-3xl border border-dashed border-border px-4 py-8 text-center text-muted-foreground">
            Chưa có danh mục trong DB. Chạy{" "}
            <code className="text-foreground">npm run db:seed</code> để thêm dữ liệu mẫu.
          </p>
        ) : (
          categories.map((cat) => {
            const meta = metaBySlug[cat.slug] ?? {
              Icon: BookOpen,
              iconTone: "text-primary",
              descriptionVi: `${cat.skills.length} kỹ năng — xem chi tiết trên trang Học.`,
            };
            const { Icon, iconTone, descriptionVi } = meta;
            const skillCount = cat.skills.length;
            const lessonsInCat = cat.skills.reduce(
              (n, s) => n + s._count.lessons,
              0,
            );
            return (
              <Card key={cat.id} className="p-6">
                <CardHeader className="p-0 pb-4">
                  <Icon className={`mb-2 h-10 w-10 ${iconTone}`} aria-hidden />
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg">{cat.name}</CardTitle>
                    {cat.isComingSoon ? (
                      <span className="rounded-full border border-dashed border-primary/60 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        Sắp ra mắt
                      </span>
                    ) : null}
                  </div>
                  <CardDescription>
                    {descriptionVi}
                    <span className="mt-2 block text-xs text-muted-foreground/90">
                      {skillCount} kỹ năng · {lessonsInCat} bài học
                    </span>
                  </CardDescription>
                </CardHeader>
                {cat.isComingSoon ? (
                  <p className="text-sm text-muted-foreground">
                    Theo dõi trong mục Học để biết khi có bài học chi tiết.
                  </p>
                ) : (
                  <Button href={`/learning/${cat.slug}`} variant="ghost" size="sm" className="-ml-2">
                    Mở danh mục
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                )}
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
}
