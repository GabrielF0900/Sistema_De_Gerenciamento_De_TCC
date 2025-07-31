import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { AnotacoesResponse } from "@/types/response/anotacao";

export default async function getTccNotes(
  tccId: number
): Promise<AnotacoesResponse> {
  const response = await api.get(
    API_CONFIG.ENDPOINTS.ANOTACOES.GET_BY_TCC + tccId
  );
  return response.data;
}
