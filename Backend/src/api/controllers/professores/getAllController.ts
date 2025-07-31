import { Request, Response } from "express";
import getAllProfessoresService from "../../services/professores/getAllService";
import { GetAllProfessoresParams } from "../../repositories/professor/interfaces";

/**
 * Controlador para buscar todos os professores
 * @param {Request} req - Requisição HTTP
 * @param {Response} res - Resposta HTTP
 */
export default async function getAllProfessoresController(
  req: Request,
  res: Response
): Promise<void> {
  const { nome, disponivel } = req.query as GetAllProfessoresParams;

  const professores = await getAllProfessoresService({
    nome: nome ? String(nome) : undefined,
    disponivel: disponivel ? Boolean(disponivel) : undefined,
  });

  res.status(200).json({
    success: true,
    message: "Professores encontrados com sucesso.",
    data: professores,
  });
}
