/**
 * Tipagem de dados de progresso do TCC
 */
export interface TCCProgress {
  total: number;
  status: string;
  detalhamento: {
    tarefas: {
      pontuacao: number;
      peso: number;
      total: number;
      concluidas: number;
    };
    etapas: {
      pontuacao: number;
      peso: number;
      total: number;
      concluidas: number;
    };
    reunioes: {
      pontuacao: number;
      peso: number;
      agendadas: number;
      realizadas: number;
    };
    defesas: {
      pontuacao: number;
      peso: number;
      preBanca: boolean;
      bancaFinal: boolean;
    };
  };
}
