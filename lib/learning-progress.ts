import { prisma } from "@/lib/prisma";

export type LessonExerciseProgress = {
  completedExercises: number;
  totalExercises: number;
  /** Có ít nhất một lần trả lời đúng (theo từng exercise). */
  solvedCorrectCount: number;
};

/** Theo dõi các exercise đã chấm (Kiểm tra) trong các lesson của category — chỉ khi có `userId`. */
export async function getLessonExerciseProgressMap(
  userId: string,
  lessonIds: string[],
  totalsByLessonId: Record<string, number>,
): Promise<Record<string, LessonExerciseProgress>> {
  const out: Record<string, LessonExerciseProgress> = {};
  if (!lessonIds.length) return out;

  for (const lid of lessonIds) {
    out[lid] = {
      completedExercises: 0,
      totalExercises: totalsByLessonId[lid] ?? 0,
      solvedCorrectCount: 0,
    };
  }

  const rows = await prisma.exerciseCompletion.findMany({
    where: {
      userId,
      exercise: { lessonId: { in: lessonIds } },
    },
    select: {
      exerciseId: true,
      solvedCorrectly: true,
      exercise: { select: { lessonId: true } },
    },
  });

  const byLesson = new Map<
    string,
    { attempted: Set<string>; correct: Set<string> }
  >();
  for (const lid of lessonIds) {
    byLesson.set(lid, { attempted: new Set(), correct: new Set() });
  }
  for (const r of rows) {
    const lid = r.exercise.lessonId;
    const bucket = byLesson.get(lid);
    if (!bucket) continue;
    bucket.attempted.add(r.exerciseId);
    if (r.solvedCorrectly) bucket.correct.add(r.exerciseId);
  }

  for (const lid of lessonIds) {
    const bucket = byLesson.get(lid)!;
    const total = totalsByLessonId[lid] ?? 0;
    out[lid] = {
      totalExercises: total,
      completedExercises: bucket.attempted.size,
      solvedCorrectCount: bucket.correct.size,
    };
  }

  return out;
}

export async function getExerciseCompletionStatesForLesson(
  userId: string,
  lessonId: string,
): Promise<Record<string, { solvedCorrectly: boolean }>> {
  const rows = await prisma.exerciseCompletion.findMany({
    where: {
      userId,
      exercise: { lessonId },
    },
    select: { exerciseId: true, solvedCorrectly: true },
  });
  return Object.fromEntries(
    rows.map((r) => [r.exerciseId, { solvedCorrectly: r.solvedCorrectly }]),
  );
}
