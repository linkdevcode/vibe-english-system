"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export type LessonListItem = {
  id: string;
  sentenceEn: string;
  sentenceVi: string;
  explanation: string;
  exerciseCount: number;
  progressLabel?: string;
};

export function LessonListCard(props: {
  categorySlug: string;
  lesson: LessonListItem;
}) {
  const {
    categorySlug,
    lesson,
  } = props;
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden p-0">
      <CardHeader className="border-b border-border/80 bg-muted/30 px-5 py-4 dark:bg-muted/10">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <CardTitle className="text-base font-medium leading-snug text-foreground">
              {lesson.sentenceEn}
            </CardTitle>
            <CardDescription className="pt-2 text-base text-muted-foreground">
              {lesson.sentenceVi}
            </CardDescription>
            {lesson.progressLabel ? (
              <p className="mt-2 text-xs font-medium text-primary">{lesson.progressLabel}</p>
            ) : null}
          </div>
          {lesson.exerciseCount > 0 ? (
            <Button
              href={`/learning/${categorySlug}/lesson/${lesson.id}`}
              variant="outline"
              size="sm"
              className="shrink-0"
            >
              Luyện tập ({lesson.exerciseCount})
            </Button>
          ) : (
            <span className="shrink-0 text-xs text-muted-foreground">Sắp có luyện tập</span>
          )}
        </div>
      </CardHeader>
      <CardContent className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
        <div
          className={cn(
            !expanded && "line-clamp-3 text-ellipsis sm:max-h-[6.75rem]",
          )}
        >
          <p>{lesson.explanation}</p>
        </div>
        <button
          type="button"
          className="mt-3 text-xs font-medium text-primary hover:underline"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          {expanded ? "Thu gọn" : "Xem thêm gợi ý trong bài"}
        </button>
      </CardContent>
    </Card>
  );
}
