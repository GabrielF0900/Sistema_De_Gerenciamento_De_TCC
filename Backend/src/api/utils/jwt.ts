import jwt from "jsonwebtoken";
import getJwtConfig from "../config/jwt";

/**
 * Função para gerar um token JWT
 * @param {object} payload - Dados a serem incluídos no token
 * @returns {string} Token JWT assinado
 */
export function generateJwtToken(payload: object): string {
  const jwtConfig = getJwtConfig();
  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
    algorithm: jwtConfig.algorithm,
  });
}

/**
 * Função para verificar um token JWT
 * @param {string} token - Token JWT a ser verificado
 * @returns {object | null} Dados decodificados do token ou null se a verificação falhar
 */
export function verifyJwtToken(token: string): object | null {
  const jwtConfig = getJwtConfig();
  console.log('=== DEBUG verifyJwtToken ===');
  console.log('Token recebido:', token.substring(0, 20) + '...');
  console.log('JWT Secret:', jwtConfig.secret ? 'presente' : 'ausente');
  
  try {
    const decoded = jwt.verify(token, jwtConfig.secret) as object;
    console.log('Token decodificado com sucesso:', decoded);
    return decoded;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
