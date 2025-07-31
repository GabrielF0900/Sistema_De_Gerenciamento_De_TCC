import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import updateNameService from "../../services/usuario/updateNameService";

/**
 * Controller para alterar o nome completo do usuário
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const updateNomeController = async (
  req: RequestWithUser,
  res: Response
): Promise<Response> => {
  console.log("=== ALTERAR NOME ===");
  console.log("User ID:", req.user?.id);
  console.log("Body:", req.body);

  const { nome_completo } = req.body;
  const userId = Number(req.user?.id);

  if (!nome_completo || typeof nome_completo !== "string") {
    return res.status(400).json({
      success: false,
      message: "Nome completo é obrigatório e deve ser uma string.",
    });
  }

  // Chama o serviço para atualizar o nome
  const usuarioAtualizado = await updateNameService(userId, nome_completo);

  console.log("Nome atualizado com sucesso:", usuarioAtualizado);

  return res.status(200).json({
    success: true,
    message: "Nome alterado com sucesso!",
  });
};

export default updateNomeController;
