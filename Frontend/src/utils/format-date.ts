/**
 * Função auxiliar para formatar uma data
 * @param {Date | string} date - A data a ser formatada, pode ser um objeto Date ou uma string representando uma data
 * @param {boolean} [withTime=true] - Se true, inclui hora, minuto e segundo na formatação; caso contrário, apenas a data
 * @returns {string} A data formatada em formato "DD/MM/YYYY" ou " DD/MM/YYYY HH:mm:ss" se withTime for true
 */

export default function formatDate(
  date: Date | string,
  withTime: boolean = true
): string {
  if (
    typeof date === "string" &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(date)
  ) {
    const [year, month, day, hour, minute, second] = date
      .split(/[-T:.Z]/)
      .map(Number);
    date = new Date(year, month - 1, day, hour, minute, second);
  } else if (typeof date === "string") {
    date = new Date(date);
  }

  if (!date || date.toString() === "Invalid Date") {
    return "--/--/----";
  }

  if (isNaN(date.getTime())) return "--/--/----";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...(withTime && {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
    hour12: false,
  };

  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
}
