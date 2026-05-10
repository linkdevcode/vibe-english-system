"use client";

import type { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";

type AuthSubmitButtonProps = {
  children: ReactNode;
  pendingLabel?: string;
};

export function AuthSubmitButton({
  children,
  pendingLabel = "Đang xử lý…",
}: AuthSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="gradient"
      size="lg"
      className="w-full"
      disabled={pending}
      aria-busy={pending}
    >
      {pending ? pendingLabel : children}
    </Button>
  );
}
