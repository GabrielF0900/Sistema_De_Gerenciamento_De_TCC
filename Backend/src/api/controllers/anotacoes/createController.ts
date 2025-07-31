import { Request, Response } from "express";
import { createAnotacaoService } from "../../services/anotacao/createService";

/**
 * Controlador para criar uma nova anotação associada a um TCC.
 * @param req - Requisição contendo o conteúdo da anotação e o ID do TCC
 * @param res - Resposta a ser enviada ao cliente
 */
export async function createAnotacaoController(
  req: Request,
  res: Response
): Promise<Response> {
  const { conteudo, tccId } = req.body;

  // Validações simples
  if (!conteudo) {
    return res.status(400).json({
      message: "Conteúdo da anotação é obrigatório.",
      success: false,
    });
  }

  const anotacao = await createAnotacaoService(conteudo, tccId);

  return res.status(201).json({
    message: "Anotação criada com sucesso.",
    success: true,
    anotacao: anotacao,
  });
}
