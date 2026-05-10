import { PrismaClient } from "@prisma/client";
import { seededCategories } from "./data/registry";

const prisma = new PrismaClient();

async function main() {
  const slugs = seededCategories.map((c) => c.slug);
  await prisma.category.deleteMany({ where: { slug: { in: slugs } } });

  for (const bundle of seededCategories) {
    await prisma.category.create({
      data: {
        name: bundle.name,
        slug: bundle.slug,
        skills: {
          create: bundle.skills.map((skill) => ({
            name: skill.name,
            icon: skill.icon,
            lessons: {
              create: skill.lessons.map((l) => ({
                sentenceEn: l.sentenceEn,
                sentenceVi: l.sentenceVi,
                explanation: l.explanation,
              })),
            },
          })),
        },
      },
    });
  }

  console.info(
    `Seed done: ${seededCategories.length} categories (${slugs.join(", ")}).`,
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exitCode = 1;
  });
