import { IHistoricoTccParams } from "api/repositories/historico/intefaces";
import { getTccHistoricoService } from "../../services/historico/getTccService";
import { Request, Response } from "express";

/**
 * Controlador para buscar o histórico de ações de um TCC específico.
 * @param req - Requisição contendo o ID do TCC e parâmetros de filtro.
 * @param res - Resposta a ser enviada ao cliente.
 */
export default async function getTccController(
  req: Request,
  res: Response
): Promise<Response> {
  const tccId = Number(req.params.id);
  const params = req.query as IHistoricoTccParams;

  const historico = await getTccHistoricoService(tccId, {
    page: Number(params.page) || 1,
    limit: Number(params.limit) || 10,
    acao: params.acao,
    entidade: params.entidade,
    periodo: params.periodo,
  });

  return res.status(200).json({
    message: "Histórico encontrado com sucesso.",
    success: true,
    ...historico,
  });
}
