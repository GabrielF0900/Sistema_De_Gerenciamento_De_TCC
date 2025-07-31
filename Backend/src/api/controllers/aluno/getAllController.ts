import { Request, Response } from "express";
import { getAllAlunosService } from "../../services/aluno/getAllService";

/**
 * Controlador para buscar todos os alunos
 * @param {Request} req - Requisição HTTP
 * @param {Response} res - Resposta HTTP
 */
export default async function getAllAlunosController(
  req: Request,
  res: Response
): Promise<void> {
  const alunos = await getAllAlunosService();
  res.status(200).json({
    message: "Alunos encontrados com sucesso.",
    success: true,
    alunos: alunos,
  });
}
