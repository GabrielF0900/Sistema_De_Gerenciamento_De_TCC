import {
  getCoorientador,
  getOrientador,
} from "../../repositories/banca/bancaRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { findTCCById } from "../../repositories/TCC/TCCRepository";
import { GetTCCQuery } from "../../repositories/TCC/interfaces";

/**
 * Serviço para buscar um TCC pelo ID.
 * @returns Lista de TCCs.
 */
export default async function getTccByIdService(
  id: number
): Promise<GetTCCQuery> {
  const tcc = await findTCCById(id);

  if (!tcc) {
    throw new ResponseError(404, "Nenhum TCC encontrado.");
  }

  return tcc;
}
