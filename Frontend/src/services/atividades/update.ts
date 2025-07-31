import api from "@/lib/api/axios";
import { API_CONFIG } from "@/config/api";
import type { UpdateTaskRequest } from "@/types/response/atividade";

export default async function updateTccTask(
  taskId: number,
  data: UpdateTaskRequest
) {
  const response = await api.put(
    API_CONFIG.ENDPOINTS.ATIVIDADES.UPDATE + taskId,
    {
      ...data,
    }
  );

  return response.data;
}
