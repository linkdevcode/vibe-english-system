import { prisma } from "@/lib/prisma";

/** Danh mục + skill + đếm bài học — dùng trang học và trang chủ. */
export async function listCategoriesOverview() {
  return prisma.category.findMany({
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: {
      id: true,
      name: true,
      slug: true,
      sortOrder: true,
      isComingSoon: true,
      skills: {
        select: {
          id: true,
          name: true,
          icon: true,
          _count: { select: { lessons: true } },
        },
        orderBy: { name: "asc" },
      },
    },
  });
}

export async function getCategoryBySlug(slug: string) {
  return prisma.category.findUnique({
    where: { slug },
    include: {
      skills: {
        orderBy: { name: "asc" },
        include: {
          lessons: {
            orderBy: { createdAt: "asc" },
            include: {
              _count: { select: { exercises: true } },
            },
          },
        },
      },
    },
  });
}

/** Lesson + exercises (đã sort) — trang luyện tập; đảm bảo thuộc category `categorySlug`. */
export async function getLessonForPractice(
  categorySlug: string,
  lessonId: string,
) {
  return prisma.lesson.findFirst({
    where: {
      id: lessonId,
      skill: { category: { slug: categorySlug } },
    },
    include: {
      exercises: { orderBy: { sortOrder: "asc" } },
      skill: {
        select: {
          id: true,
          name: true,
          icon: true,
          category: { select: { slug: true, name: true } },
        },
      },
    },
  });
}

export async function countLessonsTotal() {
  return prisma.lesson.count();
}
