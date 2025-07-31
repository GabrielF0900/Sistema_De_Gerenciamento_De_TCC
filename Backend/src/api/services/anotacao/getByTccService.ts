import { Anotacao } from "@prisma/client";
import { ResponseError } from "../../helpers/ResponseError";
import { findAnotacoesByTCCId } from "../../repositories/anotacoes/anotacoesRepository";

/**
 * Serviço para buscar todas as anotações associadas a um TCC específico.
 * @param tccId - ID do TCC cujas anotações serão buscadas
 * @returns Lista de anotações associadas ao TCC
 */

export default async function getAnotacoesByTccService(
  tccId: number
): Promise<Anotacao[]> {
  // Busca as anotações associadas ao TCC
  const existingTCC = await findAnotacoesByTCCId(tccId);

  if (!existingTCC) {
    throw new ResponseError(404, "O TCC associado não foi encontrado.");
  }

  const anotacoes = await findAnotacoesByTCCId(tccId);

  // Se não encontrar anotações, retorna um array vazio
  if (!anotacoes) {
    return [];
  }

  return anotacoes;
}
