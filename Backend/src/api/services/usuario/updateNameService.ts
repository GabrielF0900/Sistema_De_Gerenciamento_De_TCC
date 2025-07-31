import { updateUserName } from "../../repositories/usuario/usuarioRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { Usuario } from "@prisma/client";

/**
 * Serviço para atualizar o nome de um usuário.
 * @param id - ID do usuário a ser atualizado.
 * @param newName - Novo nome do usuário.
 * @returns Promise que resolve com o usuário atualizado ou null se não for possível atualizar.
 */
export default async function updateNameService(
  id: number,
  newName: string
): Promise<Usuario | null> {
  // Atualizar o nome do usuário no banco de dados
  const updatedUser = await updateUserName(id, newName);

  if (!updatedUser) {
    throw new ResponseError(404, "Usuário não encontrado.");
  }

  return updatedUser;
}
