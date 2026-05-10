import type {
  ClozeExercisePayload,
  ListenMcqExercisePayload,
  McqExercisePayload,
} from "../../lib/exercises/types";

export type ExerciseSeed =
  | { type: "MCQ"; sortOrder?: number; payload: McqExercisePayload }
  | { type: "CLOZE"; sortOrder?: number; payload: ClozeExercisePayload }
  | {
      type: "LISTEN_MCQ";
      sortOrder?: number;
      payload: ListenMcqExercisePayload;
    };

export type LessonContent = {
  sentenceEn: string;
  sentenceVi: string;
  explanation: string;
  exercises?: ExerciseSeed[];
};

export type SkillSeed = {
  name: string;
  /** Tên export component Lucide (vd: Sunrise, Plane) */
  icon: string;
  lessons: LessonContent[];
};

export type CategorySeed = {
  slug: string;
  name: string;
  /** Thứ tự hiển thị (nhỏ trước). */
  sortOrder?: number;
  /** Danh mục chưa có bài — UI hiển thị “sắp ra mắt”. */
  isComingSoon?: boolean;
  skills: SkillSeed[];
};
