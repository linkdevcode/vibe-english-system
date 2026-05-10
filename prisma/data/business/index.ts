import type { CategorySeed } from "../types";
import { lessons as emailWritingLessons } from "./email-writing/lessons";
import { lessons as presentationLessons } from "./presentation/lessons";

export const businessCategory: CategorySeed = {
  slug: "business",
  name: "Công sở",
  skills: [
    {
      name: "Viết Email",
      icon: "Mail",
      lessons: emailWritingLessons,
    },
    {
      name: "Thuyết trình",
      icon: "Presentation",
      lessons: presentationLessons,
    },
  ],
};
