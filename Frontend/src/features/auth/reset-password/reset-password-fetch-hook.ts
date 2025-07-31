import { useState } from "react";
import { toast } from "react-toastify";
import fetchResetPassword from "@/services/auth/reset-password";
import { isAxiosError } from "axios";
import type { ResetPasswordRequest } from "@/types/response/auth";

/**
 * Hook para gerenciar a redefinição de senha.
 * Fornece uma função para solicitar a redefinição de senha e um estado de carregamento.
 *
 * @returns {Object} - Objeto contendo a função `resetPassword` e o estado `loading`.
 */
export default function useResetPassword() {
  const [loading, setLoading] = useState(false);

  const resetPassword = async (data: ResetPasswordRequest): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetchResetPassword(data);

      if (response.success) {
        toast.success("Senha redefinida com sucesso!");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Erro ao redefinir senha", {
            
        });
      } else {
        toast.error("Erro desconhecido ao redefinir senha");
      }
    } finally {
      setLoading(false);
    }
  };

  return { resetPassword, loading };
}
