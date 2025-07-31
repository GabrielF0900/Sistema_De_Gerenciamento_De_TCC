import { Usuario } from "@prisma/client";
import { changePassword } from "../../repositories/usuario/usuarioRepository";
import {
  deleteRecoveryRequestsByUserId,
  verifyRecoveryToken,
} from "../../repositories/recuperacao-senha/recuperacaoSenhaRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { encryptPassword, encryptToken } from "../../utils/criptrography";

/**
 * Serviço para atualizar a senha de um usuário
 * @param {string} token - Token de recuperação de senha
 * @param {string} newPassword - Nova senha a ser definida
 * @returns {Promise<Usuario | null>} Retorna o usuário atualizado ou null se não for possível atualizar
 */

export default async function resetPasswordService(
  userId: number,
  token: string,
  newPassword: string
): Promise<Usuario> {
  // Faz o hash do token para verificar no banco de dados
  const tokenHash = encryptToken(token);

  // Verifica se o token de recuperação é válido
  const verifyToken = await verifyRecoveryToken(userId, tokenHash);

  if (!verifyToken) {
    throw new ResponseError(
      400,
      "Token inválido ou expirado. Tente novamente."
    );
  }

  // Criptografa a nova senha
  const hashedPassword = await encryptPassword(newPassword);

  // Atualiza a senha do usuário
  const updatedUser = await changePassword(
    verifyToken.Usuario_id,
    hashedPassword
  );

  if (!updatedUser) {
    throw new ResponseError(404, "Erro ao atualizar a senha.");
  }

  // Remove todos os registros de recuperação de senha do usuário
  await deleteRecoveryRequestsByUserId(verifyToken.Usuario_id);

  return updatedUser;
}
