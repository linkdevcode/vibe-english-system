-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('MCQ', 'CLOZE', 'LISTEN_MCQ');

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "type" "ExerciseType" NOT NULL,
    "payload" JSONB NOT NULL,
    "lessonId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Exercise_lessonId_idx" ON "Exercise"("lessonId");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;
