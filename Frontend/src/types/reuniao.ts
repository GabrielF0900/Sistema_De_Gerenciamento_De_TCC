/**
 * Status possível para uma reunião
 */
export type StatusReuniao = 'AGENDADA' | 'REALIZADA' | 'CANCELADA' | 'NAO_COMPARECEU';

/**
 * Interface para os dados de uma reunião
 */
export interface ReuniaoData {
  id: number;
  titulo: string;
  descricao: string | null;
  data_agendada: string;
  data_realizada: string | null;
  status: StatusReuniao;
  observacoes: string | null;
  criado_em: string;
  TCC_id: number;
}

/**
 * Interface para criar uma nova reunião
 */
export interface CreateReuniaoRequest {
  titulo: string;
  descricao?: string;
  data_agendada: string;
  observacoes?: string;
  tcc_id: number;
}

/**
 * Interface para atualizar uma reunião
 */
export interface UpdateReuniaoRequest {
  titulo?: string;
  descricao?: string;
  data_agendada?: string;
  observacoes?: string;
  status?: StatusReuniao;
}

/**
 * Interface para os dados de uma reunião com informações do TCC
 */
export interface ReuniaoWithTCC {
  id: number;
  titulo: string;
  descricao: string | null;
  data_agendada: string;
  data_realizada: string | null;
  status: StatusReuniao;
  observacoes: string | null;
  criado_em: string;
  tcc: {
    id: number;
    titulo: string;
    aluno: string;
    orientador: string | null;
    coorientador: string | null;
  };
}
