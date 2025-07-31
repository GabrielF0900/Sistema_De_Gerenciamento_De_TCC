import { Request, Response } from "express";
import registerService from "../../services/auth/registerService";

export default async function registerController(
  req: Request,
  res: Response
): Promise<void> {
  const { nome_completo, email, senha, tipo, curso, area_atuacao } = req.body;

  // Chama o serviço de registro
  const { token, user } = await registerService({
    nome_completo,
    email,
    password: senha,
    type: tipo.toUpperCase(), // Converte o tipo para maiúsculas
    ...(curso && { course: curso }),
    ...(area_atuacao && { areaOfExpertise: area_atuacao }),
  });

  // Responde com sucesso
  res.status(201).json({
    message: "Usuário registrado com sucesso.",
    success: true,
    token,
    usuario: {
      id: user.id,
      nome_completo: user.nome_completo,
      email: user.email,
      role: user.role,
    },
  });
}
