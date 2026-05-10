import { ArrowRight, BookOpen, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { countLessonsTotal, listCategoriesOverview } from "@/lib/learning";

const metaBySlug: Record<
  string,
  {
    Icon: typeof BookOpen;
    descriptionVi: string;
    iconTone: string;
  }
> = {
  communication: {
    Icon: BookOpen,
    iconTone: "text-accent",
    descriptionVi:
      "Hội thoại và tình huống hằng ngày — dữ liệu lấy từ Postgres (đồng bộ với trang Học).",
  },
  business: {
    Icon: Building2,
    iconTone: "text-primary",
    descriptionVi:
      "Email, thuyết trình và tình huống công sở — cập nhật qua seed / admin DB.",
  },
};

export default async function HomePage() {
  const [categories, lessonCount] = await Promise.all([
    listCategoriesOverview(),
    countLessonsTotal(),
  ]);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-12 px-6 py-16">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary transition-colors duration-layout">
          EngFlow
        </p>
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
                  <CardTitle className="text-lg">{cat.name}</CardTitle>
                  <CardDescription>
                    {descriptionVi}
                    <span className="mt-2 block text-xs text-muted-foreground/90">
                      {skillCount} kỹ năng · {lessonsInCat} bài học
                    </span>
                  </CardDescription>
                </CardHeader>
                <Button href={`/learning/${cat.slug}`} variant="ghost" size="sm" className="-ml-2">
                  Mở danh mục
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
}
