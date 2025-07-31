import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type {
  GetAllProfessoresResponse,
  GetAllProfessoresParams,
} from "@/types/response/professor";

/**
 * Função para obter todos os professores
 * @param {GetAllProfessoresParams} params - Parâmetros de consulta para filtrar os professores
 * @property {string} [params.nome] - Nome do professor para filtrar a busca
 * @property {boolean} [params.disponibilidade] - Disponibilidade do professor (true ou false)
 * @returns {Promise<GetAllProfessoresResponse>} Lista de professores
 */

export default async function getAllProfessores(
  params?: GetAllProfessoresParams
): Promise<GetAllProfessoresResponse> {
  const response = await api.get<GetAllProfessoresResponse>(
    API_CONFIG.ENDPOINTS.PROFESSORES.GET_ALL,
    {
      params: {
        ...params, // Inclui os parâmetros de consulta se fornecidos
      },
    }
  );
  return response.data;
}
