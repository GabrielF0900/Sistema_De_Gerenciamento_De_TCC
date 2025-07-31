import { Request, Response } from "express";
import GetOrientadorTCCsProgressService from "../../services/progresso-tcc/getOrientadorTCCsProgress";

/**
 * Controlador para obter o progresso de todos os TCCs de um professor.
 * @param req - Requisição Express contendo o ID do professor.
 * @param res - Resposta Express para enviar os dados do progresso.
 */
export default async function getOrientadorTCCsProgressController(
  req: Request,
  res: Response
): Promise<Response> {
  const professorId = parseInt(req.params.id, 10);

  const tccsProgress = await GetOrientadorTCCsProgressService(professorId);

  return res.status(200).json({
    message: "Progresso dos TCCs obtido com sucesso.",
    success: true,
    progressos: tccsProgress,
  });
}
