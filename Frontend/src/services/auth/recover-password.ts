import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { ApiResponse } from "@/types/response/base";

/**
 * Função para solicitar recuperação de senha
 * @param email - Email do usuário para o qual a recuperação de senha será solicitada
 * @return {Promise<ApiResponse>} - Resposta da API com mensagem e status de sucesso
 */

export default async function requestPasswordReset(
  email: string
): Promise<ApiResponse> {
  const response = await api.post<ApiResponse>(
    API_CONFIG.ENDPOINTS.AUTH.REQUEST_PASSWORD_RESET,
    {
      email: email,
    }
  );

  return response.data;
}
