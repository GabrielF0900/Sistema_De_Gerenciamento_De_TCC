import { findAreaConhecimentoById } from "../../repositories/area-conhecimento/areaConhecimentoRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { GetAreaConhecimento } from "./contracts";

/**
 * Serviço para buscar uma área de conhecimento pelo ID.
 * @param id - ID da área de conhecimento a ser buscada.
 * @returns Área de conhecimento encontrada.
 */
export default async function getAreaConhecimentoByIdService(
  id: number
): Promise<GetAreaConhecimento> {
  const areaConhecimento = await findAreaConhecimentoById(id);

  if (!areaConhecimento) {
    throw new ResponseError(404, "Nenhuma área de conhecimento encontrada.");
  }

  return areaConhecimento;
}
