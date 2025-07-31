import { Anotacao } from "@prisma/client";
import prisma from "../../config/prisma";
import { IAnotacao } from "./interfaces";

/**
 * Funcão para criar uma nova anotação associada a um TCC.
 * @param data - Objeto contendo o conteúdo da anotação e o ID do TCC
 * @returns A anotação criada ou null se falhar
 */

export async function createAnotacao(data: {
  conteudo: string;
  tccId: number;
}): Promise<IAnotacao | null> {
  const anotacao = await prisma.anotacao.create({
    data: {
      conteudo: data.conteudo,
      TCC_id: data.tccId,
    },
    include: {
      TCC: {
        select: {
          Aluno_id: true, // Inclui o ID do aluno associado à anotação
        },
      },
    },
  });

  if (!anotacao) {
    return null;
  }
  
  return {
    ...anotacao,
    Aluno_id: anotacao.TCC.Aluno_id, // Inclui o ID do aluno associado à anotação
  };
}

/**
 * Função para buscar todas as anotações associadas a um TCC específico.
 * @param tccId - ID do TCC cujas anotações serão buscadas
 * @returns Lista de anotações associadas ao TCC
 */

export async function findAnotacoesByTCCId(tccId: number): Promise<Anotacao[]> {
  return await prisma.anotacao.findMany({
    where: {
      TCC_id: tccId,
    },
  });
}

/**
 * Função para atualizar o conteúdo de uma anotação específica.
 * @param id - ID da anotação a ser atualizada
 * @param conteudo - Novo conteúdo da anotação
 * @returns A anotação atualizada ou null se não encontrada
 */

export async function updateAnotacao(
  id: number,
  conteudo: string
): Promise<IAnotacao | null> {
  const anotacao = await prisma.anotacao.update({
    where: { id },
    data: { conteudo },
    include: {
      TCC: {
        select: {
          Aluno_id: true, // Inclui o ID do aluno associado à anotação
        },
      },
    },
  });

  if (!anotacao) {
    return null;
  }

  return {
    ...anotacao,
    Aluno_id: anotacao.TCC.Aluno_id, // Inclui o ID do aluno associado à anotação
  };
}

/**
 * Função para deletar uma anotação específica pelo ID.
 * @param id - ID da anotação a ser deletada
 * @returns A anotação deletada ou null se não encontrada
 */

export async function deleteAnotacao(id: number): Promise<IAnotacao | null> {
  const anotacao = await prisma.anotacao.delete({
    where: { id },
    include: {
      TCC: {
        select: {
          Aluno_id: true,
        },
      },
    },
  });

  if (!anotacao) {
    return null;
  }

  return {
    ...anotacao,
    Aluno_id: anotacao.TCC.Aluno_id, // Inclui o ID do aluno associado à anotação
  };
}
