import { IUsuario } from "api/repositories/usuario/interfaces";
import { ResponseError } from "../../helpers/ResponseError";
import { findUserById } from "../../repositories/usuario/usuarioRepository";

/**
 * Serviço para obter o perfil do usuário
 * @param {number} userId - ID do usuário cujo perfil será obtido
 * @returns {Promise<IUsuario | null>} Retorna o perfil do usuário ou null se não encontrado
 */

export default function getUserProfileService(
  userId: number
): Promise<IUsuario | null> {
  const user = findUserById(userId);

  if (!user) {
    throw new ResponseError(404, "Usuário não encontrado");
  }

  return user;
}
