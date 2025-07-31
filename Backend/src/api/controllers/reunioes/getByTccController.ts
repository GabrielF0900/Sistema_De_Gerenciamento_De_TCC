import { getReunioesByTccService } from "../../services/reuniao/getByTccService";
import { RequestWithUser } from "../../types/auth";
import { Response } from "express";

/**
 * Controller para buscar reuniões por ID de TCC.
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export default async function getReunioesByTccController(
  req: RequestWithUser,
  res: Response
): Promise<Response> {
  const tccId = parseInt(req.params.id, 10);

  const reunioes = await getReunioesByTccService(tccId);

  return res.status(200).json({
    success: true,
    message: "Reuniões encontradas com sucesso.",
    reunioes,
  });
}
