import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";
import createNote from "@/services/anotacoes/create-note";
import { toast } from "react-toastify";
import queryClient from "@/lib/api/react-query";

export default function useCreateNote() {
  return useMutation<
    ApiResponse,
    AxiosError<ApiResponse>,
    { tccId: number; conteudo: string }
  >({
    mutationFn: ({ tccId, conteudo }) => createNote(tccId, conteudo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tcc-notes"],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Erro ao criar anotação");
    },
  });
}
