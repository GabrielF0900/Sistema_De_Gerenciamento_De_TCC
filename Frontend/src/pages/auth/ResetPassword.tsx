
import AuthContainer from "@/features/auth/container/AuthContainer";
import RecoverPasswordForm from "@/features/auth/recover-password/RecoverPasswordForm";
import useTitle from "@/hooks/useTitle";

/**
 * Componente para a página de recuperação de senha.
 * Exibe um formulário para o usuário inserir seu e-mail e solicitar a recuperação de senha.
 */

export default function RecuperacaoSenha() {
  useTitle("Recuperação de Senha | FocoTCC");

  return (
    <div className="bg-secondary w-screen min-h-screen flex justify-center items-center px-4">
      <AuthContainer className="gap-6">
        <RecoverPasswordForm />
      </AuthContainer>
    </div>
  );
}
