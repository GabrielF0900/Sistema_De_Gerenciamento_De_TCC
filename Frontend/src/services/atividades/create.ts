import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { CreateTaskRequest } from "@/types/response/atividade";
import type { ApiResponse } from "@/types/response/base";

/**
 * Função para criar uma nova tarefa.
 * @param taskData - Dados da tarefa a ser criada.
 * @returns Promise com a resposta da API.
 */

export default async function createTask(
  taskData: CreateTaskRequest
): Promise<ApiResponse> {
  const response = await api.post<ApiResponse>(
    API_CONFIG.ENDPOINTS.ATIVIDADES.CREATE,
    taskData,
  );

  return response.data;
}
