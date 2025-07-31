import { Anotacao } from "@prisma/client";
import { createAnotacao } from "../../repositories/anotacoes/anotacoesRepository";
import { findTCCById } from "../../repositories/TCC/TCCRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";

/**
 * Serviço para criar uma nova anotação associada a um TCC.
 * @param conteudo - Conteúdo da anotação
 * @param tccId - ID do TCC ao qual a anotação será associada
 * @returns A anotação criada ou null se falhar
 */
export async function createAnotacaoService(
  conteudo: string,
  tccId: number
): Promise<Anotacao | null> {
  const existingTCC = await findTCCById(tccId);

  if (!existingTCC) {
    throw new ResponseError(404, "O TCC associado não foi encontrado.");
  }

  const anotacao = await createAnotacao({ conteudo, tccId });

  if (!anotacao) {
    throw new Error("Falha ao criar anotação");
  }

  await createHistoricoTcc({
    acao: "CRIAR",
    entidade: "ANOTACAO",
    entidadeId: anotacao.id,
    usuarioId: existingTCC.aluno.id,
    tccId: tccId,
    descricao: `Anotação criada`,
    detalhes: `Adicionou anotação: ${anotacao.conteudo}.`,
  });

  return anotacao;
}
