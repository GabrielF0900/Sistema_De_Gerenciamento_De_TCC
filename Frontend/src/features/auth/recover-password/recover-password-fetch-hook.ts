import { useState } from "react";
import requestPasswordReset from "@/services/auth/recover-password";
import { toast } from "react-toastify";
import { isAxiosError } from "axios";

/**
 * Hook para gerenciar a recuperação de senha.
 * Fornece uma função para solicitar a recuperação de senha e um estado de carregamento.
 *
 * @returns {Object} - Objeto contendo a função `recoverPassword` e o estado `loading`.
 */

export default function useRecoverPassword() {
  const [loading, setLoading] = useState(false);

  const recoverPassword = async (email: string): Promise<void> => {
    setLoading(true);
    try {
      const response = await requestPasswordReset(email);

      if (response.success) {
        toast.success("Email de recuperação enviado com sucesso!");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(
          error.response?.data.message ||
            "Erro ao solicitar recuperação de senha"
        );
      } else {
        toast.error("Erro desconhecido ao solicitar recuperação de senha");
      }
    } finally {
      setLoading(false);
    }
  };

  return { recoverPassword, loading };
}
