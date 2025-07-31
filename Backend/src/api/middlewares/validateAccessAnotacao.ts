import { RequestWithUser } from "../types/auth";
import { NextFunction, Response } from "express";
import prisma from "../config/prisma";

/**
 * Middleware para validar o acesso a anotações de um TCC.
 * Permite acesso se o usuário for o dono do TCC ou um administrador.
 */

export default async function validateAccessAnotacao(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const user = req.user;

  const anotacaoId = req.params.id;

  // Busca a atividade pelo ID
  const anotacao = await prisma.anotacao.findUnique({
    where: { id: Number(anotacaoId) },
    include: { TCC: true },
  });

  if (!anotacao) {
    return res
      .status(404)
      .json({ message: "Anotação não encontrada.", success: false });
  }

  // Verifica se o usuário é o dono do TCC ou um administrador
  if (user?.role === "ADMIN") {
    return next();
  }

  if (anotacao.TCC.Aluno_id === user?.id) {
    return next();
  }

  return res.status(403).json({
    message:
      "Acesso negado. Você não tem permissão para acessar esta anotação.",
    success: false,
  });
}
