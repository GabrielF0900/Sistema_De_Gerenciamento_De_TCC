import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { ApiResponse } from "@/types/response/base";

/**
 * Função para atualizar a senha do usuário.
 * @param newPassword - Nova senha do usuário.
 * @returns Promise com a resposta da API.
 */
export default async function updateUserPassword(
  newPassword: string
): Promise<ApiResponse> {
  const response = await api.patch<ApiResponse>(
    API_CONFIG.ENDPOINTS.USUARIO.UPDATE_PASSWORD,
    {
      nova_senha: newPassword,
    }
  );

  return response.data;
}
