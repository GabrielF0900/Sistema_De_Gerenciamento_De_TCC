import { createReuniao } from "../../repositories/reuniao/reuniaoRepository";
import { ICreateReuniao } from "../../repositories/reuniao/interfaces";
import { Reuniao } from "@prisma/client";
import { ResponseError } from "../../helpers/ResponseError";
import prisma from "../../config/prisma";
import { endOfDay, startOfDay } from "date-fns";
import { createHistoricoTcc } from "../../repositories/historico/historicoRepository";

/**
 * Serviço para criar uma nova reunião.
 * @param data - Dados da reunião a ser criada.
 * @returns A reunião criada ou null se não for possível criar.
 */
export async function createReuniaoService(
  data: ICreateReuniao,
  userId: number
): Promise<Reuniao | null> {
  // Validar data agendada
  const dataAgendada = new Date(data.data_agendada);

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
      TCC_id: data.TCC_id,
      data_agendada: {
        gte: startOfDay(dataAgendada),
        lte: endOfDay(dataAgendada),
      },
      status: {
        in: ["AGENDADA"],
      },
    },
  });

  if (reuniaoConflitante) {
    throw new ResponseError(
      400,
      "Já existe uma reunião agendada para este TCC no mesmo dia."
    );
  }

  const reuniao = await createReuniao(data);

  if (reuniao) {
    // Registrar histórico de criação de reunião
    await createHistoricoTcc({
      tccId: data.TCC_id,
      acao: "CRIAR",
      entidade: "REUNIAO",
      entidadeId: reuniao.id,
      usuarioId: userId,
      descricao: `Reunião agendada`,
      detalhes: `Reunião agendada para o TCC: ${reuniao.titulo}.`,
    });
  }

  return reuniao;
}
