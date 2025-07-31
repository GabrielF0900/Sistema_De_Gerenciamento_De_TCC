import { jwtDecode } from "jwt-decode";

/**
 * Verifica se o token JWT está expirado.
 * @param {string} token - O token JWT a ser verificado.
 * @returns {boolean} - Retorna true se o token estiver expirado, caso contrário, false.
 */

export default function isTokenExpired(token: string): boolean {
  try {
    const { exp } = jwtDecode(token) as { exp: number };
    return exp * 1000 < Date.now();
  } catch {
    return true;
  }
}
