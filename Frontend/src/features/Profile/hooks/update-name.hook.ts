import { useMutation } from "@tanstack/react-query";
import updateUserName from "@/services/usuario/update-name";
import type { ApiResponse } from "@/types/response/base";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import queryClient from "@/lib/api/react-query";

/**
 * Hook para atualizar o nome do usuário.
 * @returns Mutação para atualizar o nome.
 */
export default function useUpdateName() {
  return useMutation<ApiResponse, AxiosError<ApiResponse>, { newName: string }>(
    {
      mutationFn: (data) => updateUserName(data.newName),
      onSuccess: (data) => {
        toast.success(data.message || "Nome atualizado com sucesso!");
        queryClient.invalidateQueries({
          queryKey: ["profile"],
        }); // Invalida a query do perfil para atualizar os dados
      },
      onError: (error) => {
        toast.error(
          error.response?.data.message || "Erro desconhecido ao atualizar nome."
        );
      },
    }
  );
}
