import { $Enums, Reuniao } from "@prisma/client";
import prisma from "../../config/prisma";
import { ICreateReuniao, IGetReuniao, IUpdateReuniao } from "./interfaces";

/**
 * Função para criar uma nova reunião no banco de dados.
 * @param data - Dados da reunião a ser criada.
 * @returns A reunião criada ou null se não for possível criar.
 */

export async function createReuniao(
  data: ICreateReuniao
): Promise<Reuniao | null> {
  const reuniao = await prisma.reuniao.create({
    data: {
      titulo: data.titulo,
      descricao: data.descricao,
      data_agendada: data.data_agendada,
      observacoes: data.observacoes,
      TCC_id: data.TCC_id,
    },
  });

  if (!reuniao) {
    return null;
  }

  return reuniao;
}

/**
 * Função para buscar reuniões de um TCC específico.
 * @param tccId - ID do TCC cujas reuniões serão buscadas.
 * @return Lista de reuniões do TCC ou null se não houver reuniões.
 */
export async function findReunioesByTccId(
  tccId: number
): Promise<IGetReuniao[] | null> {
  const reunioes = await prisma.reuniao.findMany({
    where: {
      TCC_id: tccId,
    },
    orderBy: {
      data_agendada: "asc",
    },
    include: {
      TCC: {
        select: {
          id: true,
          titulo: true,
          Aluno: {
            include: {
              Usuario: {
                select: {
                  nome_completo: true,
                  email: true,
                },
              },
            },
          },
          Orientador: {
            include: {
              Usuario: {
                select: {
                  nome_completo: true,
                  email: true,
                },
              },
            },
          },
          Coorientador: {
            include: {
              Usuario: {
                select: {
                  nome_completo: true,
                  email: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!reunioes) {
    return null;
  }

  return reunioes.map((reuniao) => ({
    id: reuniao.id,
    titulo: reuniao.titulo,
    descricao: reuniao.descricao,
    data_agendada: reuniao.data_agendada,
    data_realizada: reuniao.data_realizada,
    status: reuniao.status,
    observacoes: reuniao.observacoes,
    TCC_id: reuniao.TCC_id,
    tcc: {
      id: reuniao.TCC.id,
      titulo: reuniao.TCC.titulo,
      aluno: reuniao.TCC.Aluno.Usuario.nome_completo,
      orientador: reuniao.TCC.Orientador?.Usuario.nome_completo || null,
      coorientador: reuniao.TCC.Coorientador?.Usuario.nome_completo || null,
    },
    criado_em: reuniao.criado_em,
  }));
}

/**
 * Função para atualizar uma reunião existente.
 * @param data - Dados da reunião a ser atualizada.
 * @returns A reunião atualizada ou null se não for possível atualizar.
 */
export async function updateReuniao(
  data: IUpdateReuniao
): Promise<Reuniao | null> {
  const updatedReuniao = await prisma.reuniao.update({
    where: { id: data.id },
    data: {
      titulo: data.titulo,
      descricao: data.descricao,
      data_agendada: data.data_agendada,
      observacoes: data.observacoes,
      status: data.status,
      ...(data.status === "REALIZADA" && { data_realizada: new Date() }),
    },
  });

  if (!updatedReuniao) {
    return null;
  }

  return updatedReuniao;
}

export async function updateStatusReunião(
  id: number,
  status: $Enums.StatusReuniao
): Promise<Reuniao | null> {
  let observacao: string | undefined;

  if (status === "CANCELADA") {
    observacao = "Cancelada em: " + new Date().toLocaleString("pt-BR");
  }

  const updatedReuniao = await prisma.reuniao.update({
    where: { id },
    data: {
      status,
      observacoes: observacao,
    },
  });

  if (!updatedReuniao) {
    return null;
  }

  return updatedReuniao;
}

/**
 * Função para deletar uma reunião.
 * @param id - ID da reunião a ser buscada.
 * @returns A reunião encontrada ou null se não existir.
 */
export async function deleteReuniao(id: number): Promise<Reuniao | null> {
  const deletedReuniao = await prisma.reuniao.delete({
    where: { id },
  });

  if (!deletedReuniao) {
    return null;
  }

  return deletedReuniao;
}
