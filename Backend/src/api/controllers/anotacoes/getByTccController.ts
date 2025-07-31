import { Request, Response } from "express";
import getAnotacoesByTccService from "../../services/anotacao/getByTccService";

/**
 * Controlador para obter anotações associadas a um TCC.
 * @param req - Requisição contendo o ID do TCC
 * @param res - Resposta a ser enviada ao cliente
 */

export default async function getAnotacoesByTccController(
  req: Request,
  res: Response
): Promise<Response> {
  const tccId = Number(req.params.id);

  const anotacoes = await getAnotacoesByTccService(tccId);

  return res.status(200).json({
    message: "Anotações obtidas com sucesso.",
    success: true,
    anotacoes: anotacoes,
  });
}
