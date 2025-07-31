import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import createTask from "@/services/atividades/create";
import type { ApiResponse } from "@/types/response/base";
import type { AxiosError } from "axios";
import type { CreateTaskRequest } from "@/types/response/atividade";
import queryClient from "@/lib/api/react-query";

/**
 * Hook para criar uma nova tarefa.
 * Utiliza a mutação do React Query para gerenciar o estado da criação da tarefa.
 * @returns Mutação para criar a tarefa.
 */

export default function useCreateTask() {
  return useMutation<ApiResponse, AxiosError<ApiResponse>, CreateTaskRequest>({
    mutationFn: createTask,
    onSuccess: () => {
      toast.success("Tarefa criada com sucesso!");
      queryClient.invalidateQueries({
        queryKey: ["tcc-tasks"],
      });
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message ||
          "Erro ao criar tarefa. Tente novamente."
      );
    },
  });
}
