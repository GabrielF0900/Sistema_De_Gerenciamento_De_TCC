import { getHistoricoTcc } from "../../repositories/historico/historicoRepository";
import {
  IHistoricoTccParams,
  IHistoricoTccResponse,
} from "../../repositories/historico/intefaces";

/**
 * Serviço para buscar o histórico de ações de um TCC específico.
 * @param tccId - ID do TCC para buscar o histórico.
 * @param params - Parâmetros de filtro e paginação.
 * @returns Promise com o histórico encontrado ou erro.
 */
export async function getTccHistoricoService(
  tccId: number,
  params: IHistoricoTccParams
): Promise<IHistoricoTccResponse> {
  const historico = await getHistoricoTcc(tccId, params);

  return historico;
}
