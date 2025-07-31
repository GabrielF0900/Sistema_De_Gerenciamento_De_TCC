import { Request, Response } from "express";
import getAtividadeByIdService from "../../services/atividade/getByIdService";

/**
 * Controlador para buscar uma atividade específica pelo ID.
 */

export default async function getAtividadeByIdController(
  req: Request,
  res: Response
): Promise<Response> {
  const atividadeId = parseInt(req.params.id, 10);

  const atividade = await getAtividadeByIdService(atividadeId);

  return res.status(200).json({
    message: "Atividade encontrada com sucesso",
    success: true,
    atividade: atividade,
  });
}
