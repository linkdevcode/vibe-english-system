import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SkillLucide } from "@/components/learning/SkillLucide";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { listCategoriesOverview } from "@/lib/learning";

export default async function LearningPage() {
  const categories = await listCategoriesOverview();

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">

      {categories.length === 0 ? (
        <p className="rounded-3xl border border-border bg-muted/40 px-4 py-6 text-center text-muted-foreground">
          Chưa có dữ liệu học trong DB. Chạy{" "}
          <code className="text-foreground">npm run db:seed</code> rồi tải lại trang.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <section key={cat.id} className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                  {cat.isComingSoon ? (
                    <span className="rounded-full border border-dashed border-primary/50 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Sắp ra mắt
                    </span>
                  ) : null}
                </div>
                {cat.isComingSoon ? (
                  <span className="text-sm text-muted-foreground">Đang được chuẩn bị</span>
                ) : (
                  <Link
                    href={`/learning/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Xem tất cả bài học <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {cat.skills.length === 0 ? (
                  <p className="col-span-full text-sm text-muted-foreground">
                    Nội dung sẽ được cập nhật trong thời gian tới.
                  </p>
                ) : (
                  cat.skills.map((skill) => (
                  <Card
                    key={skill.id}
                    className="p-5 transition-shadow duration-layout hover:shadow-lg"
                  >
                    <CardHeader className="p-0">
                      <div className="mb-2 flex items-center gap-2">
                        <SkillLucide iconName={skill.icon} className="h-8 w-8 text-primary" />
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                      </div>
                      <CardDescription>
                        {skill._count.lessons} bài học trong kỹ năng này
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  ))
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
