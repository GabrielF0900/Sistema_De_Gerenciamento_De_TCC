import {
  Input,
  Button,
  Label,
  InputPassword,
  FormError,
} from "@/components/ui/form";
import { Link } from "react-router-dom";
import { useLoginForm, type LoginFormData } from "./login-form-hook";
import { useLogin } from "./fetchLoginAPI";

/**
 * Componente de Login.
 * Este componente exibe um formulário de login com campos para email e senha,
 * e um link para recuperação de senha.
 * Ao enviar o formulário, redireciona para o Dashboard principal.
 */
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm();

  const { loginUser, loading } = useLogin();

  const handleLogin = (data: LoginFormData) => {
    loginUser(data);
  };

  return (
    <>
      <form
        className="w-full flex flex-col items-center gap-3 font-sans font-semibold"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="w-full flex flex-col gap-4">
          <div className="flex-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu email"
              className="w-full"
              {...register("email")}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>
          <div className="flex-1">
            <Label htmlFor="password">Senha</Label>
            <InputPassword
              id="password"
              placeholder="Digite sua senha"
              className="w-full"
              {...register("password")}
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
        </div>

        <Link
          to="/recuperar-senha"
          className="flex items-center justify-center text-primary font-semibold hover:opacity-85"
        >
          Esqueci a senha
        </Link>

        <Button type="submit" variant="primary" className="w-full">
          {loading && <span className="animate-spin"></span>}
          Entrar
        </Button>
      </form>
    </>
  );
}

export default Login;
