import { RequestWithUser } from "../../types/auth";
import { Response } from "express";
import getAlunoTCCService from "../../services/TCC/getAlunoTCCService";

/**
 * Controlador para buscar o TCC de um aluno pelo ID do usuário.
 * @param req - Requisição contendo os dados do usuário.
 * @param res - Resposta a ser enviada ao cliente.
 */

export default async function getTCCByAlunoController(
  req: RequestWithUser,
  res: Response
): Promise<Response> {
  const userId = Number(req.user?.id);

  const tcc = await getAlunoTCCService(userId);

  return res.status(200).json({
    success: true,
    message: "TCC encontrado com sucesso",
    tcc,
  });
}
