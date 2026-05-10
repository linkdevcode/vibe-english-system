import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

type Body = { exerciseId?: string; solvedCorrectly?: boolean };

export async function POST(request: Request) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json(
      { ok: false as const, reason: "not_signed_in" },
      { status: 401 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false as const, reason: "bad_json" }, { status: 400 });
  }

  const exerciseId = typeof body.exerciseId === "string" ? body.exerciseId.trim() : "";
  if (!exerciseId) {
    return NextResponse.json({ ok: false as const, reason: "missing_exercise_id" }, { status: 400 });
  }

  const solvedCorrectly = Boolean(body.solvedCorrectly);

  const exercise = await prisma.exercise.findUnique({
    where: { id: exerciseId },
    select: { id: true },
  });
  if (!exercise) {
    return NextResponse.json({ ok: false as const, reason: "not_found" }, { status: 404 });
  }

  await prisma.exerciseCompletion.upsert({
    where: {
      userId_exerciseId: {
        userId: session.sub,
        exerciseId,
      },
    },
    create: {
      userId: session.sub,
      exerciseId,
      solvedCorrectly,
    },
    update: {
      ...(solvedCorrectly ? { solvedCorrectly: true } : {}),
    },
  });

  return NextResponse.json({ ok: true as const });
}
