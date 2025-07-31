import { IGetReuniao } from "../../repositories/reuniao/interfaces";
import { findReunioesByTccId } from "../../repositories/reuniao/reuniaoRepository";

/**
 * Serviço para buscar reuniões por ID de TCC.
 * @param tccId - ID do TCC para o qual as reuniões serão buscadas.
 * @returns Lista de reuniões relacionadas ao TCC ou null se não houver reuniões.
 */
export async function getReunioesByTccService(
  tccId: number
): Promise<IGetReuniao[] | null> {
  const reunioes = await findReunioesByTccId(tccId);

  if (!reunioes || reunioes.length === 0) {
    return [];
  }

  return reunioes;
}
