import Link from "next/link";
import { notFound } from "next/navigation";
import { SkillLucide } from "@/components/learning/SkillLucide";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { getCategoryBySlug } from "@/lib/learning";

type PageProps = { params: { slug: string } };

export default async function LearningCategoryPage({ params }: PageProps) {
  const category = await getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            <Link href="/learning" className="text-primary hover:underline">
              Học
            </Link>
            <span aria-hidden className="px-2 text-border">
              /
            </span>
            <span className="font-mono text-xs text-foreground">{category.slug}</span>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{category.name}</h1>
        </div>
        <Button href="/learning" variant="ghost" size="sm">
          Danh mục
        </Button>
      </div>

      <div className="flex flex-col gap-12">
        {category.skills.map((skill) => (
          <section key={skill.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <SkillLucide iconName={skill.icon} className="h-10 w-10 shrink-0 text-accent" />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </div>
            {skill.lessons.length === 0 ? (
              <p className="text-sm text-muted-foreground">Chưa có bài học cho kỹ năng này.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {skill.lessons.map((lesson) => (
                  <Card key={lesson.id} className="overflow-hidden p-0">
                    <CardHeader className="border-b border-border/80 bg-muted/30 px-5 py-4 dark:bg-muted/10">
                      <CardTitle className="text-base font-medium leading-snug text-foreground">
                        {lesson.sentenceEn}
                      </CardTitle>
                      <CardDescription className="pt-2 text-base text-muted-foreground">
                        {lesson.sentenceVi}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                      {lesson.explanation}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
