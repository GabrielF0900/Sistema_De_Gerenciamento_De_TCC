import api from "@/lib/api/axios";
import type { AuthResponse } from "@/types/response/auth";

/**
 * Função para realizar o login do usuário.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário.
 * @returns {Promise<AuthResponse>} - Retorna uma Promise que resolve com os dados do usuário autenticado.
 */
export default async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("auth/login", {
    email,
    password,
  });
  return response.data;
}
