import Link from "next/link";
import { notFound } from "next/navigation";
import { SkillLessonsPager } from "@/components/learning/SkillLessonsPager";
import { SkillLucide } from "@/components/learning/SkillLucide";
import type { LessonListItem } from "@/components/learning/LessonListCard";
import { Button } from "@/components/ui/Button";
import { getLessonExerciseProgressMap } from "@/lib/learning-progress";
import { getCategoryBySlug } from "@/lib/learning";
import { getSession } from "@/lib/session";

type PageProps = { params: { slug: string } };

export default async function LearningCategoryPage({ params }: PageProps) {
  const [category, session] = await Promise.all([
    getCategoryBySlug(params.slug),
    getSession(),
  ]);

  if (!category) {
    notFound();
  }

  const lessonIds = category.skills.flatMap((s) => s.lessons.map((l) => l.id));
  const totalsByLessonId = Object.fromEntries(
    category.skills.flatMap((s) =>
      s.lessons.map((l) => [l.id, l._count.exercises] as const),
    ),
  );
  const lessonProgress =
    session && lessonIds.length
      ? await getLessonExerciseProgressMap(session.sub, lessonIds, totalsByLessonId)
      : undefined;

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            <Link href="/learning" className="text-primary hover:underline">
              Học
            </Link>
            <span aria-hidden className="px-2 text-border">
              /
            </span>
            <span className="font-mono text-xs text-foreground">{category.slug}</span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="mt-2 text-3xl font-bold tracking-tight">{category.name}</h1>
            {category.isComingSoon ? (
              <span className="mt-2 rounded-full border border-dashed border-primary/60 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Sắp ra mắt
              </span>
            ) : null}
          </div>
        </div>
        <Button href="/learning" variant="ghost" size="sm">
          Danh mục
        </Button>
      </div>

      {category.isComingSoon ? (
        <section className="rounded-3xl border border-dashed border-border bg-muted/20 px-5 py-8 text-center text-muted-foreground dark:bg-muted/10">
          <p className="text-base leading-relaxed">
            Danh mục này đang được chuẩn bị. Bạn có thể học từ các mục{" "}
            <Link href="/learning" className="font-medium text-primary hover:underline">
              đã mở
            </Link>{" "}
            trong phần Học.
          </p>
        </section>
      ) : null}

      <div className="flex flex-col gap-12">
        {category.skills.map((skill) => (
          <section key={skill.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <SkillLucide iconName={skill.icon} className="h-10 w-10 shrink-0 text-accent" />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>
            {skill.lessons.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Chưa có bài học cho kỹ năng này — nội dung sẽ được bổ sung.
              </p>
            ) : (
              <SkillLessonsPager
                categorySlug={category.slug}
                lessons={skill.lessons.map((lesson): LessonListItem => {
                  const prog = lessonProgress?.[lesson.id];
                  let progressLabel: string | undefined;
                  if (session && prog && prog.totalExercises > 0) {
                    progressLabel = `Đã làm và lưu ${prog.completedExercises}/${prog.totalExercises} phần luyện (tài khoản của bạn)`;
                  }
                  return {
                    id: lesson.id,
                    sentenceEn: lesson.sentenceEn,
                    sentenceVi: lesson.sentenceVi,
                    explanation: lesson.explanation,
                    exerciseCount: lesson._count.exercises,
                    progressLabel,
                  };
                })}
              />
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
