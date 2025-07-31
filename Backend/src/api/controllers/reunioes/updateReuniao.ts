import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import updateReuniaoService from "../../services/reuniao/updateService";

/**
 * Controller para atualizar uma reunião existente
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const updateReuniao = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  console.log("=== ATUALIZAR REUNIÃO ===");
  console.log("User ID:", req.user?.id);
  console.log("Reunião ID:", req.params.id);
  console.log("Body:", req.body);

  const userId = req.user?.id;
  const reuniaoId = parseInt(req.params.id, 10);
  const updateData = req.body;

  // Preparar dados para atualização
  const dadosAtualizacao: any = {
    atualizado_em: new Date(),
  };

  // Validar e processar título
  if (updateData.titulo !== undefined) {
    if (
      typeof updateData.titulo !== "string" ||
      updateData.titulo.trim().length < 3
    ) {
      res.status(400).json({
        success: false,
        message: "Título deve ter pelo menos 3 caracteres.",
      });
      return;
    }

    if (updateData.titulo.length > 100) {
      res.status(400).json({
        success: false,
        message: "Título deve ter no máximo 100 caracteres.",
      });
      return;
    }

    dadosAtualizacao.titulo = updateData.titulo.trim();
  }

  // Validar e processar descrição
  if (updateData.descricao !== undefined) {
    if (updateData.descricao && updateData.descricao.length > 500) {
      res.status(400).json({
        success: false,
        message: "Descrição deve ter no máximo 500 caracteres.",
      });
      return;
    }

    dadosAtualizacao.descricao = updateData.descricao?.trim() || null;
  }

  // Validar e processar status
  if (updateData.status !== undefined) {
    const validStatuses = [
      "AGENDADA",
      "REALIZADA",
      "CANCELADA",
      "NAO_COMPARECEU",
    ];
    if (!validStatuses.includes(updateData.status.toUpperCase())) {
      res.status(400).json({
        success: false,
        message:
          "Status inválido. Deve ser um dos: AGENDADA, REALIZADA, CANCELADA, NAO_COMPARECEU.",
      });
      return;
    }

    dadosAtualizacao.status = updateData.status.toUpperCase();
  }

  console.log("Dados de atualização:", dadosAtualizacao);

  const reuniaoAtualizada = await updateReuniaoService(
    {
      id: reuniaoId,
      ...dadosAtualizacao,
      ...updateData,
    },
    userId as number
  );

  console.log("Reunião atualizada com sucesso:", reuniaoAtualizada?.id);

  // Resposta de sucesso
  res.status(200).json({
    success: true,
    message: "Reunião atualizada com sucesso!",
  });
};

export default updateReuniao;
