/**
 * função para calcular a porcentagem de progresso
 * @param current número atual de progresso
 * @param total número total de progresso
 * @returns porcentagem calculada entre 0 e 100
 */
export function calculatePercentage(current: number, total: number): number {
  if (total === 0) return 0;
  return Math.min(Math.max((current / total) * 100, 0), 100);
}
