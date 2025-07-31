import { changePassword } from "../../repositories/usuario/usuarioRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { encryptPassword } from "../../utils/criptrography";
import { Usuario } from "@prisma/client";

/**
 * Serviço para atualizar a senha de um usuário.
 * @param id - ID do usuário cuja senha será atualizada.
 * @param newPassword - Nova senha do usuário.
 * @returns Promise que resolve com o usuário atualizado ou null se não for possível atualizar.
 */
export default async function updatePasswordService(
  id: number,
  newPassword: string
): Promise<Usuario | null> {
  // Criptografa a nova senha
  const hashedPassword = await encryptPassword(newPassword);

  if (!hashedPassword) {
    throw new ResponseError(500, "Erro ao criptografar a senha.");
  }

  // Atualizar a senha do usuário no banco de dados
  const updatedUser = await changePassword(id, hashedPassword);

  if (!updatedUser) {
    throw new ResponseError(404, "Usuário não encontrado.");
  }

  return updatedUser;
}
