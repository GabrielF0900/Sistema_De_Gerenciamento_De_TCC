import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from "date-fns";

/**
 * Retorna o intervalo de datas baseado no filtro fornecido.
 * @param filtro - Pode ser "hoje", "semana" ou "mes".
 * @returns Um objeto com as propriedades `gte` (maior ou igual) e `lte` (menor ou igual) representando o intervalo de datas.
 */

export function getDateRange(filtro: "hoje" | "semana" | "mes"): {
  gte: Date;
  lte: Date;
} {
  const now = new Date();
  switch (filtro) {
    case "hoje":
      return {
        gte: startOfDay(now),
        lte: endOfDay(now),
      };
    case "semana":
      return {
        gte: startOfWeek(now, { weekStartsOn: 1 }), // Começa na segunda-feira
        lte: endOfWeek(now, { weekStartsOn: 1 }),
      };
    case "mes":
      return {
        gte: startOfMonth(now),
        lte: endOfMonth(now),
      };
    default:
      throw new Error("Filtro de data inválido");
  }
}
