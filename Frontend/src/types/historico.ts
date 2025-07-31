export type AcoesHistorico = "CRIAR" | "ALTERAR" | "EXCLUIR" | "ATUALIZAR" | "CANCELAR";

export type EntidadesHistorico =
  | "TCC"
  | "ATIVIDADE"
  | "COMENTARIO"
  | "ANOTACAO"
  | "ETAPA_TCC"
  | "REUNIAO"
  | "DEFESA";

export interface HistoricoTCC {
  id: number;
  acao: AcoesHistorico;
  entidade: EntidadesHistorico;
  entidadeId: number;
  descricao: string;
  detalhes?: string;
  feito_em: Date;
  Usuario: {
    id: number;
    nome: string;
  };
}
