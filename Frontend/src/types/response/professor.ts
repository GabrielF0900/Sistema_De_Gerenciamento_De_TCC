import type { Professor } from "../professores";
import type { ApiResponse } from "./base";

/**
 * Interface para representar os dados ao obter todos os professores
 */

export interface GetProfessor extends Professor {
  nome_completo: string;
  email: string;
}

/**
 * Interface para os parâmetros de consulta ao obter todos os professores
 * @property {string} [nome] - Nome do professor para filtrar a busca
 * @property {boolean} [disponibilidade] - Disponibilidade do professor (true ou false)
 */

export interface GetAllProfessoresParams {
  nome?: string;
  disponibilidade?: boolean;
}

/**
 * Interface para a resposta da API ao obter todos os professores
 */

export interface GetAllProfessoresResponse extends ApiResponse {
  data?: GetProfessor[];
}
