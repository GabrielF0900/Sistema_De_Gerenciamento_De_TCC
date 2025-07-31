import { $Enums } from "@prisma/client";
import { Atividade } from "@prisma/client";

/**
 * Interface para a criação de uma nova atividade.
 */
export interface ICreateAtividade {
  nome: string;
  descricao: string;
  dataEntrega: Date;
  status: $Enums.StatusAtividade;
  tccId: number;
}

/**
 * Interface de dados de uma atividade relacionada a um TCC.
 */
export interface TCCAtividades extends Omit<Atividade, "TCC_id"> {
  id: number;
  nome: string;
  descricao: string;
  status: $Enums.StatusAtividade;
  data_entrega: Date;
  arquivo_url: string | null;
  concluido_em: Date | null;
}

/**
 * Interface para os parâmetros de busca de atividades.
 */

export interface IAtividade extends Atividade {
  Aluno_id: number;
}

export interface IUpdateAtividade {
  nome?: string;
  descricao?: string;
  dataEntrega?: Date;
  status?: $Enums.StatusAtividade;
}
