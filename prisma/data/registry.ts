import { businessCategory } from "./business";
import { communicationCategory } from "./communication";
import { ieltsCategory } from "./ielts";
import { toeicCategory } from "./toeic";
import type { CategorySeed } from "./types";

export const seededCategories: CategorySeed[] = [
  communicationCategory,
  businessCategory,
  toeicCategory,
  ieltsCategory,
];
