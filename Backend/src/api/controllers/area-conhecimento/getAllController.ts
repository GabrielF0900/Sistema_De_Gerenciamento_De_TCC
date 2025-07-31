import { ResponseError } from "../../helpers/ResponseError";
import { Request, Response } from "express";
import getAllAreasConhecimentoService from "../../services/area-conhecimento/getAllService";

/**
 * Serviço para buscar todas as áreas de conhecimento.
 * @returns Lista de áreas de conhecimento.
 */
export default async function getAllAreasConhecimentoController(
  req: Request,
  res: Response
): Promise<void> {
  const areasConhecimento = await getAllAreasConhecimentoService();

  res.status(200).json({
    message: `${areasConhecimento.length} áreas de conhecimento encontradas.`,
    success: true,
    areasConhecimento: areasConhecimento,
  });
}
