import AuthContainer from "@/features/auth/container/AuthContainer";
import ResetPasswordForm from "@/features/auth/reset-password/ResetPasswordForm";
import useTitle from "@/hooks/useTitle";

/**
 * Componente para a página de confirmação de redefinição de senha.
 * Exibe um formulário para o usuário definir uma nova senha após solicitar a redefinição.
 */

export function ConfirmResetPassword() {
  useTitle("Redefinir Senha | FocoTCC");

  return (
    <div className="bg-secondary w-full min-h-screen flex justify-center items-center p-4">
      <AuthContainer>
        <ResetPasswordForm />
      </AuthContainer>
    </div>
  );
}
