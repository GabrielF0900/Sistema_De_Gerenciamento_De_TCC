import api from "@/lib/api/axios";
import { API_CONFIG } from "@/config/api";
import type { ApiResponse } from "@/types/response/base";
import type { UpdateTCCRequest } from "@/types/response/tcc";

/**
 * Serviço para atualizar um TCC existente
 * @param id - ID do TCC a ser atualizado
 * @param data - Dados para atualização do TCC
 * @returns Promise com a resposta da API
 */
export default async function updateTCC(
  id: number,
  data: UpdateTCCRequest
): Promise<ApiResponse> {
  const response = await api.put<ApiResponse>(
    API_CONFIG.ENDPOINTS.TCC.UPDATE + id,
    data
  );
  return response.data;
}
