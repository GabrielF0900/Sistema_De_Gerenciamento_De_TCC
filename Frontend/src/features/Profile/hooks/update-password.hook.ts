import updateUserPassword from "@/services/usuario/update-password";
import type { ApiResponse } from "@/types/response/base";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";

/**
 * Hook para gerenciar a redefinição de senha.
 * Fornece uma função para solicitar a redefinição de senha e um estado de carregamento.
 *
 * @returns {Object} - Objeto contendo a função `resetPassword` e o estado `loading`.
 */
export default function useUpdatePassword() {
  return useMutation<
    ApiResponse,
    AxiosError<ApiResponse>,
    { newPassword: string }
  >({
    mutationFn: (data) => updateUserPassword(data.newPassword),
    onSuccess: () => {
      toast.success("Senha atualizada com sucesso!");
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Erro ao atualizar a senha");
    },
  });
}
