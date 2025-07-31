import { $Enums } from "@prisma/client";

export interface GetTCCQuery {
  id: number;
  titulo: string;
  tema: string;
  resumo: string;
  dataInicio: Date | null;
  dataConclusao: Date | null;
  statusAtual: $Enums.StatusTCC;
  criado_em: Date;
  atualizado_em: Date;
  finalizado_em?: Date | null;
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
}

export interface ICreateTCC {
  titulo: string;
  tema: string;
  resumo: string;
  dataInicio?: Date;
  dataConclusao?: Date;
  statusAtual: $Enums.StatusTCC;
  alunoId: number;
  areaConhecimentoId: number;
  orientadorId: number;
  coorientadorId?: number;
}

export interface IUpdateTCC {
  titulo?: string;
  tema?: string;
  resumo?: string;
  dataInicio?: Date | null;
  dataConclusao?: Date | null;
  statusAtual?: $Enums.StatusTCC;
  orientadorId?: number;
  coorientadorId?: number;
  areaConhecimentoId?: number;
}

export interface CreateTCCPayload {
  id: number;
  titulo: string;
  tema: string;
  curso: string;
  resumo: string;
  dataInicio: Date | null;
  dataConclusao: Date | null;
  statusAtual: $Enums.StatusTCC;
  criado_em: Date;
  aluno: {
    id: number;
    nome: string;
    curso: string;
    email: string;
  };
  areaConhecimento: {
    id?: number;
    nome?: string;
  };
  orientador: {
    id: number;
    nome: string;
    area_atuacao: string;
    email: string;
  };
  coorientador?:
    | {
        id: number;
        nome: string;
        area_atuacao: string;
        email: string;
      }
    | "Não definido";
}
