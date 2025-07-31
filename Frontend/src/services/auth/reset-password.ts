import api from "@/lib/api/axios";
import { API_CONFIG } from "@/config/api";
import type { ApiResponse } from "@/types/response/base";
import type { ResetPasswordRequest } from "@/types/response/auth";

/**
 * Função para solicitar a redefinição de senha do usuário.
 * Envia o ID do usuário, token de redefinição e nova senha para a API.
 *
 * @param {ResetPasswordRequest} data - Dados necessários para redefinir a senha.
 * @returns {Promise<ApiResponse>} - Resposta da API com mensagem e status de sucesso.
 */
export default async function fetchResetPassword(
  data: ResetPasswordRequest
): Promise<ApiResponse> {
  const response = await api.post<ApiResponse>(
    API_CONFIG.ENDPOINTS.AUTH.RESET_PASSWORD,
    data
  );

  return response.data;
}
