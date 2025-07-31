import { findAllTCCs } from "../../repositories/TCC/TCCRepository";
import { GetTCCQuery } from "../../repositories/TCC/interfaces";
import { ResponseError } from "../../helpers/ResponseError";

/**
 * Serviço para buscar todos os TCCs.
 * @returns Lista de TCCs.
 */
export default async function getAllTCCsService(): Promise<GetTCCQuery[]> {
  const tccs = await findAllTCCs();

  if (!tccs || tccs.length === 0) {
    throw new ResponseError(404, "Nenhum TCC encontrado.");
  }

  return tccs;
}
