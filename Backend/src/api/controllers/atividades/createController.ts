import { Request, Response } from "express";
import createAtividadeService from "../../services/atividade/createService";

/**
 * Controller para criar uma nova atividade.
 * Recebe os dados da atividade via request body e chama o serviço de criação.
 */

export default async function createAtividadeController(
  req: Request,
  res: Response
): Promise<Response> {
  const { nome, descricao, dataEntrega, status, tccId } = req.body;

  // Validação básica (ajustada para campos existentes no schema)
  if (!nome || !descricao || !dataEntrega || !status || !tccId) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
      success: false,
    });
  }

  // Criar a atividade
  const atividade = await createAtividadeService({
    nome,
    descricao,
    dataEntrega: new Date(dataEntrega),
    status: status.toUpperCase(),
    tccId: parseInt(tccId),
  });

  return res.status(201).json({
    message: "Atividade criada com sucesso!",
    success: true,
    atividade: atividade,
  });
}
