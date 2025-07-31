import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";
import { deleteAnotacao } from "../../repositories/anotacoes/anotacoesRepository";

/**
 * Service para deletar uma anotação
 * @param id - ID da anotação a ser deletada
 */

export default async function deleteAnotacaoService(id: number): Promise<void> {
  // Chama o repositório para deletar a anotação
  const anotacao = await deleteAnotacao(id);

  if (anotacao) {
    // registra a ação no histórico
    await createHistoricoTcc({
      acao: "EXCLUIR",
      entidade: "ANOTACAO",
      entidadeId: id,
      usuarioId: anotacao.Aluno_id, // ID do aluno associado à anotação
      tccId: anotacao.TCC_id,
      descricao: `Anotação excluída`,
      detalhes: `Anotação ${anotacao.conteudo} foi removida.`,
    });
  }
}
