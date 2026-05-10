"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { LessonListCard, type LessonListItem } from "@/components/learning/LessonListCard";

const DEFAULT_PAGE_SIZE = 6;

export function SkillLessonsPager(props: {
  categorySlug: string;
  lessons: LessonListItem[];
  pageSize?: number;
}) {
  const { categorySlug, lessons, pageSize = DEFAULT_PAGE_SIZE } = props;
  const pages = Math.max(1, Math.ceil(lessons.length / pageSize));
  const [page, setPage] = useState(0);

  const slice = useMemo(() => {
    const start = page * pageSize;
    return lessons.slice(start, start + pageSize);
  }, [lessons, page, pageSize]);

  if (lessons.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {slice.map((lesson) => (
          <LessonListCard
            key={lesson.id}
            categorySlug={categorySlug}
            lesson={lesson}
          />
        ))}
      </div>
      {pages > 1 ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
          <p className="text-xs text-muted-foreground">
            Trang {page + 1} / {pages} · {lessons.length} bài trong kỹ năng
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
            >
              Trước
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={page >= pages - 1}
              onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            >
              Sau
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
