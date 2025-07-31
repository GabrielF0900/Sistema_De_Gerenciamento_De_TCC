import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import deleteReuniaoService from "../../services/reuniao/deleteService";

/**
 * Controller para deletar/cancelar uma reunião
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const deleteReuniao = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  console.log("=== DELETAR REUNIÃO ===");
  console.log("User ID:", req.user?.id);
  console.log("Reunião ID:", req.params.id);

  const userId = Number(req.user?.id);
  const reuniaoId = parseInt(req.params.id, 10);
  const { forceDelete } = req.query;

  console.log("Force Delete:", Boolean(forceDelete));

  const deletedReuniao = await deleteReuniaoService(
    reuniaoId,
    userId,
    Boolean(forceDelete)
  );

  if (deletedReuniao?.status === "CANCELADA") {
    res.status(200).json({
      success: true,
      message: "Reunião cancelada com sucesso.",
    });

    console.log("Reunião cancelada com sucesso:", reuniaoId);
    return;
  }

  res.status(200).json({
    success: true,
    message: "Reunião deletada com sucesso.",
  });

  console.log("Reunião deletada com sucesso:", reuniaoId);
};

export default deleteReuniao;
