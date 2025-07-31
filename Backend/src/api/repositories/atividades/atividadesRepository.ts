import { Atividade } from "@prisma/client";
import prisma from "../../config/prisma";
import {
  IAtividade,
  ICreateAtividade,
  IUpdateAtividade,
  TCCAtividades,
} from "./interfaces";

/**
 * Função para criar uma nova atividade no banco de dados.
 * @param data - Dados da atividade a ser criada.
 * @returns A atividade criada ou null se falhar.
 */
export async function createAtividade(
  data: ICreateAtividade
): Promise<IAtividade | null> {
  const atividades = await prisma.atividade.create({
    data: {
      nome: data.nome,
      descricao: data.descricao,
      data_entrega: data.dataEntrega,
      status: data.status,
      TCC_id: data.tccId,
    },
    include: {
      TCC: {
        select: {
          Aluno_id: true,
        },
      },
    },
  });

  if (!atividades) {
    return null;
  }

  return {
    ...atividades,
    Aluno_id: atividades.TCC.Aluno_id,
  };
}

/**
 * Função para buscar todas as atividades de um TCC específico.
 * @param tccId - ID do TCC cujas atividades serão buscadas.
 * @returns Lista de atividades ou null se falhar.
 */

export async function getAtividadesByTCCId(
  tccId: number
): Promise<TCCAtividades[] | null> {
  const atividades = await prisma.atividade.findMany({
    where: {
      TCC_id: tccId,
    },
    omit: {
      TCC_id: true,
    },
  });

  return atividades;
}

/**
 * Função para buscar uma atividade específica pelo ID.
 * @param id - ID da atividade a ser buscada.
 * @returns A atividade encontrada ou null se não existir.
 */

export async function getAtividadeById(id: number): Promise<Atividade | null> {
  const atividade = await prisma.atividade.findUnique({
    where: {
      id: id,
    },
  });

  return atividade;
}

/**
 * Função para atualizar uma atividade existente.
 * @param id - ID da atividade a ser atualizada.
 * @param data - Dados atualizados da atividade.
 * @returns A atividade atualizada ou null se falhar.
 */

export async function updateAtividade(
  id: number,
  data: IUpdateAtividade
): Promise<IAtividade | null> {
  const atividade = await prisma.atividade.update({
    where: {
      id: id,
    },
    data: {
      nome: data.nome,
      descricao: data.descricao,
      data_entrega: data.dataEntrega,
      status: data.status,
      ...(data.status === "CONCLUIDA" && { concluido_em: new Date() }),
    },
    include: {
      TCC: {
        select: {
          Aluno_id: true,
        },
      },
    },
  });

  if (!atividade) {
    return null;
  }

  return {
    ...atividade,
    Aluno_id: atividade.TCC.Aluno_id, // Inclui o ID do aluno associado
  };
}

/**
 * Função para marcar uma atividade como concluída.
 * @param id - ID da atividade a ser marcada como concluída.
 * @returns A atividade atualizada ou null se falhar.
 */

export async function concluirAtividade(
  id: number
): Promise<IAtividade | null> {
  const atividade = await prisma.atividade.update({
    where: {
      id: id,
    },
    data: {
      status: "CONCLUIDA",
      concluido_em: new Date(), // Define a data de conclusão como a data atual
    },
    include: {
      TCC: {
        select: {
          Aluno_id: true,
        },
      },
    },
  });

  if (!atividade) {
    return null;
  }

  return {
    ...atividade,
    Aluno_id: atividade.TCC.Aluno_id, // Inclui o ID do aluno associado
  };
}

/**
 * Função para deletar uma atividade pelo ID.
 * @param id - ID da atividade a ser deletada.
 * @returns A atividade deletada ou null se não existir.
 */

export async function deleteAtividade(id: number): Promise<IAtividade | null> {
  const atividade = await prisma.atividade.delete({
    where: {
      id: id,
    },
    include: {
      TCC: {
        select: {
          Aluno_id: true,
        },
      },
    },
  });

  if (!atividade) {
    return null;
  }

  return {
    ...atividade,
    Aluno_id: atividade.TCC.Aluno_id, // Inclui o ID do aluno associado
  };
}
