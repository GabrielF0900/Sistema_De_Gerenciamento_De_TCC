import { Professor } from "@prisma/client";
import prisma from "../../config/prisma";
import { GetAllProfessoresParams, IGetAllProfessores } from "./interfaces";

/**
 * Função para criar um professor no banco de dados
 * @param {Pick<Professor, "Usuario_id" | "area_atuacao">} data - Dados do professor a ser criado
 * @returns {Promise<Professor | null>} Retorna o professor criado ou null se não for possível criar
 */
export async function createProfessor(
  data: Pick<Professor, "Usuario_id" | "area_atuacao">
): Promise<Professor | null> {
  const professor = await prisma.professor.create({
    data: {
      Usuario_id: data.Usuario_id,
      area_atuacao: data.area_atuacao,
      disponibilidade: true, // Definindo disponibilidade como true por padrão
    },
  });

  return professor;
}

/**
 * Função para buscar todos os professores no banco de dados
 * @param {GetAllProfessoresParams} params - Parâmetros de busca
 * @returns {Promise<IGetAllProfessores[]>} Retorna uma lista de professores
 */
export async function findAllProfessores(
  params: GetAllProfessoresParams
): Promise<IGetAllProfessores[]> {
  const professores = await prisma.professor.findMany({
    where: {
      ...(params.disponivel && {
        disponibilidade: params.disponivel,
      }),
      ...(params.nome && {
        Usuario: {
          nome_completo: {
            contains: params.nome,
            mode: "insensitive", // Ignora maiúsculas/minúsculas
          },
        },
      }),
    },
    include: {
      Usuario: {
        select: {
          nome_completo: true,
          email: true,
        },
      },
    },
  });

  return professores.map((professor) => ({
    id: professor.Usuario_id,
    nome_completo: professor.Usuario.nome_completo,
    email: professor.Usuario.email,
    area_atuacao: professor.area_atuacao,
    disponibilidade: professor.disponibilidade,
  }));
}

/**
 * Função para buscar um professor pelo ID do usuário
 * @param {number} usuarioId - ID do usuário do professor
 * @returns {Promise<Professor | null>} Retorna o professor encontrado ou null se não existir
 */
export async function findProfessorByUsuarioId(
  usuarioId: number
): Promise<Professor | null> {
  const professor = await prisma.professor.findUnique({
    where: {
      Usuario_id: usuarioId,
    },
  });

  return professor;
}

/**
 * Função para buscar um professor pelo nome
 * @param {string} nome - Nome do professor a ser buscado
 * @returns {Promise<Professor | null>} Retorna o professor encontrado ou null se não existir
 */

export async function findProfessorByName(
  nome: string
): Promise<Professor | null> {
  const professor = await prisma.professor.findFirst({
    where: {
      Usuario: {
        nome_completo: {
          contains: nome,
          mode: "insensitive", // Ignora maiúsculas/minúsculas
        },
      },
    },
    include: {
      Usuario: {
        select: {
          nome_completo: true,
          email: true,
        },
      },
    },
  });

  return professor;
}
