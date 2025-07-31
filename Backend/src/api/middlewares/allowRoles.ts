import { Request, Response, NextFunction, RequestHandler } from "express";
import { RequestWithUser } from "../types/auth";

/**
 * Middleware para verificar se o usuário tem uma das roles permitidas.
 * @param {string[]} roles - Lista de roles permitidas.
 * @returns {Function} Middleware que verifica a role do usuário.
 */
export default function allowRoles(roles: string[]) : RequestHandler {
  return (req: RequestWithUser, res: Response, next: NextFunction): void => {
    // obtem o papel do usuário da requisição
    const userRole = req.user?.role;

    // Verifica se o papel do usuário está na lista de roles permitidas
    if (!userRole || !roles.includes(userRole)) {
      res.status(403).json({
        success: false,
        message:
          "Acesso negado. Você não tem permissão para acessar este recurso.",
      });
      return;
    }

    next();
  };
}
