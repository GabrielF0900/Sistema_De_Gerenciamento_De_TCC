import { FormError, Input, Label, Submit } from "@/components/ui/form";
import useUpdateName from "@/features/Profile/hooks/update-name.hook";
import { useForm } from "react-hook-form";

export default function UpdateNameForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ novo_nome: string }>();

  const { mutate: updateName, isPending: loading } = useUpdateName();

  const onSubmit = (data: { novo_nome: string }) => {
    updateName({
      newName: data.novo_nome,
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
            Novo Nome
          </Label>
          <Input
            id="nova-senha"
            type="text"
            variant="primary"
            className="w-full"
            placeholder="Digite seu novo nome"
            {...register("novo_nome", {
              required: "O nome é obrigatório",
              minLength: {
                value: 3,
                message: "O nome deve ter pelo menos 3 caracteres",
              },
            })}
          />
          {errors.novo_nome && (
            <FormError>{errors.novo_nome.message}</FormError>
          )}
        </div>
      </div>

      <Submit className="sm:self-start" variant="primary" disabled={loading}>
        Alterar nome
      </Submit>
    </form>
  );
}
