import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { ExerciseRunner } from "@/components/learning/ExerciseRunner";
import { parseExerciseRow } from "@/lib/exercises/types";
import { getExerciseCompletionStatesForLesson } from "@/lib/learning-progress";
import { getLessonForPractice } from "@/lib/learning";
import { getSession } from "@/lib/session";

type PageProps = { params: { slug: string; lessonId: string } };

export default async function LessonPracticePage({ params }: PageProps) {
  const [lesson, session] = await Promise.all([
    getLessonForPractice(params.slug, params.lessonId),
    getSession(),
  ]);

  if (!lesson || lesson.exercises.length === 0) {
    notFound();
  }

  const exercises = lesson.exercises
    .map((row) =>
      parseExerciseRow({
        id: row.id,
        sortOrder: row.sortOrder,
        type: row.type,
        payload: row.payload,
      }),
    )
    .filter((e): e is NonNullable<typeof e> => e !== null);

  if (exercises.length === 0) {
    notFound();
  }

  const categoryName = lesson.skill.category.name;

  const completionByExerciseId = session?.sub
    ? await getExerciseCompletionStatesForLesson(session.sub, lesson.id)
    : undefined;

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            <Link href="/learning" className="text-primary hover:underline">
              Học
            </Link>
            <span aria-hidden className="px-2 text-border">
              /
            </span>
            <Link
              href={`/learning/${params.slug}`}
              className="text-primary hover:underline"
            >
              {categoryName}
            </Link>
            <span aria-hidden className="px-2 text-border">
              /
            </span>
            <span className="font-mono text-xs text-foreground">luyện tập</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">Luyện tập</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {lesson.skill.name} — làm lần lượt các bước bên dưới.
          </p>
        </div>
        <Button href={`/learning/${params.slug}`} variant="ghost" size="sm">
          Quay lại
        </Button>
      </div>

      {!session ? (
        <p className="text-xs text-muted-foreground">
          Bạn không cần đăng nhập để làm bài. Nếu{" "}
          <Link href="/auth/login" className="underline hover:text-primary">
            đăng nhập
          </Link>
          , hệ thống sẽ ghi nhận từng câu bạn đã kiểm tra (và báo có lần trả đúng).
        </p>
      ) : null}

      <ExerciseRunner
        categorySlug={params.slug}
        lesson={{
          sentenceEn: lesson.sentenceEn,
          sentenceVi: lesson.sentenceVi,
          explanation: lesson.explanation,
          skillName: lesson.skill.name,
          categoryName,
        }}
        exercises={exercises}
        completionByExerciseId={completionByExerciseId}
        trackExerciseProgress={Boolean(session)}
      />
    </main>
  );
}
