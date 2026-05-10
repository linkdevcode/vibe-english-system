"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { setSessionCookie } from "@/lib/session";

export type AuthActionState =
  | { ok: false; error: string; fieldErrors?: Record<string, string> }
  | { ok: true }
  | null;

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function registerAction(
  _prev: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");

  if (!name) {
    return {
      ok: false,
      error: "VALIDATION_ERROR",
      fieldErrors: { name: "Vui lòng nhập họ tên." },
    };
  }

  if (!email) {
    return {
      ok: false,
      error: "VALIDATION_ERROR",
      fieldErrors: { email: "Vui lòng nhập email." },
    };
  }

  if (password.length < 8) {
    return {
      ok: false,
      error: "VALIDATION_ERROR",
      fieldErrors: {
        password: "Mật khẩu tối thiểu 8 ký tự.",
      },
    };
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return {
        ok: false,
        error: "EMAIL_EXISTS",
      };
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
      },
    });
  } catch (e) {
    console.error("registerAction", e);
    return {
      ok: false,
      error: "UNKNOWN",
    };
  }

  redirect("/auth/login?registered=1");
}

export async function loginAction(
  _prev: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return {
      ok: false,
      error: "VALIDATION_ERROR",
    };
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return {
        ok: false,
        error: "INVALID_CREDENTIALS",
      };
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
      return {
        ok: false,
        error: "INVALID_CREDENTIALS",
      };
    }

    await setSessionCookie(user.id);
  } catch (e) {
    console.error("loginAction", e);
    return {
      ok: false,
      error: "UNKNOWN",
    };
  }

  redirect("/dashboard");
}
