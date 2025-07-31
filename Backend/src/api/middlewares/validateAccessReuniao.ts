import { RequestWithUser } from "../types/auth";
import { NextFunction, Response } from "express";
import prisma from "../config/prisma";

/**
 * Middleware para validar o acesso a reuniões de um TCC.
 * Permite acesso se o usuário for o dono do TCC, orientador, coorientador ou um administrador.
 */
export default async function validateAccessTCC(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): Promise<Response | void> {
  const user = req.user;

  const reuniaoId = Number(req.params.id);

  // Verifica se a reunião pertence a um TCC e se o usuário está relacionado a ele
  const reuniao = await prisma.reuniao.findUnique({
    where: {
      id: reuniaoId,
    },
    include: {
      TCC: {
        include: {
          Aluno: {
            include: {
              Usuario: true,
            },
          },
          Orientador: {
            include: {
              Usuario: true,
            },
          },
          Coorientador: {
            include: {
              Usuario: true,
            },
          },
        },
      },
    },
  });

  if (!reuniao) {
    return res
      .status(404)
      .json({ message: "Reunião não encontrada.", success: false });
  }

  // Verifica se o usuário é um administrador
  if (user?.role === "ADMIN") {
    return next();
  }

  // Verifica se o usuário é o dono do TCC (aluno)
  if (user?.role === "ALUNO" && reuniao.TCC.Aluno.Usuario_id === user?.id) {
    return next();
  }

  // Verifica se o usuário é orientador ou coorientador do TCC
  if (user?.role === "PROFESSOR") {
    const hasAccess =
      (reuniao.TCC.Orientador &&
        reuniao.TCC.Orientador.Usuario_id === user?.id) ||
      (reuniao.TCC.Coorientador &&
        reuniao.TCC.Coorientador.Usuario_id === user?.id);

    if (hasAccess) {
      return next();
    }
  }

  return res.status(403).json({
    message:
      "Acesso negado. Você não tem permissão para modificar esta reunião.",
    success: false,
  });
}
