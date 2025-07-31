import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";
import { updateAnotacao } from "../../repositories/anotacoes/anotacoesRepository";
import { Anotacao } from "@prisma/client";

/**
 * Serviço para atualizar uma anotação existente.
 * @param id - ID da anotação a ser atualizada
 * @param data - Dados atualizados da anotação
 * @returns Anotação atualizada
 */
export default async function updateAnotacaoService(
  id: number,
  conteudo: string
): Promise<Anotacao | null> {
  // Atualiza a anotação com os novos dados
  const updatedAnotacao = await updateAnotacao(id, conteudo);

  if (updatedAnotacao) {
    // Registra a ação no histórico
    await createHistoricoTcc({
      acao: "ALTERAR",
      entidade: "ANOTACAO",
      entidadeId: updatedAnotacao.id,
      usuarioId: updatedAnotacao.Aluno_id, // ID do aluno associado à anotação
      tccId: updatedAnotacao.TCC_id,
      descricao: `Anotação alterada`,
      detalhes: `Alterou anotação para: ${updatedAnotacao.conteudo}.`,
    });
  }

  return updatedAnotacao;
}
