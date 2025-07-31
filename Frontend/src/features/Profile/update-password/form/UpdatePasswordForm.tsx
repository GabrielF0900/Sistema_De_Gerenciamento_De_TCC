import { FormError, InputPassword, Label, Submit } from "@/components/ui/form";
import useUpdatePassword from "@/features/Profile/hooks/update-password.hook";
import useUpdatePasswordForm from "./update-password-form-hook";
import type { UpdatePasswordFormData } from "./update-password.schema";

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useUpdatePasswordForm();

  const { mutate: updatePassword, isPending: loading } = useUpdatePassword();

  const onSubmit = (data: UpdatePasswordFormData) => {
    updatePassword({
      newPassword: data.novaSenha,
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <div className="flex flex-col sm:flex-row gap-4 flex-1">
        <div className="flex-1">
          <Label htmlFor="nova-senha" className="text-sm">
            Nova Senha
          </Label>
          <InputPassword
            id="nova-senha"
            variant="primary"
            className="w-full"
            placeholder="Digite sua nova senha"
            {...register("novaSenha")}
          />
          {errors.novaSenha && (
            <FormError>{errors.novaSenha.message}</FormError>
          )}
        </div>

        <div className="flex-1">
          <Label htmlFor="confirmar-nova-senha" className="text-sm">
            Confirmar Nova Senha
          </Label>
          <InputPassword
            id="confirmar-nova-senha"
            variant="primary"
            className="w-full"
            placeholder="Confirme sua nova senha"
            {...register("confirmarNovaSenha")}
          />
          {errors.confirmarNovaSenha && (
            <FormError>{errors.confirmarNovaSenha.message}</FormError>
          )}
        </div>
      </div>

      <Submit className="sm:self-start" variant="primary" disabled={loading}>
        Alterar senha
      </Submit>
    </form>
  );
}
