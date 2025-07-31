import type { RegisterRequest } from "@/types/response/auth";
import register from "../../../services/auth/register";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../context/useAuth";
import type { UserData } from "@/types/user";

/**
 * Hook para registrar um novo usuário.
 * Este hook fornece a funcionalidade de registro, incluindo o estado de carregamento e a função para registrar um usuário.
 * @return {Function} `registerUser` - Função para registrar um usuário com os dados fornecidos.
 * @return {boolean} `loading` - Estado que indica se a operação de registro está em andamento.
 */

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setSession } = useAuth();

  const registerUser = async (data: RegisterRequest): Promise<void> => {
    setLoading(true);

    try {
      const response = await register(data);

      if (response.success) {
        setSession(response.usuario as UserData, response.token as string);
        navigate("/boas-vindas");
      }

      console.log("Usuário registrado com sucesso");
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(
          error.response?.data.message || "Erro ao registrar usuário"
        );
      } else {
        toast.error("Erro desconhecido ao registrar usuário");
      }
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading };
}
