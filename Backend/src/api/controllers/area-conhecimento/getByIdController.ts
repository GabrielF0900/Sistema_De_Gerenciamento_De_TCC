import { findAreaConhecimentoById } from "../../repositories/area-conhecimento/areaConhecimentoRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { Request, Response } from "express";

/**
 * Serviço para buscar uma área de conhecimento pelo ID.
 * @param id - ID da área de conhecimento a ser buscada.
 * @returns Área de conhecimento encontrada.
 */
export default async function getAreaConhecimentoByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    throw new ResponseError(400, "ID inválido.");
  }

  const areaConhecimento = await findAreaConhecimentoById(id);

  res.status(200).json({
    message: "Área de conhecimento encontrada.",
    success: true,
    areaConhecimento: areaConhecimento,
  });
}
