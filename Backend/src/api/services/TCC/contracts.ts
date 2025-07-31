import { $Enums, TCC } from "@prisma/client";

export interface ICreateTCCService {
  titulo: string;
  tema: string;
  resumo: string;
  dataInicio?: string;
  dataConclusao?: string;
  statusAtual: $Enums.StatusTCC;
  alunoId: number;
  areaConhecimento: string;
  orientadorNome: string; // Nome que será buscado no banco de dados
  coorientadorNome?: string; // Nome que será buscado no banco de dados
}

export interface CreateTCCServicePayload {
  id: number;
  titulo: string;
  tema: string;
  curso: string;
  resumo: string;
  dataInicio: Date;
  dataConclusao: Date;
  statusAtual: string;
  criado_em: Date;
  aluno: {
    id: number;
    nome: string;
    curso: string;
  };
  areaConhecimento: {
    id: number;
    nome: string;
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

export interface IUpdateTCCService {
  titulo?: string;
  tema?: string;
  resumo?: string;
  dataInicio?: Date | null;
  dataConclusao?: Date | null;
  statusAtual?: $Enums.StatusTCC;
  areaConhecimento?: string; // Nome da área de conhecimento
  orientadorNome?: string; // Nome que será buscado no banco de dados
  coorientadorNome?: string; // Nome que será buscado no banco de dados
}
