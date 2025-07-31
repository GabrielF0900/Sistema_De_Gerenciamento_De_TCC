import crypto from "crypto";
import bcrypt from "bcrypt";

/**
 * Função para criptografar uma senha usando bcrypt
 * @param {string} password - A senha a ser criptografada
 * @returns {Promise<string>} Retorna a senha criptografada
 */

export async function encryptPassword(password: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}

/**
 * Função para verificar se a senha fornecida corresponde à senha criptografada
 * @param {string} password - A senha fornecida pelo usuário
 * @param {string} hashedPassword - A senha criptografada armazenada no banco de dados
 * @returns {Promise<boolean>} Retorna true se as senhas corresponderem, caso contrário false
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

/**
 * Função para gerar um token de recuperação de senha
 * @returns {string} Retorna um token aleatório para recuperação de senha
 */
export function generateRecoveryToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Função para criptografar um token usando SHA-256
 * @param {string} token - O token a ser criptografado
 * @returns {string} Retorna o token criptografado
 */
export function encryptToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}
