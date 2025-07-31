import getTccByIdService from "../../services/TCC/getByIdService";
import { Request, Response } from "express";
import { ResponseError } from "../../helpers/ResponseError";

/**
 * Controlador para buscar um TCC pelo ID.
 * @param req - Requisição HTTP.
 * @param res - Resposta HTTP.
 */
export default async function getTccByIdController(
  req: Request,
  res: Response
): Promise<void> {
  const tccId = Number(req.params.id);

  if (isNaN(tccId)) {
    throw new ResponseError(400, "ID inválido.");
  }

  const tcc = await getTccByIdService(tccId);

  res.status(200).json({
    message: "TCC encontrado com sucesso.",
    success: true,
    tcc,
  });
}
