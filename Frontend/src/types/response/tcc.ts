import type { StatusTCC } from "../tcc";
import type { ApiResponse } from "./base";

/**
 * Tipagem de dados da resposta da API para obter TCC
 */
export interface GetTCCResponse extends ApiResponse {
  tcc: {
    id: number;
    titulo: string;
    tema: string;
    resumo: string;
    dataInicio: Date | null;
    dataConclusao: Date | null;
    statusAtual: StatusTCC;
    criado_em: Date;
    atualizado_em: Date;
    progresso_geral: number;
    aluno: {
      id: number;
      nome: string;
      curso: string;
      email: string;
    };
    areaConhecimento?: string;
    orientador?:
      | {
          id: number;
          nome: string;
          area_atuacao: string;
          email: string;
        }
      | "Não definido";
    coorientador?:
      | {
          id: number;
          nome: string;
          area_atuacao: string;
          email: string;
        }
      | "Não definido";
    tarefas: {
      total: number;
      concluidas: number;
    };
    etapas: {
      total: number;
      concluidas: number;
    };
    anotacoes: {
      total: number;
      esta_semana: number;
    };
    reunioes: {
      total: number;
      agendadas: number;
    };
  };
}

export interface RegisterTCCRequest {
  titulo: string;
  tema: string;
  resumo: string;
  dataInicio: string;
  dataConclusao?: string;
  statusAtual: StatusTCC;
  areaConhecimento: string;
  orientadorNome: string;
  coorientadorNome?: string;
}

export interface UpdateTCCRequest {
  titulo: string;
  tema: string;
  resumo: string;
  dataInicio: string;
  dataConclusao?: string;
  statusAtual: StatusTCC;
  areaConhecimento: string;
  orientadorNome: string;
  coorientadorNome?: string;
}
