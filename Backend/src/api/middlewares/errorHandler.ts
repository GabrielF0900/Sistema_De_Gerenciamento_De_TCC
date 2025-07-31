import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../helpers/ResponseError";

/**
 * Middleware de tratamento de erros para capturar e responder a erros de forma consistente.
 */
export function errorHandler(
  err: Error | ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Verifica se o erro é uma instância de ResponseError
  if (err instanceof ResponseError) {
    res.status(err.statusCode).json({
      message: err.message,
      success: false,
    });
    if (err.details) console.error(err.details);
  } else {
    // Resposta genérica para outros erros
    res.status(500).json({
      message: "Ocorreu um erro interno no servidor.",
      success: false,
    });
    console.error(err);
  }
}
