import { ResponseError } from "../../helpers/ResponseError";
import { findAllAlunos } from "../../repositories/aluno/alunoRepository";
import { GetAlunos } from "../../repositories/aluno/interfaces";

/**
 * Serviço para buscar todos os alunos
 * @returns {Promise<GetAlunos[]>} Retorna uma lista de alunos
 */
export async function getAllAlunosService(): Promise<GetAlunos[]> {
  const alunos = await findAllAlunos();

  if (!alunos || alunos.length === 0) {
    throw new ResponseError(404, "Nenhum aluno encontrado.");
  }

  return alunos;
}
