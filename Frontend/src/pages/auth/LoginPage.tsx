import AuthContainer from "@/features/auth/container/AuthContainer";
import LoginContainer from "@/features/auth/container/LoginContainer";
import Login from "@/features/auth/login/Login";
import useTitle from "@/hooks/useTitle";

/**
 * Página de Login.
 */

export default function LoginPage() {
  useTitle("Login | FocoTCC");

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary p-6">
      <AuthContainer className="max-w-md">
        <LoginContainer>
          <Login />
        </LoginContainer>
      </AuthContainer>
    </div>
  );
}
