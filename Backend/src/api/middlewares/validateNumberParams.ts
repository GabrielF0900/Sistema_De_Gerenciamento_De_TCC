import { Request, Response, NextFunction } from "express";

/**
 * Middleware para validar parâmetros numéricos na rota.
 */

export default function validateNumberParams(
  req: Request,
  res: Response,
  next: NextFunction
): Response | void {
  const { id } = req.params;

  // Verifica se o ID é um número válido
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({
      message: "ID inválido. Deve ser um número.",
      success: false,
    });
  }

  next();
}
