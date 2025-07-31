import { useMemo } from "react";

/**
 * Hook para calcular os dias restantes entre duas datas
 * @param {Date | string} dataInicio - Data de início do cronograma
 * @param {Date | string} dataEntrega - Data de entrega do cronograma
 * @returns {number | null} - Dias restantes ou null se as datas forem inválidas
 */

export function useCronograma(dataEntrega: Date | string) {
  const diasRestantes = useMemo(() => {
    if (!dataEntrega || dataEntrega === "-") {
      return null;
    }

    const agora = new Date();
    const entrega = new Date(dataEntrega);

    // Verificar se ambas as datas são válidas
    if (isNaN(entrega.getTime())) {
      return null;
    }

    const hoje = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      agora.getDate()
    );

    const entregaLocal = new Date(
      entrega.getFullYear(),
      entrega.getMonth(),
      entrega.getDate()
    );

    const diferencaMs = entregaLocal.getTime() - hoje.getTime();

    if (diferencaMs < 0) {
      return null; // Data de entrega já passou
    }

    return Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
  }, [dataEntrega]);

  return diasRestantes;
}
