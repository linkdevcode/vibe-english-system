import type { CategorySeed } from "../types";
import { lessons as dailyGreetingLessons } from "./daily-greeting/lessons";
import { lessons as travelLessons } from "./travel/lessons";

export const communicationCategory: CategorySeed = {
  slug: "communication",
  name: "Giao tiếp",
  skills: [
    {
      name: "Chào hỏi",
      icon: "Sunrise",
      lessons: dailyGreetingLessons,
    },
    {
      name: "Du lịch",
      icon: "Plane",
      lessons: travelLessons,
    },
  ],
};
