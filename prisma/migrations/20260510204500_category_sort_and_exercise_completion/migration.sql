-- Category display order / coming-soon (bỏ qua nếu đã có từ `db push`)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'Category'
      AND column_name = 'sortOrder'
  ) THEN
    ALTER TABLE "Category" ADD COLUMN "sortOrder" INTEGER NOT NULL DEFAULT 0;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'Category'
      AND column_name = 'isComingSoon'
  ) THEN
    ALTER TABLE "Category" ADD COLUMN "isComingSoon" BOOLEAN NOT NULL DEFAULT false;
  END IF;
END $$;

-- Tiến độ cho user đã đăng nhập
CREATE TABLE IF NOT EXISTS "ExerciseCompletion" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "solvedCorrectly" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExerciseCompletion_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "ExerciseCompletion_userId_exerciseId_key"
  ON "ExerciseCompletion"("userId", "exerciseId");

CREATE INDEX IF NOT EXISTS "ExerciseCompletion_userId_idx" ON "ExerciseCompletion"("userId");

CREATE INDEX IF NOT EXISTS "ExerciseCompletion_exerciseId_idx" ON "ExerciseCompletion"("exerciseId");

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'ExerciseCompletion_userId_fkey'
  ) THEN
    ALTER TABLE "ExerciseCompletion"
      ADD CONSTRAINT "ExerciseCompletion_userId_fkey"
      FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'ExerciseCompletion_exerciseId_fkey'
  ) THEN
    ALTER TABLE "ExerciseCompletion"
      ADD CONSTRAINT "ExerciseCompletion_exerciseId_fkey"
      FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;
