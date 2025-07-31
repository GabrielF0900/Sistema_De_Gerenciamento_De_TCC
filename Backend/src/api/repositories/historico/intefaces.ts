import { $Enums } from "@prisma/client";

/**
 * Interface para criar um histórico de ações no TCC.
 */

export interface ICreateHistoricoTcc {
  acao: $Enums.AcoesHistorico;
  entidade: $Enums.EntidadesHistorico;
  entidadeId: number;
  usuarioId: number;
  tccId: number;
  descricao: string;
  detalhes?: string;
}

/**
 * Interface para o histórico de ações no TCC.
 */
export interface IHistoricoTcc {
  id: number;
  acao: $Enums.AcoesHistorico;
  entidade: $Enums.EntidadesHistorico;
  entidadeId: number;
  descricao: string;
  detalhes?: string;
  feito_em: Date;
  Usuario: {
    id: number;
    nome: string;
  };
}

export interface IHistoricoTccResponse {
  items: IHistoricoTcc[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrevious: boolean;
  totalPages: number;
}

/**
 * Interface para parametros de busca do histórico de ações no TCC.
 */

export interface IHistoricoTccParams {
  acao?: $Enums.AcoesHistorico;
  entidade?: $Enums.EntidadesHistorico;
  periodo?: "hoje" | "semana" | "mes";
  page?: number;
  limit?: number;
}
