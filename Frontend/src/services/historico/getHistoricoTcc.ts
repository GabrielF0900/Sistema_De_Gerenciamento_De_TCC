import api from "@/lib/api/axios";
import type { GetTCCHistoricoParams } from "@/types/response/historico";
import type { HistoricoTCC } from "@/types/historico";
import type { PaginatedResponse } from "@/types/response/base";
import { API_CONFIG } from "@/config/api";

/**
 * Função para obter o histórico de um TCC específico.
 * @param tccId - ID do TCC para o qual se deseja obter o histórico.
 * @param params - Parâmetros opcionais para filtrar o histórico.
 * @returns Promise com o histórico do TCC.
 */
export default async function getHistoricoTcc(
  tccId: number,
  params?: GetTCCHistoricoParams
): Promise<PaginatedResponse<HistoricoTCC>> {
  const { data } = await api.get<PaginatedResponse<HistoricoTCC>>(
    API_CONFIG.ENDPOINTS.HISTORICO.GET_TCC_HISTORICO + tccId,
    {
      params: {
        ...params,
        page: params?.page || 1, // Define a página padrão como 1 se não for fornecida
        limit: params?.limit || 10, // Define o limite padrão como 10 se não for fornecido
      },
    }
  );
  return data;
}
