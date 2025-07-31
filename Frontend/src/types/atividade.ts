export type StatusAtividade = "PENDENTE" | "CONCLUIDA" | "ATRASADA";

export interface Atividade {
  id: number;
  nome: string;
  descricao: string;
  data_entrega: Date;
  concluido_em: Date | null;
  status: StatusAtividade;
}
