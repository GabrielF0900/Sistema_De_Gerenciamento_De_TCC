import {
  Button,
  FormError,
  Input,
  InputPassword,
  Label,
} from "@/components/ui/form";
import useRegister from "./fetchRegisterAPI";
import { useRegisterForm, type RegisterFormData } from "./register-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRegisterForm();

  const { registerUser } = useRegister();

  const onHandleRegister = async (data: RegisterFormData) => {
    await registerUser({
      nome_completo: data.nome_completo,
      email: data.email,
      curso: data.curso,
      senha: data.senha,
      tipo: data.tipo,
    });
  };

  return (
    <>
      {/* Input Fields Section */}
      <form
        className="flex flex-col gap-4 font-sans font-semibold"
        onSubmit={handleSubmit(onHandleRegister)}
      >
        <div className="flex-1">
          <Label htmlFor="Nome">Nome Completo</Label>
          <Input
            type="text"
            id="Nome"
            placeholder="Digite seu nome completo"
            className="w-full"
            {...register("nome_completo")}
          />
          {errors.nome_completo && (
            <FormError>{errors.nome_completo.message}</FormError>
          )}
        </div>

        <div className="flex-1">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Digite seu email"
            className="w-full"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </div>

        <div className="flex-1">
          <Label htmlFor="curso">Curso</Label>
          <Input
            type="text"
            id="curso"
            placeholder="Digite seu Curso"
            className="w-full"
            {...register("curso")}
          />
          {errors.curso && <FormError>{errors.curso.message}</FormError>}
        </div>

        <div className="flex-1">
          <Label htmlFor="senha">Senha</Label>
          <InputPassword
            id="senha"
            placeholder="Digite sua senha"
            className="w-full"
            {...register("senha")}
          />
          {errors.senha && <FormError>{errors.senha.message}</FormError>}
        </div>

        <div className="flex-1">
          <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
          <InputPassword
            id="confirmarSenha"
            placeholder="Confirme sua senha"
            className="w-full"
            {...register("confirmar_senha")}
          />
          {errors.confirmar_senha && (
            <FormError>{errors.confirmar_senha.message}</FormError>
          )}
        </div>

        <Input
          type="hidden"
          value="aluno"
          className="hidden"
          {...register("tipo")}
        />

        <Button type="submit" variant="primary" className="flex-1 mt-3">
          {isSubmitting ? <span className="animate-spin"></span> : null}
          Criar Conta
        </Button>
      </form>
    </>
  );
}

export default Register;
