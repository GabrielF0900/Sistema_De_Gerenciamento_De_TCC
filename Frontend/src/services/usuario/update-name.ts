import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { ApiResponse } from "@/types/response/base";

/**
 * Função para atualizar o nome do usuário.
 * @param newName - Novo nome do usuário.
 * @returns Promise com a resposta da API.
 */
export default async function updateUserName(
  newName: string
): Promise<ApiResponse> {
  const response = await api.patch<ApiResponse>(
    API_CONFIG.ENDPOINTS.USUARIO.UPDATE_NAME,
    {
      nome_completo: newName,
    }
  );

  return response.data;
}
