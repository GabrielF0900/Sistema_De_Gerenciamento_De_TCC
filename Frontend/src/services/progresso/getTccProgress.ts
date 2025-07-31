import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { TccProgressResponse } from "@/types/response/progresso";

/**
 * Função para obter o progresso de um TCC específico.
 * @param tccId - ID do TCC para o qual se deseja obter o progresso.
 * @returns Promise com os dados do progresso do TCC.
 */

export default async function getTccProgress(
  tccId: number
): Promise<TccProgressResponse> {
  const response = await api.get<TccProgressResponse>(
    API_CONFIG.ENDPOINTS.PROGRESS.GET_TCC_PROGRESS + tccId
  );
  return response.data;
}
