import {
  calculateCompletedMeetings,
  calculateCompletedStages,
  calculateCompletedTasks,
  calculateCompleteProgress,
  calculateDefenseStatus,
  calculateProgressPercentage,
  calculateProgressStatus,
} from "../../utils/calculate";
import prisma from "../../config/prisma";
import { GetTCCProgress } from "./contracts";
import {
  PESO_DEFESAS,
  PESO_ETAPAS,
  PESO_REUNIOES,
  PESO_TAREFAS,
} from "../../constants/progressoConstants";
import { ResponseError } from "../../helpers/ResponseError";

/**
 * Serviço para obter o progresso de um TCC específico.
 * @param id - ID do TCC.
 * @return Objeto contendo o progresso do TCC ou null se não encontrado.
 * @throws ResponseError se o TCC não for encontrado.
 */

export default async function getTCCProgressService(
  id: number
): Promise<GetTCCProgress | null> {
  const tcc = await prisma.tCC.findFirst({
    where: {
      id,
    },
    include: {
      Atividades: true,
      EtapasTCC: true,
      Reunioes: true,
      Defesas: true,
    },
  });

  if (!tcc) {
    throw new ResponseError(404, `TCC não encontrado.`);
  }

  const progress = calculateCompleteProgress(tcc);

  return {
    id: tcc.id,
    titulo: tcc.titulo,
    progresso: {
      total: calculateProgressPercentage(progress.progresso_total),
      status: calculateProgressStatus(progress.progresso_total),
      detalhamento: {
        tarefas: {
          pontuacao: calculateProgressPercentage(progress.progresso_tarefas),
          peso: PESO_TAREFAS,
          total: tcc.Atividades.length,
          concluidas: calculateCompletedTasks(tcc.Atividades),
        },
        etapas: {
          pontuacao: calculateProgressPercentage(progress.progresso_etapas),
          peso: PESO_ETAPAS,
          total: tcc.EtapasTCC.length,
          concluidas: calculateCompletedStages(tcc.EtapasTCC),
        },
        reunioes: {
          pontuacao: calculateProgressPercentage(progress.progresso_reunioes),
          peso: PESO_REUNIOES,
          agendadas: tcc.Reunioes.length,
          realizadas: calculateCompletedMeetings(tcc.Reunioes),
        },
        defesas: {
          pontuacao: calculateProgressPercentage(progress.progresso_defesas),
          peso: PESO_DEFESAS,
          preBanca: calculateDefenseStatus(tcc.Defesas, "PRE_BANCA"),
          bancaFinal: calculateDefenseStatus(tcc.Defesas, "BANCA_FINAL"),
        },
      },
    },
  };
}
