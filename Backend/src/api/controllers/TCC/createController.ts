import { ICreateTCC } from "../../repositories/TCC/interfaces";
import createTCCService from "../../services/TCC/CreateService";
import { Request, Response } from "express";
import { RequestWithUser } from "../../types/auth";
import { ICreateTCCService } from "../../services/TCC/contracts";

export default async function createTCCController(
  req: RequestWithUser,
  res: Response
): Promise<void> {
  const data = req.body as ICreateTCCService;
  const user = req.user;

  if (!data) {
    res.status(400).json({
      message: "Dados do TCC não fornecidos.",
      success: false,
    });
    return;
  }

  // Adiciona o ID do usuário ao payload
  if (user?.id === undefined) {
    res.status(400).json({
      message: "ID do usuário não encontrado.",
      success: false,
    });
    return;
  }
  data.alunoId = user.id;

  const tcc = await createTCCService(data);

  res.status(201).json({
    message: "TCC criado com sucesso",
    success: true,
    tcc: tcc,
  });
}
