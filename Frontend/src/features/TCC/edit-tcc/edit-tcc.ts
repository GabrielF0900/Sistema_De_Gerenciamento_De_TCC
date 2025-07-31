import { useMutation } from "@tanstack/react-query";
import updateTCC from "@/services/tcc/update";
import { useTCCContext } from "@/hooks/useTCCContext";
import QueryClient from "@/lib/api/react-query";
import type { ApiResponse } from "@/types/response/base";
import type { UpdateTCCRequest } from "@/types/response/tcc";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";

/**
 * Hook para Editar um TCC
 * @param onSuccess - Função a ser chamada após a edição bem-sucedida
 * @param onError - Função a ser chamada em caso de erro na edição
 * @returns Mutação para editar o TCC
 */
export function useEditTCC() {
  const { setEditable, refreshTCCData } = useTCCContext();

  return useMutation<
    ApiResponse,
    AxiosError<ApiResponse>,
    UpdateTCCRequest & { id: number }
  >({
    mutationFn: (data) => updateTCC(data.id, { ...data }),
    onSuccess: () => {
      toast.success("TCC atualizado com sucesso", {
        autoClose: 3000,
        hideProgressBar: false,
      });
      setEditable(false);
      QueryClient.invalidateQueries({ queryKey: ["tcc"] });
      refreshTCCData();
    },
    onError: (error) => {
      toast.error(
        error.response?.data.message || "Erro desconhecido ao atualizar TCC",
        {
          autoClose: 3000,
          hideProgressBar: false,
        }
      );
    },
  });
}
