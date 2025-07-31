/**
 * Função para validar se um email está no formato correto.
 * @param {string} email - O email a ser validado
 * @returns {boolean} Retorna true se o email for válido, caso contrário, false
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}