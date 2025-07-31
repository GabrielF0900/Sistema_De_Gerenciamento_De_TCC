import { getAtividadeById } from "../../repositories/atividades/atividadesRepository";
import { ResponseError } from "../../helpers/ResponseError";

/**
 * Serviço para buscar uma atividade específica pelo ID.
 * @param id - ID da atividade a ser buscada.
 * @returns A atividade encontrada ou lança um erro se não existir.
 */
export default async function getAtividadeByIdService(id: number) {
  const atividade = await getAtividadeById(id);

  if (!atividade) {
    throw new ResponseError(404, "Atividade não encontrada");
  }

  return atividade;
}
