import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { GetTasksResponse } from "@/types/response/atividade";

export default async function getTccTasks(
  tccId: number
): Promise<GetTasksResponse> {
  const response = await api.get(
    API_CONFIG.ENDPOINTS.ATIVIDADES.GET_BY_TCC + tccId
  );
  return response.data;
}
