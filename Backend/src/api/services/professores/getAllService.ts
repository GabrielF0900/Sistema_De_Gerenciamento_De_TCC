import { ResponseError } from "../../helpers/ResponseError";
import { findAllProfessores } from "../../repositories/professor/professorRepository";
import {
  GetAllProfessoresParams,
  IGetAllProfessores,
} from "../../repositories/professor/interfaces";

/**
 * Serviço para buscar todos os professores
 * @param {GetAllProfessoresParams} params - Parâmetros de busca
 * @returns {Promise<IGetAllProfessores>} Retorna uma lista de professores
 */

export default async function getAllProfessoresService(
  params: GetAllProfessoresParams
): Promise<IGetAllProfessores[]> {
  const professores = await findAllProfessores(params);

  if (!professores || professores.length === 0) {
    throw new ResponseError(404, "Nenhum professor encontrado.");
  }

  return professores;
}
