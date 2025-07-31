import { ResponseError } from "../../helpers/ResponseError";
import { findTCCByAlunoId } from "../../repositories/TCC/TCCRepository";
import { GetTCCQuery } from "../../repositories/TCC/interfaces";

/**
 * Serviço para buscar o TCC de um aluno pelo ID.
 * @param id - ID do aluno.
 * @returns O TCC encontrado.
 */

export default async function getAlunoTCCService(
  id: number
): Promise<GetTCCQuery> {
  const tcc = await findTCCByAlunoId(id);

  if (!tcc) {
    throw new ResponseError(404, "TCC não encontrado para o aluno");
  }

  return tcc;
}
