import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import { createReuniaoService } from "../../services/reuniao/createService";

/**
 * Controller para criar uma nova reunião
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const createReuniaoController = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  console.log("=== CRIAR REUNIÃO ===");
  console.log("User ID:", req.user?.id);
  console.log("Body:", req.body);

  const { titulo, descricao, data_agendada, observacoes, tccId } = req.body;
  const userId = Number(req.user?.id);

  // Validar campos obrigatórios
  if (!titulo || typeof titulo !== "string") {
    res.status(400).json({
      success: false,
      message: "Título da reunião é obrigatório.",
    });
    return;
  }

  if (!data_agendada) {
    res.status(400).json({
      success: false,
      message: "Data agendada é obrigatória.",
    });
    return;
  }

  if (!tccId || typeof tccId !== "number") {
    res.status(400).json({
      success: false,
      message: "ID do TCC é obrigatório.",
    });
    return;
  }

  // Validar formato do título
  const tituloFormatado = titulo.trim();
  if (tituloFormatado.length === 0) {
    res.status(400).json({
      success: false,
      message: "Título não pode estar vazio.",
    });
    return;
  }

  if (tituloFormatado.length > 100) {
    res.status(400).json({
      success: false,
      message: "Título deve ter no máximo 100 caracteres.",
    });
    return;
  }

  // Validar descrição se fornecida
  if (descricao && descricao.length > 500) {
    res.status(400).json({
      success: false,
      message: "Descrição deve ter no máximo 500 caracteres.",
    });
    return;
  }

  // Criar a reunião
  const novaReuniao = await createReuniaoService(
    {
      titulo: tituloFormatado,
      descricao: descricao ? descricao.trim() : null,
      data_agendada: new Date(data_agendada),
      observacoes: observacoes ? observacoes.trim() : null,
      TCC_id: tccId,
    },
    userId
  );

  console.log("Reunião criada com sucesso:", novaReuniao?.id);

  res.status(201).json({
    success: true,
    message: "Reunião criada com sucesso!",
  });
};

export default createReuniaoController;
