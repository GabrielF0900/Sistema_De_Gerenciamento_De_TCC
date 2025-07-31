import { Aluno } from "@prisma/client";
import prisma from "../../config/prisma";
import { GetAlunos, IAluno } from "./interfaces";

/**
 * Função para buscar todos os alunos no banco de dados
 * @returns {Promise<GetAluno | null>} Retorna o aluno encontrado ou null se não existir
 */
export async function findAllAlunos(): Promise<GetAlunos[]> {
  const alunos = await prisma.aluno.findMany({
    include: {
      Usuario: {
        select: {
          email: true,
          nome_completo: true,
        },
      },
    },
  });

  return alunos.map((aluno) => ({
    id: aluno.Usuario_id,
    nome_completo: aluno.Usuario.nome_completo,
    email: aluno.Usuario.email,
    curso: aluno.curso,
  }));
}

/**
 * Função para criar um aluno no banco de dados
 * @param {Aluno} data - Dados do aluno a ser criado
 * @returns {Promise<Aluno | null>} Retorna o aluno encontrado ou null se não existir
 */
export async function createAluno(data: Aluno): Promise<Aluno | null> {
  const aluno = await prisma.aluno.create({
    data: {
      Usuario_id: data.Usuario_id,
      curso: data.curso,
    },
  });

  return aluno;
}

/**
 * Função para buscar um aluno pelo ID
 * @param {number} id - ID do aluno a ser buscado
 * @returns {Promise<IAluno | null>} Retorna o aluno encontrado ou null se não existir
 */
export async function findAlunoById(id: number): Promise<IAluno | null> {
  const aluno = await prisma.aluno.findUnique({
    where: { Usuario_id: id },
    include: {
      Usuario: {
        select: {
          email: true,
          nome_completo: true,
          criado_em: true,
          atualizado_em: true,
        },
      },
    },
  });

  if (!aluno) {
    return null;
  }

  return {
    id: aluno.Usuario_id,
    nome_completo: aluno.Usuario.nome_completo,
    email: aluno.Usuario.email,
    curso: aluno.curso,
    criado_em: aluno.Usuario.criado_em,
    atualizado_em: aluno.Usuario.atualizado_em,
  };
}
