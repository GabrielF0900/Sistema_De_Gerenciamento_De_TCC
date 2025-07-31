import getUserProfileService from "../../services/usuario/profileService";
import { Response } from "express";
import { RequestWithUser } from "../../types/auth";

/**
 * Controlador para obter o perfil do usuário
 * @param {RequestWithUser} req - Requisição com o usuário autenticado
 * @param {Response} res - Resposta HTTP
 */
export async function getUserProfileController(
  req: RequestWithUser,
  res: Response
): Promise<Response> {
  const userId = Number(req.user?.id); // Obtém o ID do usuário autenticado

  const userProfile = await getUserProfileService(userId);

  return res.status(200).json({
    success: true,
    user: userProfile,
    message: "Perfil do usuário obtido com sucesso",
  });
}
