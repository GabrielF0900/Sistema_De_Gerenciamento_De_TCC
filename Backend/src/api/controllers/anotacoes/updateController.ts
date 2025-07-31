import { Request, Response } from "express";
import updateAnotacaoService from "../../services/anotacao/updateService";

/**
 * Controlador para editar uma anotação específica.
 * @param req - Requisição contendo o ID da anotação e os dados a serem atualizados
 * @param res - Resposta a ser enviada ao cliente
 */
export default async function updateAnotacaoController(
  req: Request,
  res: Response
): Promise<Response> {
  const anotacaoId = Number(req.params.id);

  const { conteudo } = req.body;

  // Verifica se o conteúdo da anotação foi fornecido
  if (!conteudo) {
    return res.status(400).json({
      message: "Conteúdo da anotação é obrigatório.",
      success: false,
    });
  }

  // Chama o serviço para atualizar a anotação
  const updatedAnotacao = await updateAnotacaoService(anotacaoId, conteudo);

  return res.status(200).json({
    message: "Anotação atualizada com sucesso.",
    success: true,
    anotacao: updatedAnotacao,
  });
}
