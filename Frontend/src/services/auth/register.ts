import api from "@/lib/api/axios";
import type { AuthResponse, RegisterRequest } from "@/types/response/auth";

/**
 * Função para registrar um novo usuário.
 * @param {RegisterRequest} data - Dados do usuário a serem registrados.
 * @returns {Promise<AuthResponse>} Promise que resolve quando o registro for bem-sucedido.
 */
export default async function registerUser(
  data: RegisterRequest
): Promise<AuthResponse> {
  const response = await api.post("auth/register", data);

  return response.data;
}
