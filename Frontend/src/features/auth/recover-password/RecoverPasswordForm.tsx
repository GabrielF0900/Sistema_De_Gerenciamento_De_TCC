import { FormError, Input, Label, Submit } from "@/components/ui/form";
import { Link } from "react-router-dom";
import {
  useRecoverPasswordForm,
  type RecoverPasswordFormData,
} from "./recover-password-form-hook";
import useRecoverPassword from "./recover-password-fetch-hook";

/**
 * Componente para o formulário de recuperação de senha.
 * Permite que o usuário insira seu e-mail para solicitar a recuperação de senha.
 */

export default function RecoverPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRecoverPasswordForm();

  const { loading, recoverPassword } = useRecoverPassword();

  const onSubmit = async (data: RecoverPasswordFormData) => {
    await recoverPassword(data.email);
  };
  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">Recuperação de Senha</h2>
        <p className="text-center text-lg font-sans">
          Insira seu e-mail para redefinir sua senha.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-md flex flex-col items-center"
      >
        <div className="w-full mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            className="w-full"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </div>
        <Submit variant="primary" className="w-full" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Email de Recuperação"}
        </Submit>
      </form>
      <div className="flex flex-row items-center justify-center gap-1 text-sm">
        <p className=" font-semibold hover:opacity-85">Lembrou da sua senha?</p>
        <Link to="/login" className="text-primary font-bold hover:opacity-85">
          Voltar ao login
        </Link>
      </div>
    </>
  );
}
