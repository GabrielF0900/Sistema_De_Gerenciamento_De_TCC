import { Request, Response } from "express";
import updateAtividadeService from "../../services/atividade/updateService";

/**
 * Controlador para atualizar uma atividade existente.
 * @param req - Requisição contendo os dados da atividade a ser atualizada.
 * @param res - Resposta a ser enviada ao cliente.
 */

export default async function updateAtividadeController(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params; // Obtém o ID da atividade a partir dos parâmetros da rota
  const data = req.body; // Obtém os dados atualizados da atividade do corpo da requisição

  if (!data.nome || !data.descricao || !data.dataEntrega || !data.status) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
      success: false,
    });
  }

  // Chama o serviço para atualizar a atividade
  const atividadeAtualizada = await updateAtividadeService(Number(id), {
    nome: data.nome,
    descricao: data.descricao,
    dataEntrega: new Date(data.dataEntrega),
    status: data.status,
  });

  // Retorna a atividade atualizada com status 200
  return res.status(200).json({
    message: "Atividade atualizada com sucesso",
    success: true,
    atividade: atividadeAtualizada,
  });
}
