import { IUpdateTCCService } from "../../services/TCC/contracts";
import updateTCCService from "../../services/TCC/updateService";
import { Request, Response } from "express";

/**
 * Controller para atualizar um TCC.
 * @param req - Requisição contendo os dados do TCC a ser atualizado.
 * @param res - Resposta a ser enviada ao cliente.
 * @returns Resposta com o TCC atualizado ou erro.
 */

export default async function updateTccController(
  req: Request,
  res: Response
): Promise<Response> {
  const { id } = req.params;
  const data = req.body as IUpdateTCCService;

  const updatedTCC = await updateTCCService(Number(id), data);

  if (!updatedTCC) {
    return res
      .status(404)
      .json({ message: "TCC não encontrado.", success: false });
  }

  return res.status(200).json({
    message: "TCC atualizado com sucesso.",
    success: true,
  });
}
