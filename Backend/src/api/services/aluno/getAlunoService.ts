import { ResponseError } from "../../helpers/ResponseError";
import { findAlunoById } from "../../repositories/aluno/alunoRepository";
import { IAluno } from "../../repositories/aluno/interfaces";

/**
 * Serviço para obter os detalhes de um aluno pelo ID.
 * @param id - ID do aluno a ser buscado.
 * @returns Promise que resolve com os detalhes do aluno ou null se não encontrado.
 */

export default async function getAlunoService(
  id: number
): Promise<IAluno | null> {
  const aluno = await findAlunoById(id);

  if (!aluno) {
    throw new ResponseError(404, "Aluno não encontrado");
  }

  return aluno;
}
