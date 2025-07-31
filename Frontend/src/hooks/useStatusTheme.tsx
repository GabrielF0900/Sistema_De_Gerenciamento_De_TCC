import type { StatusTCC } from "@/types/tcc";
import { useState, useEffect } from "react";

export type Status = StatusTCC | "PENDENTE" | "ATRASADO";

// Define o tipo do objeto que armazena as cores e nome do status
interface StatusInfo {
  cor: string; // Cor do texto do status
  colorBackground: string; // Cor de fundo do status
  nome: string; // Nome do status formatado para exibir
}

// Objeto que mapeia os nomes dos status para suas cores
const StatusColor = {
  PLANEJAMENTO: {
    cor: "text-blue-900",
    colorBackground: "bg-blue-200",
    nome: "Planejamento",
  },
  DESENVOLVIMENTO: {
    cor: "text-blue-900",
    colorBackground: "bg-blue-200",
    nome: "Desenvolvimento",
  },
  REVISAO: {
    cor: "text-orange-800",
    colorBackground: "bg-orange-300",
    nome: "Revisão",
  },
  FINALIZACAO: {
    cor: "text-amber-900",
    colorBackground: "bg-amber-200",
    nome: "Finalização",
  },
  CONCLUIDO: {
    cor: "text-green-800",
    colorBackground: "bg-green-300",
    nome: "Concluído",
  },
  PENDENTE: {
    cor: "text-neutral-700",
    colorBackground: "bg-neutral-200",
    nome: "Pendente",
  },
  ATRASADO: {
    cor: "text-red-700",
    colorBackground: "bg-red-400",
    nome: "Atrasado",
  },
} satisfies Record<Status, StatusInfo>;

/**
 * Hook para obter o tema de status baseado no status recebido
 * @param {string} statusKey - Chave do status para buscar as cores e nome
 * @returns {StatusInfo | null} - Objeto com as cores e nome do status
 */
export function useStatusTheme(statusKey: Status) {
  // Estado local para armazenar o status atual com cores e nome
  const [stats, setStats] = useState<StatusInfo | null>(null);

  // Efeito que roda sempre que o statusKey mudar para atualizar o estado 'stats'
  useEffect(() => {
    // Busca as cores e dados do status no objeto StatusColor pelo nome normalizado
    const status = StatusColor[statusKey];

    // Se existir o status, atualiza o estado com as cores e o nome correto para exibir
    if (status) {
      setStats({
        cor: status.cor,
        colorBackground: status.colorBackground,
        nome: status.nome,
      });
    }
  }, [statusKey]);

  // Retorna o objeto com as cores e nome para ser usado no componente
  return stats;
}
