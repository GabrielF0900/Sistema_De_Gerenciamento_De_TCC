import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { GetTCCResponse } from "@/types/response/tcc";

/**
 * Função para obter os dados do TCC de um aluno
 * @param alunoId - ID do aluno
 * @returns Promise com os dados do TCC do aluno
 */
export async function getAlunoTCC(): Promise<GetTCCResponse> {
  const response = await api.get<GetTCCResponse>(
    API_CONFIG.ENDPOINTS.TCC.GET_BY_ALUNO
  );
  return response.data;
}
