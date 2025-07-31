import deleteAnotacaoService from "../../services/anotacao/deleteAnotacao";
import { Request, Response } from "express";

/**
 * Controller para deletar uma anotação
 * @param req - Requisição HTTP
 * @param res - Resposta HTTP
 */
export default async function deleteAnotacaoController(
  req: Request,
  res: Response
): Promise<Response> {
  const anotacaoId = Number(req.params.id);

  // Chama o serviço para deletar a anotação
  await deleteAnotacaoService(anotacaoId);

  // Retorna uma resposta de sucesso
  return res
    .status(200)
    .json({ message: "Anotação deletada com sucesso.", success: true });
}
