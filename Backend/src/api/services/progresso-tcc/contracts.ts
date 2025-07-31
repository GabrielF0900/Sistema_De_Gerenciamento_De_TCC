/**
 * Interface para o progresso do TCC
 */
export interface TCCProgress {
  progresso: {
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
  };
}

export interface GetTCCProgress extends TCCProgress {
  id: number;
  titulo: string;
}

/**
 * Interface para o progresso do TCC retornado pelo serviço getTCCProgressByProfessorService
 */
export interface GetTCCProgressByProfessor {
  tcc_id: number;
  titulo: string;
  aluno: string;
  progresso_total: number;
  status_atual: string;
}
