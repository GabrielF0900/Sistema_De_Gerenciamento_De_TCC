import { useQuery } from "@tanstack/react-query";
import getUserProfile from "@/services/usuario/profile";
import type { UserProfileResponse } from "@/types/response/usuario";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";

/**
 * Hook para obter o perfil do usuário autenticado
 * @returns {UserProfileResponse | null} Retorna os dados do perfil do usuário ou null se não estiver carregando
 */
export function useUserProfile() {
  return useQuery<UserProfileResponse, AxiosError<ApiResponse>>({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    retry: false,
    staleTime: Infinity, // Dados são considerados frescos indefinidamente
  });
}
