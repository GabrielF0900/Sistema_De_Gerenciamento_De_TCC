import { ICreateAtividade } from "../../repositories/atividades/interfaces";
import { createAtividade } from "../../repositories/atividades/atividadesRepository";
import { $Enums } from "@prisma/client";
import { ResponseError } from "../../helpers/ResponseError";
import { findTCCById } from "../../repositories/TCC/TCCRepository";
import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";

export default async function createAtividadeService(data: ICreateAtividade) {
  // Validação de status
  const statusValidos: $Enums.StatusAtividade[] = ["PENDENTE", "CONCLUIDA"];

  if (!statusValidos.includes(data.status)) {
    throw new ResponseError(400, "Status deve ser PENDENTE ou CONCLUIDA.");
  }

  // Validar se a data de entrega é válida
  const dataEntregaObj = new Date(data.dataEntrega);

  if (isNaN(dataEntregaObj.getTime())) {
    throw new ResponseError(400, "Data de entrega inválida.");
  }

  // Verificar se o TCC existe
  const tccExistente = await findTCCById(data.tccId);

  if (!tccExistente) {
    throw new ResponseError(404, "TCC não encontrado.");
  }

  // Criar a atividade
  const atividade = await createAtividade(data);

  if (atividade) {
    // Registrar no histórico
    await createHistoricoTcc({
      acao: "CRIAR",
      entidade: "ATIVIDADE",
      entidadeId: atividade.id,
      usuarioId: tccExistente.aluno.id, // ID do aluno associado ao TCC
      tccId: data.tccId,
      descricao: `Atividade criada`,
      detalhes: `Criou atividade: ${atividade.nome}.`,
    });
  }

  return atividade;
}
