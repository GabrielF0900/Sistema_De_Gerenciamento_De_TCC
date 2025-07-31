import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { GetTCCResponse } from "@/types/response/tcc";

/**
 * Função para buscar o TCC de um aluno pelo ID
 * @param id - ID do aluno
 * @returns Promise com os dados do TCC
 */
export default async function getTCCById(id: number): Promise<GetTCCResponse> {
  const response = await api.get<GetTCCResponse>(
    API_CONFIG.ENDPOINTS.TCC.GET_BY_ID + id
  );
  return response.data;
}
