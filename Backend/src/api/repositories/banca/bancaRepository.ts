import { $Enums, Banca } from "@prisma/client";
import prisma from "../../config/prisma";
import { MembroBanca } from "./interfaces";

/**
 * Função para buscar o orientador de um TCC.
 * @param tccId - ID do TCC.
 * @param orientadorId - ID do orientador.
 * @returns O objeto Banca encontrado ou null se não existir.
 */
export async function getOrientador(
  tccId: number
): Promise<MembroBanca | null> {
  const orientador = await prisma.banca.findFirst({
    where: {
      TCC_id: tccId,
      papel: "ORIENTADOR",
    },
    include: {
      Professor: {
        select: {
          Usuario_id: true,
          area_atuacao: true,
          Usuario: {
            select: {
              nome_completo: true,
            },
          },
        },
      },
    },
  });

  if (!orientador) {
    return null;
  }

  return {
    id: orientador.Professor.Usuario_id,
    nome: orientador.Professor.Usuario.nome_completo,
    area_atuacao: orientador.Professor.area_atuacao,
  };
}

/**
 * Função para buscar o coorientador de um TCC.
 * @param tccId - ID do TCC.
 * @param coorientadorId - ID do coorientador.
 * @returns O objeto Banca encontrado ou null se não existir.
 */
export async function getCoorientador(
  tccId: number
): Promise<MembroBanca | null> {
  const coorientador = await prisma.banca.findFirst({
    where: {
      TCC_id: tccId,
      papel: "COORIENTADOR",
    },
    include: {
      Professor: {
        select: {
          area_atuacao: true,
          Usuario_id: true,
          Usuario: {
            select: {
              nome_completo: true,
            },
          },
        },
      },
    },
  });

  if (!coorientador) {
    return null;
  }

  return {
    id: coorientador.Professor.Usuario_id,
    nome: coorientador.Professor.Usuario.nome_completo,
    area_atuacao: coorientador.Professor.area_atuacao,
  };
}

/**
 * Função para criar uma banca de TCC.
 * @param professorId - ID do professor.
 * @returns O objeto Banca encontrado ou null se não existir.
 */

export async function createBanca(
  tccId: number,
  professorId: number,
  papel: $Enums.PapelBanca
): Promise<Banca> {
  const banca = await prisma.banca.create({
    data: {
      TCC_id: tccId,
      Professor_id: professorId,
      papel: papel,
    },
    include: {
      Professor: {
        select: {
          Usuario: {
            select: {
              nome_completo: true,
            },
          },
        },
      },
    },
  });

  return banca;
}
