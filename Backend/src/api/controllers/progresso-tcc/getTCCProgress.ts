import { Request, Response } from "express";
import getTCCProgressService from "../../services/progresso-tcc/getTCCProgress";

/**
 * Controlador para obter o progresso de um TCC específico.
 * @param req - Requisição HTTP contendo o ID do TCC.
 * @param res - Resposta HTTP para enviar os dados do progresso.
 * @return Resposta com o progresso do TCC ou erro se não encontrado.
 */

export default async function getTCCProgressController(
  req: Request,
  res: Response
): Promise<Response> {
  const id = Number(req.params.id);

  const progress = await getTCCProgressService(Number(id));

  return res.status(200).json({
    message: "Progresso do TCC obtido com sucesso.",
    success: true,
    ...progress,
  });
}
