import { LoginForm } from "@/components/auth/LoginForm";

type LoginPageProps = {
  searchParams: { registered?: string };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const registeredBanner = searchParams?.registered === "1";

  return <LoginForm registeredBanner={registeredBanner} />;
}
