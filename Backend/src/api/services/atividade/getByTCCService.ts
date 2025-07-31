import { ResponseError } from "../../helpers/ResponseError";
import { getAtividadesByTCCId } from "../../repositories/atividades/atividadesRepository";
import { TCCAtividades } from "../../repositories/atividades/interfaces";

/**
 * Serviço para buscar todas as atividades de um TCC específico.
 * @param tccId - ID do TCC cujas atividades serão buscadas.
 * @returns Lista de atividades ou lança um erro se não encontrar.
 */

export default async function getAtividadesByTCCService(
  tccId: number
): Promise<TCCAtividades[]> {
  const atividades = await getAtividadesByTCCId(tccId);

  if (!atividades) {
    throw new ResponseError(404, "TCC não encontrado");
  }

  if (atividades.length === 0) {
    throw new ResponseError(404, "Nenhuma atividade foi encontrada");
  }

  return atividades;
}
