import { IUpdateReuniao } from "../../repositories/reuniao/interfaces";
import { updateReuniao } from "../../repositories/reuniao/reuniaoRepository";
import { ResponseError } from "../../helpers/ResponseError";
import prisma from "../../config/prisma";
import { endOfDay, startOfDay } from "date-fns";
import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";
import { Reuniao } from "@prisma/client";

export default async function updateReuniaoService(
  data: IUpdateReuniao,
  userId: number
): Promise<Reuniao | null> {
  // verificar se a reunião existe
  const reuniaoExistente = await prisma.reuniao.findUnique({
    where: { id: data.id },
  });

  if (!reuniaoExistente) {
    throw new ResponseError(404, "Reunião não encontrada.");
  }

  const dataAgendada = new Date(data.data_agendada as Date);

  if (isNaN(dataAgendada.getTime())) {
    throw new ResponseError(400, "Data agendada inválida.");
  }

  // Verificar se a data não é no passado
  const agora = new Date();
  if (dataAgendada <= agora) {
    throw new ResponseError(
      400,
      "Data agendada não pode ser anterior ao momento atual."
    );
  }

  const reuniaoConflitante = await prisma.reuniao.findFirst({
    where: {
      TCC_id: reuniaoExistente.TCC_id,
      data_agendada: {
        gte: startOfDay(dataAgendada),
        lte: endOfDay(dataAgendada),
      },
      status: {
        in: ["AGENDADA"],
      },
      NOT: {
        id: data.id, // Ignorar a própria reunião que está sendo atualizada
      },
    },
  });

  if (reuniaoConflitante) {
    throw new ResponseError(
      400,
      "Já existe uma reunião agendada para este TCC no mesmo dia."
    );
  }

  const updatedReuniao = await updateReuniao({
    ...data,
    data_agendada: dataAgendada,
  });

  if (updatedReuniao) {
    // Registrar histórico de atualização de reunião
    await createHistoricoTcc({
      acao: "ATUALIZAR",
      entidade: "REUNIAO",
      entidadeId: updatedReuniao.id,
      usuarioId: userId,
      tccId: updatedReuniao.TCC_id,
      descricao: "Reunião atualizada",
      detalhes: `Reunião atualizada para o TCC: ${updatedReuniao.titulo}.`,
    });
  }

  return updatedReuniao;
}
