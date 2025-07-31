import type { Aluno } from "../aluno";
import type { ApiResponse } from "./base";

/**
 * Interface representando a resposta da API para um aluno.
 */
export interface AlunoResponse extends ApiResponse {
  aluno: Aluno;
}
