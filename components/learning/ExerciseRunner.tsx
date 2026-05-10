"use client";

import { useState } from "react";
import { Check, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clozeMatches, type TypedExerciseRow } from "@/lib/exercises/types";
import { useBrowserTTS } from "@/components/learning/useBrowserTTS";
import { cn } from "@/lib/utils";

const typeLabels: Record<TypedExerciseRow["type"], string> = {
  MCQ: "Trắc nghiệm",
  CLOZE: "Điền từ",
  LISTEN_MCQ: "Nghe và chọn",
};

type LessonSummary = {
  sentenceEn: string;
  sentenceVi: string;
  explanation: string;
  skillName: string;
  categoryName: string;
};

export function ExerciseRunner(props: {
  categorySlug: string;
  lesson: LessonSummary;
  exercises: TypedExerciseRow[];
  /** Khi đã đăng nhập: tiến độ từ server (theo exercise id). */
  completionByExerciseId?: Record<string, { solvedCorrectly: boolean }>;
  /** Gọi API lưu sau mỗi lần bấm Kiểm tra (chỉ khi đăng nhập). */
  trackExerciseProgress?: boolean;
}) {
  const {
    categorySlug,
    lesson,
    exercises,
    completionByExerciseId,
    trackExerciseProgress,
  } = props;
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState<boolean | null>(null);

  const [clozeInput, setClozeInput] = useState("");
  const [mcqPick, setMcqPick] = useState<number | null>(null);

  const exercise = exercises[index];
  const isLast = index >= exercises.length - 1;

  const resetInteract = () => {
    setRevealed(false);
    setCorrect(null);
    setClozeInput("");
    setMcqPick(null);
  };

  const handleNext = () => {
    if (!isLast) {
      setIndex((i) => i + 1);
      resetInteract();
    }
  };

  const goToQuestion = (i: number) => {
    if (i < 0 || i >= exercises.length) return;
    setIndex(i);
    resetInteract();
  };

  const evaluate = () => {
    if (!exercise) return;
    let ok: boolean | null = null;
    switch (exercise.type) {
      case "CLOZE":
        ok = clozeMatches(clozeInput, exercise.payload.acceptableAnswers);
        setCorrect(ok);
        break;
      case "MCQ":
      case "LISTEN_MCQ":
        if (mcqPick === null) return;
        ok = mcqPick === exercise.payload.correctIndex;
        setCorrect(ok);
        break;
      default:
        break;
    }
    setRevealed(true);

    if (trackExerciseProgress && ok !== null) {
      void fetch("/api/exercise-completion", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exerciseId: exercise.id,
          solvedCorrectly: ok,
        }),
      }).catch(() => {
        /* ignore */
      });
    }
  };

  const { supported: ttsSupported, speak } = useBrowserTTS();

  if (!exercise) return null;

  const canSubmit =
    exercise.type === "CLOZE"
      ? clozeInput.trim().length > 0
      : mcqPick !== null;

  return (
    <div className="space-y-8">
      <details
        className="group rounded-2xl border border-border bg-muted/15 open:bg-muted/25 dark:bg-muted/10"
        open
      >
        <summary className="cursor-pointer list-none px-5 py-3 text-sm font-medium text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="inline-flex items-center gap-2">
            Ngữ liệu bài học
            <span className="text-xs font-normal text-muted-foreground group-open:hidden">
              (mở rộng)
            </span>
            <span className="hidden text-xs font-normal text-muted-foreground group-open:inline">
              (thu gọn)
            </span>
          </span>
        </summary>
        <div className="space-y-3 border-t border-border/60 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {lesson.categoryName} · {lesson.skillName}
          </p>
          <p className="text-lg font-medium leading-snug text-foreground">
            {lesson.sentenceEn}
          </p>
          <p className="text-base text-muted-foreground">{lesson.sentenceVi}</p>
        </div>
      </details>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
              {index + 1} / {exercises.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {typeLabels[exercise.type]}
            </span>
          </div>
        </div>

        <nav
          className="flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Chuyển câu"
        >
          {exercises.map((ex, i) => {
            const saved = completionByExerciseId?.[ex.id];
            const isCurrent = i === index;
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => goToQuestion(i)}
                className={cn(
                  "flex h-9 min-w-[2.25rem] shrink-0 items-center justify-center rounded-full border px-2 text-xs font-medium transition-colors",
                  isCurrent
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
                  saved?.solvedCorrectly && !isCurrent && "border-emerald-500/60 text-emerald-700 dark:text-emerald-400",
                )}
                aria-current={isCurrent ? "step" : undefined}
              >
                {saved?.solvedCorrectly ? (
                  <span className="flex items-center gap-0.5">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                    {i + 1}
                  </span>
                ) : (
                  i + 1
                )}
              </button>
            );
          })}
        </nav>

        {exercise.type === "LISTEN_MCQ" && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                disabled={!ttsSupported}
                onClick={() =>
                  speak(exercise.payload.script, { rate: 0.88, pitch: 1.02 })
                }
              >
                <Volume2 className="h-4 w-4" aria-hidden />
                Phát âm
              </Button>
              {!ttsSupported ? (
                <span className="text-sm text-destructive">
                  Trình duyệt không hỗ trợ đọc văn bản.
                </span>
              ) : (
                <span className="text-sm text-muted-foreground">
                  Bấm Phát âm và chọn đáp án (có thể nghe lại).
                </span>
              )}
            </div>
            <p className="text-base font-medium text-foreground">
              {exercise.payload.question}
            </p>
            <ul className="flex flex-col gap-2">
              {exercise.payload.choices.map((c, i) => (
                <li key={i}>
                  <label
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-2xl border border-border px-4 py-3 text-left transition-colors",
                      mcqPick === i &&
                        !revealed &&
                        "border-primary bg-primary/10",
                      revealed &&
                        i === exercise.payload.correctIndex &&
                        "border-emerald-500/80 bg-emerald-500/10",
                      revealed &&
                        mcqPick === i &&
                        i !== exercise.payload.correctIndex &&
                        "border-destructive/70 bg-destructive/10",
                    )}
                  >
                    <input
                      type="radio"
                      name={`listen-mcq-${index}`}
                      className="mt-1 shrink-0"
                      checked={mcqPick === i}
                      disabled={revealed}
                      onChange={() => !revealed && setMcqPick(i)}
                    />
                    <span className="text-sm leading-relaxed">{c}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {exercise.type === "MCQ" && (
          <div className="space-y-3">
            <p className="text-base font-medium text-foreground">
              {exercise.payload.question}
            </p>
            <ul className="flex flex-col gap-2">
              {exercise.payload.choices.map((c, i) => (
                <li key={i}>
                  <label
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-2xl border border-border px-4 py-3 text-left transition-colors",
                      mcqPick === i &&
                        !revealed &&
                        "border-primary bg-primary/10",
                      revealed &&
                        i === exercise.payload.correctIndex &&
                        "border-emerald-500/80 bg-emerald-500/10",
                      revealed &&
                        mcqPick === i &&
                        i !== exercise.payload.correctIndex &&
                        "border-destructive/70 bg-destructive/10",
                    )}
                  >
                    <input
                      type="radio"
                      name={`mcq-${index}`}
                      className="mt-1 shrink-0"
                      checked={mcqPick === i}
                      disabled={revealed}
                      onChange={() => !revealed && setMcqPick(i)}
                    />
                    <span className="text-sm leading-relaxed">{c}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

        {exercise.type === "CLOZE" && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Điền từ / cụm còn thiếu.
            </p>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-2 text-lg leading-relaxed text-foreground">
              <span>{exercise.payload.before}</span>
              <input
                type="text"
                value={clozeInput}
                disabled={revealed}
                onChange={(e) => setClozeInput(e.target.value)}
                className={cn(
                  "min-w-[6rem] max-w-[12rem] rounded-xl border border-border bg-background px-3 py-2 text-base outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring",
                  revealed &&
                    correct &&
                    "border-emerald-500/80 bg-emerald-500/10",
                  revealed &&
                    !correct &&
                    "border-destructive/70 bg-destructive/10",
                )}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                aria-label="Điền chỗ trống"
              />
              <span>{exercise.payload.after}</span>
            </p>
          </div>
        )}

        {revealed && correct !== null && (
          <p
            className={cn(
              "text-sm font-medium",
              correct ? "text-emerald-600 dark:text-emerald-400" : "text-destructive",
            )}
            role="status"
          >
            {correct ? "Đúng rồi." : "Chưa đúng — xem lại phần giải thích bên dưới."}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          {!revealed ? (
            <Button
              type="button"
              onClick={evaluate}
              disabled={!canSubmit}
            >
              Kiểm tra
            </Button>
          ) : isLast ? (
            <Button type="button" variant="gradient" href={`/learning/${categorySlug}`}>
              Hoàn thành — về bài học
            </Button>
          ) : (
            <Button type="button" onClick={handleNext}>
              Câu tiếp theo
            </Button>
          )}
        </div>
      </section>

      {revealed && (
        <section className="rounded-2xl border border-dashed border-border/80 bg-muted/10 px-5 py-4 text-sm leading-relaxed text-muted-foreground dark:bg-muted/5">
          <p className="font-medium text-foreground">Gợi ý (trong bài học)</p>
          <p className="mt-2">{lesson.explanation}</p>
        </section>
      )}
    </div>
  );
}
