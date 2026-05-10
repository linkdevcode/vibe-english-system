import { prisma } from "@/lib/prisma";

/** Danh mục + skill + đếm bài học — dùng trang học và trang chủ. */
export async function listCategoriesOverview() {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
    select: {
      id: true,
      name: true,
      slug: true,
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
          lessons: { orderBy: { createdAt: "asc" } },
        },
      },
    },
  });
}

export async function countLessonsTotal() {
  return prisma.lesson.count();
}
