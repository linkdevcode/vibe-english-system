import type { LessonContent } from "../types";

export type LessonTripleOpts = {
  cloze: { before: string; after: string; acceptableAnswers: string[] };
  listenQuestionVi: string;
  mcqQuestionVi: string;
  choicesVi: [string, string, string];
  correctIndex: 0 | 1 | 2;
};

/** Mỗi lesson: LISTEN_MCQ → CLOZE → MCQ — dùng chung bộ đáp án, khác phần câu hỏi để không trùng lặp hoàn toàn. */
export function lessonWithTripleExercises(
  sentenceEn: string,
  sentenceVi: string,
  explanation: string,
  o: LessonTripleOpts,
): LessonContent {
  const choices = [...o.choicesVi] as [string, string, string];
  return {
    sentenceEn,
    sentenceVi,
    explanation,
    exercises: [
      {
        type: "LISTEN_MCQ",
        sortOrder: 0,
        payload: {
          script: sentenceEn,
          question: o.listenQuestionVi,
          choices,
          correctIndex: o.correctIndex,
        },
      },
      {
        type: "CLOZE",
        sortOrder: 1,
        payload: {
          before: o.cloze.before,
          after: o.cloze.after,
          acceptableAnswers: o.cloze.acceptableAnswers,
        },
      },
      {
        type: "MCQ",
        sortOrder: 2,
        payload: {
          question: o.mcqQuestionVi,
          choices,
          correctIndex: o.correctIndex,
        },
      },
    ],
  };
}
