import login from "@/services/auth/login";
import { AxiosError, isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../context/useAuth";
import type { UserData } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/response/base";
import type { LoginFormData } from "./login-form-hook";
import type { AuthResponse } from "@/types/response/auth";

/**
 * Hook para realizar o login de um usuário.
 * Este hook fornece a funcionalidade de login, incluindo o estado de carregamento e a função para realizar o login.
 * @return {Function} `loginUser` - Função para realizar o login com email e senha.
 * @return {boolean} `loading` - Estado que indica se a operação de login está em andamento.
 */

export function useLogin() {
  const navigate = useNavigate();
  const { setSession } = useAuth();

  const mutation = useMutation<
    AuthResponse,
    AxiosError<ApiResponse>,
    LoginFormData
  >({
    mutationFn: (data: LoginFormData) => login(data.email, data.password),
    onSuccess: (data) => {
      setSession(data.usuario as UserData, data.token as string);
      toast.success("Login realizado com sucesso!", {
        autoClose: 3000,
      });
      navigate("/dashboard");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Erro ao realizar login", {
          autoClose: 3000,
        });
      } else {
        toast.error("Erro desconhecido ao realizar login", {
          autoClose: 3000,
        });
      }
    },
  });

  return { loginUser: mutation.mutate, loading: mutation.isPending };
}
