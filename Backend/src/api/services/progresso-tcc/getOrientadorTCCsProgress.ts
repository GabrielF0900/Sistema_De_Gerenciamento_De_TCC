import prisma from "../../config/prisma";
import { GetTCCProgressByProfessor } from "./contracts";
import {
  calculateCompleteProgress,
  calculateProgressPercentage,
} from "../../utils/calculate";

/**
 * Serviço para obter o progresso de um TCC específico.
 * @param id - ID do TCC.
 * @return Objeto contendo o progresso do TCC ou null se não encontrado.
 * @throws ResponseError se o TCC não for encontrado.
 */
export default async function getOrientadorTCCsProgressService(
  professorId: number
): Promise<GetTCCProgressByProfessor[]> {
  const tccs = await prisma.tCC.findMany({
    where: {
      OR: [{ Orientador_id: professorId }, { Coorientador_id: professorId }],
    },
    include: {
      Aluno: {
        select: {
          Usuario: {
            select: {
              nome_completo: true,
            },
          },
        },
      },
      Atividades: true,
      EtapasTCC: true,
      Anotacoes: true,
      Reunioes: true,
      Defesas: true,
    },
  });

  if (!tccs || tccs.length === 0) {
    return [];
  }

  const progresses = await Promise.all(
    tccs.map(async (tcc) => {
      const progress = calculateCompleteProgress(tcc);

      return {
        tcc_id: tcc.id,
        titulo: tcc.titulo,
        aluno: tcc.Aluno.Usuario.nome_completo,
        progresso_total: calculateProgressPercentage(progress.progresso_total),
        status_atual: tcc.status_atual,
      };
    })
  );

  return progresses;
}
