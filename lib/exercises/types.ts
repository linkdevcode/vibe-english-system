import type { ExerciseType } from "@prisma/client";

export type McqExercisePayload = {
  question: string;
  choices: string[];
  correctIndex: number;
};

/** Một khoảng trống giữa `before` và `after`; chấp nhận nhiều biến thể (gạch ngang, hoa thường). */
export type ClozeExercisePayload = {
  before: string;
  after: string;
  acceptableAnswers: string[];
};

export type ListenMcqExercisePayload = {
  script: string;
  question: string;
  choices: string[];
  correctIndex: number;
};

export type ExercisePayloadMap = {
  MCQ: McqExercisePayload;
  CLOZE: ClozeExercisePayload;
  LISTEN_MCQ: ListenMcqExercisePayload;
};

export type ExerciseRow = {
  id: string;
  sortOrder: number;
  type: ExerciseType;
  payload: unknown;
};

/** Bài tập đã kiểm tra payload tối thiểu — dùng cho UI. */
export type TypedExerciseRow =
  | { id: string; sortOrder: number; type: "MCQ"; payload: McqExercisePayload }
  | { id: string; sortOrder: number; type: "CLOZE"; payload: ClozeExercisePayload }
  | {
      id: string;
      sortOrder: number;
      type: "LISTEN_MCQ";
      payload: ListenMcqExercisePayload;
    };

export function normalizeAnswer(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

export function clozeMatches(raw: string, acceptable: string[]): boolean {
  const n = normalizeAnswer(raw);
  return acceptable.some((a) => normalizeAnswer(a) === n);
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function parseMcq(p: unknown): McqExercisePayload | null {
  if (!isRecord(p)) return null;
  const { question, choices, correctIndex } = p;
  if (typeof question !== "string") return null;
  if (!Array.isArray(choices) || !choices.every((c) => typeof c === "string"))
    return null;
  if (typeof correctIndex !== "number" || !Number.isInteger(correctIndex))
    return null;
  if (correctIndex < 0 || correctIndex >= choices.length) return null;
  return { question, choices, correctIndex };
}

function parseCloze(p: unknown): ClozeExercisePayload | null {
  if (!isRecord(p)) return null;
  const { before, after, acceptableAnswers } = p;
  if (typeof before !== "string" || typeof after !== "string") return null;
  if (
    !Array.isArray(acceptableAnswers) ||
    !acceptableAnswers.every((a) => typeof a === "string")
  )
    return null;
  if (acceptableAnswers.length === 0) return null;
  return { before, after, acceptableAnswers };
}

function parseListenMcq(p: unknown): ListenMcqExercisePayload | null {
  if (!isRecord(p)) return null;
  const { script, question, choices, correctIndex } = p;
  if (typeof script !== "string" || typeof question !== "string") return null;
  if (!Array.isArray(choices) || !choices.every((c) => typeof c === "string"))
    return null;
  if (typeof correctIndex !== "number" || !Number.isInteger(correctIndex))
    return null;
  if (correctIndex < 0 || correctIndex >= choices.length) return null;
  return { script, question, choices, correctIndex };
}

/** Trả về `null` nếu payload không hợp lệ (không render bài đó). */
export function parseExerciseRow(row: ExerciseRow): TypedExerciseRow | null {
  switch (row.type) {
    case "MCQ": {
      const payload = parseMcq(row.payload);
      return payload
        ? { id: row.id, sortOrder: row.sortOrder, type: "MCQ", payload }
        : null;
    }
    case "CLOZE": {
      const payload = parseCloze(row.payload);
      return payload
        ? { id: row.id, sortOrder: row.sortOrder, type: "CLOZE", payload }
        : null;
    }
    case "LISTEN_MCQ": {
      const payload = parseListenMcq(row.payload);
      return payload
        ? {
            id: row.id,
            sortOrder: row.sortOrder,
            type: "LISTEN_MCQ",
            payload,
          }
        : null;
    }
    default:
      return null;
  }
}
