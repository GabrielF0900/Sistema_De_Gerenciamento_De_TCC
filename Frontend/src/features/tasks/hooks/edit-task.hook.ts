import { useMutation } from "@tanstack/react-query";
import updateTccTask from "@/services/atividades/update";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";
import type { UpdateTaskRequest } from "@/types/response/atividade";
import { toast } from "react-toastify";
import queryClient from "@/lib/api/react-query";

export default function useEditTask() {
  return useMutation<
    ApiResponse,
    AxiosError<ApiResponse>,
    { taskId: number; data: UpdateTaskRequest }
  >({
    mutationFn: ({ taskId, data }) => updateTccTask(taskId, data),
    onSuccess: () => {
      toast.success("Tarefa atualizada com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["tcc-tasks"],
      });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Erro ao atualizar tarefa. Tente novamente."
      );
    },
  });
}
