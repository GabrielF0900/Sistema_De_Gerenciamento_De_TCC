import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import updatePasswordService from "../../services/usuario/updatePasswordService";

/**
 * Controller para alterar a senha do usuário
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const updatePasswordController = async (
  req: RequestWithUser,
  res: Response
): Promise<Response> => {
  console.log("=== ALTERAR SENHA ===");
  console.log("User ID:", req.user?.id);

  const { nova_senha } = req.body;
  const userId = Number(req.user?.id);

  if (!nova_senha || typeof nova_senha !== "string") {
    return res.status(400).json({
      success: false,
      message: "Nova senha é obrigatória.",
    });
  }

  // Chama o serviço para atualizar a senha
  const updatedUser = await updatePasswordService(userId, nova_senha);

  console.log("Senha atualizada com sucesso para usuário:", userId);

  return res.status(200).json({
    success: true,
    message: "Senha alterada com sucesso!",
  });
};

export default updatePasswordController;
