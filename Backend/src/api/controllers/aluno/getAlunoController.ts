import getAlunoService from "../../services/aluno/getAlunoService";
import { Response, Request } from "express";

/**
 * Controlador para obter os detalhes de um aluno pelo ID.
 * @param req - Requisição contendo o ID do aluno no parâmetro de rota.
 * @param res - Resposta a ser enviada ao cliente.
 */
export default async function getAlunoController(
  req: Request,
  res: Response
): Promise<Response> {
  const alunoId = parseInt(req.params.id, 10);

  const aluno = await getAlunoService(alunoId);

  return res.status(200).json({
    message: "Aluno encontrado com sucesso",
    success: true,
    aluno: aluno,
  });
}
