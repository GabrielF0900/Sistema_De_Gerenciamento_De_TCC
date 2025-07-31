import {
  deleteReuniao,
  updateStatusReunião,
} from "../../repositories/reuniao/reuniaoRepository";
import { ResponseError } from "../../helpers/ResponseError";
import prisma from "../../config/prisma";
import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";
import { Reuniao } from "@prisma/client";

/**
 * Serviço para deletar uma reunião.
 * @param id - ID da reunião a ser deletada.
 * @param userId - ID do usuário que está realizando a ação.
 * @returns A reunião deletada ou lança um erro se não existir.
 */
export default async function deleteReuniaoService(
  id: number,
  userId: number,
  force: boolean
): Promise<Reuniao | null> {
  // Verificar se a reunião existe
  const reuniao = await prisma.reuniao.findUnique({
    where: { id },
  });

  if (reuniao?.status === "REALIZADA" && !force) {
    throw new ResponseError(
      400,
      "Não é possivél deletar uma reunião que já foi realizada"
    );
  }

  let deletedReuniao: Reuniao | null;

  if (force) {
    // Deletar a reunião
    deletedReuniao = await deleteReuniao(id);

    // Registrar histórico de deleção de reunião
    await createHistoricoTcc({
      acao: "EXCLUIR",
      entidade: "REUNIAO",
      entidadeId: deletedReuniao?.id as number,
      usuarioId: userId,
      tccId: deletedReuniao?.TCC_id as number,
      descricao: "Reunião deletada",
      detalhes: `Reunião deletada para o TCC: ${deletedReuniao?.titulo}.`,
    });
  } else {
    deletedReuniao = await updateStatusReunião(id, "CANCELADA");

    await createHistoricoTcc({
      acao: "CANCELAR",
      entidade: "REUNIAO",
      entidadeId: deletedReuniao?.id as number,
      usuarioId: userId,
      tccId: deletedReuniao?.TCC_id as number,
      descricao: "Reunião cancelada",
      detalhes: `Reunião cancelada para o TCC: ${deletedReuniao?.titulo}.`,
    });
  }

  return deletedReuniao;
}
