import getAllTCCsService from "../../services/TCC/getAllService";
import { Request, Response } from "express";

/**
 * Controlador para buscar todos os TCCs.
 * @param req - Requisição HTTP.
 * @param res - Resposta HTTP.
 */
export default async function getAllController(
  req: Request,
  res: Response
): Promise<void> {
  const tccs = await getAllTCCsService();

  res.status(200).json({
    message: "TCCs encontrados com sucesso.",
    success: true,
    data: tccs,
  });
}
