import { ResponseError } from "../../helpers/ResponseError";
import { findAllAreasConhecimento } from "../../repositories/area-conhecimento/areaConhecimentoRepository";
import { AreaConhecimento } from "@prisma/client";

/**
 * Serviço para buscar todas as áreas de conhecimento.
 * @returns Lista de áreas de conhecimento.
 */
export default async function getAllAreasConhecimentoService(): Promise<
  AreaConhecimento[]
> {
  const areasConhecimento = await findAllAreasConhecimento();

  if (!areasConhecimento || areasConhecimento.length === 0) {
    throw new ResponseError(404, "Nenhuma área de conhecimento encontrada.");
  }

  return areasConhecimento;
}
