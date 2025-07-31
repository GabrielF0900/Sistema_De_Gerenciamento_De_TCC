import api from "@/lib/api/axios";
import type { GetAllAreaConhecimentoResponse } from "@/types/response/area-conhecimento";
import { API_CONFIG } from "@/config/api";
import type { AxiosRequestConfig } from "axios";

/**
 * Função para obter todas as áreas de conhecimento
 * @returns {Promise<GetAllAreaConhecimentoResponse>} Lista de áreas de conhecimento
 */
export default async function getAllAreaConhecimento(
  options?: AxiosRequestConfig
): Promise<GetAllAreaConhecimentoResponse> {
  const response = await api.get<GetAllAreaConhecimentoResponse>(
    API_CONFIG.ENDPOINTS.AREAS_CONHECIMENTO.GET_ALL,
    {
      ...options,
    }
  );
  return response.data;
}
