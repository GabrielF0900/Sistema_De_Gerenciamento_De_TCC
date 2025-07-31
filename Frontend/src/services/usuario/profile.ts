import api from "@/lib/api/axios";
import type { UserProfileResponse } from "@/types/response/usuario";
import { API_CONFIG } from "@/config/api";

/**
 * Serviço para obter o perfil do usuário autenticado
 * @returns {Promise<UserProfileResponse>} Retorna o perfil do usuário
 */
export default async function getUserProfile(): Promise<UserProfileResponse> {
  const response = await api.get<UserProfileResponse>(
    API_CONFIG.ENDPOINTS.USUARIO.GET_PROFILE
  );
  return response.data;
}
