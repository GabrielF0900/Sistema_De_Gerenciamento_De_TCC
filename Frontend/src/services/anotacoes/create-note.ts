import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { ApiResponse } from "@/types/response/base";

export default async function createNote(
  tccId: number,
  conteudo: string
): Promise<ApiResponse> {
  const response = await api.post(API_CONFIG.ENDPOINTS.ANOTACOES.CREATE, {
    conteudo,
    tccId,
  });
  return response.data;
}
