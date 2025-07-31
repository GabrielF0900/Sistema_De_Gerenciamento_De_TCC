import { Anotacao } from "@prisma/client";

export interface IAnotacao extends Anotacao {
  Aluno_id: number; // ID do aluno associado à anotação
}
