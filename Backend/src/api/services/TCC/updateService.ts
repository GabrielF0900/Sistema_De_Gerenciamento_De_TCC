import { findProfessorByName } from "../../repositories/professor/professorRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { TCC } from "@prisma/client";
import { IUpdateTCCService } from "./contracts";
import { updateTCC } from "../../repositories/TCC/TCCRepository";
import { findAreaConhecimentoByName } from "../../repositories/area-conhecimento/areaConhecimentoRepository";
import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";

/**
 * Serviço para atualizar um TCC.
 * @param id - ID do TCC a ser atualizado.
 * @param data - Dados a serem atualizados no TCC.
 * @returns O TCC atualizado ou null se não encontrado.
 */

export default async function updateTCCService(
  id: number,
  data: IUpdateTCCService
): Promise<TCC | null> {
  if (!id) {
    throw new ResponseError(400, "ID do TCC é obrigatório.");
  }

  if (!data || Object.keys(data).length === 0) {
    throw new ResponseError(400, "Dados para atualização são obrigatórios.");
  }

  // Verifica se a data de conclusão é anterior à data de início
  if (data.dataConclusao && data.dataInicio) {
    const dataInicio = new Date(data.dataInicio);
    const dataConclusao = new Date(data.dataConclusao);
    if (dataConclusao < dataInicio) {
      throw new ResponseError(
        400,
        "A data de conclusão não pode ser anterior à data de início."
      );
    }
  }

  // verifica os dados de orientador e coorientador
  if (data.orientadorNome && typeof data.orientadorNome === "string") {
    data.orientadorNome = data.orientadorNome.trim();
  }
  const orientador = await findProfessorByName(data.orientadorNome as string);
  if (!orientador) {
    throw new ResponseError(404, "Orientador não encontrado.");
  }

  if (data.coorientadorNome && typeof data.coorientadorNome === "string") {
    data.coorientadorNome = data.coorientadorNome.trim();
  }

  const coorientador = await findProfessorByName(
    data.coorientadorNome as string
  );

  if (!coorientador) {
    throw new ResponseError(404, "Coorientador não encontrado.");
  }
  // verifica a aréa de conhecimento
  if (data.areaConhecimento && typeof data.areaConhecimento === "string") {
    data.areaConhecimento = data.areaConhecimento.trim();
  }

  const areaConhecimento = await findAreaConhecimentoByName(
    data.areaConhecimento as string
  );

  if (!areaConhecimento) {
    throw new ResponseError(404, "Área de conhecimento não encontrada.");
  }
  const updatedTCC = await updateTCC(id, {
    titulo: data.titulo,
    tema: data.tema,
    resumo: data.resumo,
    dataInicio: data.dataInicio ? new Date(data.dataInicio) : null,
    dataConclusao: data.dataConclusao ? new Date(data.dataConclusao) : null,
    statusAtual: data.statusAtual,
    areaConhecimentoId: areaConhecimento ? areaConhecimento.id : undefined,
    orientadorId: orientador ? orientador.Usuario_id : undefined,
    coorientadorId: coorientador ? coorientador.Usuario_id : undefined,
  });

  if (updatedTCC) {
    // Registrar no histórico de ações do TCC
    await createHistoricoTcc({
      acao: "ALTERAR",
      entidade: "TCC",
      entidadeId: updatedTCC.id,
      usuarioId: updatedTCC.Aluno_id,
      tccId: updatedTCC.id,
      descricao: "Informações do TCC atualizadas",
    });
  }

  return updatedTCC;
}
