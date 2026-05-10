import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function LearningPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Học</h1>
          <p className="text-muted-foreground">
            Nội dung load từ <code className="text-foreground">/data</code>.
          </p>
        </div>
        <Button href="/" variant="ghost" size="sm">
          Về trang chủ
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-6 transition-shadow duration-layout hover:shadow-lg">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-lg">Giao tiếp</CardTitle>
            <CardDescription>data/giao-tiep/lessons.json</CardDescription>
          </CardHeader>
        </Card>
        <Card className="p-6 transition-shadow duration-layout hover:shadow-lg">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-lg">Công sở</CardTitle>
            <CardDescription>data/cong-so/lessons.json</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <p className="text-sm text-muted-foreground">
        Bật dark mode bằng cách thêm class <code className="text-foreground">dark</code> lên{" "}
        <code className="text-foreground">&lt;html&gt;</code> (hook theme sẽ thêm sau).
      </p>
    </main>
  );
}
