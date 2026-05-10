export type LessonContent = {
  sentenceEn: string;
  sentenceVi: string;
  explanation: string;
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
  skills: SkillSeed[];
};
