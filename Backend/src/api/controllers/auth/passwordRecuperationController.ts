import { Request, Response } from "express";
import { requestPasswordReset } from "../../services/auth/passwordRecuperationService";

/**
 * Controlador para solicitar a recuperação de senha.
 * @param {Request} req - A requisição HTTP contendo o email do usuário.
 * @param {Response} res - A resposta HTTP a ser enviada ao cliente.
 * @returns {Promise<Response>} - Retorna uma resposta JSON com o status da operação.
 */

export async function requestPasswordResetController(
  req: Request,
  res: Response
): Promise<Response> {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email é obrigatório.",
      success: false,
    });
  }

  await requestPasswordReset(email);

  return res.status(200).json({
    message: "Email de recuperação enviado com sucesso.",
    success: true,
  });
}
