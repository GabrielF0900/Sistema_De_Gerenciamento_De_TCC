import { useQuery } from "@tanstack/react-query";
import getTccTasks from "@/services/atividades/getTccTasks";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";
import type { GetTasksResponse } from "@/types/response/atividade";

export function useTccTasks(tccId: number) {
  return useQuery<GetTasksResponse, AxiosError<ApiResponse>>({
    queryKey: ["tcc-tasks", tccId],
    queryFn: () => getTccTasks(tccId),
    staleTime: 1000 * 60 * 5, // 5 minutes
    select: (data) => {
      return {
        ...data,
        atividades: data.atividades.map((task) => {
          return {
            ...task,
            status:
              task.status !== "CONCLUIDA" &&
              new Date(task.data_entrega).getTime() < new Date().getTime()
                ? "ATRASADA"
                : task.status,
          };
        }),
      };
    },
  });
}
