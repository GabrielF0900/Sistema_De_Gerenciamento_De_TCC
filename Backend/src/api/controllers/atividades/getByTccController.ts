import { Request, Response } from "express";
import getAtividadesByTccService from "../../services/atividade/getByTCCService";

/**
 * Controlador para buscar todas as atividades de um TCC específico.
 */

export default async function getByTccController(
  req: Request,
  res: Response
): Promise<Response> {
  const tccId = parseInt(req.params.id, 10);

  const atividades = await getAtividadesByTccService(tccId);

  return res.status(200).json({
    message: "Atividades encontradas com sucesso",
    success: true,
    atividades: atividades,
  });
}
