import type { User } from "./user";

/**
 * Interface representando os dados de um aluno.
 */

export interface Aluno extends User {
  curso: string;
}
