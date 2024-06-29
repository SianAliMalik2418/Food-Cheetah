import { LoginForm } from "@/components/authComponents/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const session = getServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </div>
  );
};
export default LoginPage;
