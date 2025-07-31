import { GetBatchResult } from "@prisma/client/runtime/library";
import prisma from "../../config/prisma";
import { RecuperacaoSenha } from "@prisma/client";

/**
 * Função para criar um registro de recuperação de senha no banco de dados
 * @param {number} userId - ID do usuário para o qual a recuperação de senha é solicitada
 * @returns {Promise<RecuperacaoSenha>} Retorna o registro de recuperação de senha criado
 */
export async function setPasswordRecoveryToken(
  userId: number,
  token: string,
  expires: Date
): Promise<RecuperacaoSenha | null> {
  const recoveryRequest = await prisma.recuperacaoSenha.create({
    data: {
      Usuario_id: userId,
      tokenHash: token,
      expiracao: expires,
    },
  });

  return recoveryRequest;
}

/**
 * Função para buscar um registro de recuperação de senha pelo token
 * @param {string} token - Token de recuperação de senha
 * @returns {Promise<RecuperacaoSenha | null>} Retorna o registro encontrado ou null se não existir
 */
export async function verifyRecoveryToken(
  userId: number,
  token: string
): Promise<RecuperacaoSenha | null> {
  const recoveryRequest = await prisma.recuperacaoSenha.findFirst({
    where: {
      Usuario_id: userId,
      tokenHash: token,
      expiracao: { gte: new Date() },
    },
  });

  return recoveryRequest;
}

/**
 * Função para remover todos os registros de recuperação de senha de um usuário
 * @param {number} id - ID do usuário cujos registros serão removidos
 * @returns {Promise<RecuperacaoSenha | null>} Retorna o registro removido ou null se não existir
 */
export async function deleteRecoveryRequestsByUserId(
  id: number
): Promise<GetBatchResult> {
  const recoveryRequest = await prisma.recuperacaoSenha.deleteMany({
    where: { Usuario_id: id },
  });

  return recoveryRequest;
}
