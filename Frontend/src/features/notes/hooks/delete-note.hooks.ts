import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";
import deleteNote from "@/services/anotacoes/delete-note";
import { toast } from "react-toastify";
import queryClient from "@/lib/api/react-query";

export default function useDeleteNote() {
  return useMutation<ApiResponse, AxiosError<ApiResponse>, number>({
    mutationFn: (id) => deleteNote(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tcc-notes"],
      });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Erro ao deletar anotação");
    },
  });
}
