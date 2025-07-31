import { FormError, InputPassword, Label, Submit } from "@/components/ui/form";
import { Link, useSearchParams } from "react-router-dom";
import {
  useResetPasswordForm,
  type ResetPasswordFormData,
} from "./reset-password-form-hook";
import useResetPassword from "./reset-password-fetch-hook";

export default function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useResetPasswordForm();

  const { loading, resetPassword } = useResetPassword();

  const [searchParams] = useSearchParams();

  const onSubmit = async (data: ResetPasswordFormData) => {
    const token = searchParams.get("token");
    const userId = searchParams.get("user_id");

    await resetPassword({
      usuario_id: Number(userId),
      token: token || "",
      nova_senha: data.novaSenha,
    });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold">Definir Nova Senha</h1>
        <p>Insira sua nova senha para acessar sua conta.</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div>
          <Label htmlFor="nova-senha">Nova Senha</Label>
          <InputPassword
            id="nova-senha"
            className="w-full"
            placeholder="Digite sua nova senha"
            {...register("novaSenha")}
          />
          {errors.novaSenha && (
            <FormError>{errors.novaSenha.message}</FormError>
          )}
        </div>

        <div>
          <Label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</Label>
          <InputPassword
            id="confirmar-nova-senha"
            className="w-full"
            placeholder="Confirme sua nova senha"
            {...register("confirmarNovaSenha")}
          />
          {errors.confirmarNovaSenha && (
            <FormError>{errors.confirmarNovaSenha.message}</FormError>
          )}
        </div>

        <Submit className="w-full" variant="primary" disabled={loading}>
          {loading ? "Redefinindo..." : "Redefinir Senha"}
        </Submit>
      </form>

      <div className="mt-3 sm:mt-4 text-center">
        <Link to="/login" className="text-primary font-bold hover:opacity-85">
          Voltar ao login
        </Link>
      </div>
    </>
  );
}
