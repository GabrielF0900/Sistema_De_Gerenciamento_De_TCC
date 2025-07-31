import { RequestWithUser } from "../types/auth";
import { NextFunction, Response } from "express";
import prisma from "../config/prisma";

/**
 * Middleware para validar o acesso a recursos de um TCC.
 * Permite acesso se o usuário for o dono do TCC ou um administrador.
 */
export default async function validateAccessTCC(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const user = req.user;

  const tccId = Number(req.params.id) || req.body.tccId;
  
  // Busca o TCC pelo ID
  const tcc = await prisma.tCC.findUnique({
    where: { id: tccId },
    include: { Aluno: true, Orientador: true, Coorientador: true },
  });

  if (!tcc) {
    return res
    .status(404)
    .json({ message: "TCC não encontrado.", success: false });
  }
  
  // Verifica se o usuário é um administrador
  if (user?.role === "ADMIN") {
    return next();
  }

  // Verifica se o usuário é o dono do TCC (aluno)
  if (user?.role === "ALUNO" && tcc.Aluno.Usuario_id === user?.id) {
    return next();
  }

  // Verifica se o usuário é orientador ou coorientador do TCC
  if (user?.role === "PROFESSOR") {
    const hasAccess =
      (tcc.Orientador && tcc.Orientador.Usuario_id === user?.id) ||
      (tcc.Coorientador && tcc.Coorientador.Usuario_id === user?.id);
    
    if (hasAccess) {
      return next();
    }
  }

  return res.status(403).json({
    message: "Acesso negado. Você não tem permissão para acessar este TCC.",
    success: false,
  });
}
