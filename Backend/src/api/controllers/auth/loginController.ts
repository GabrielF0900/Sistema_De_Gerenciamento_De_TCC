import { Request, Response } from "express";
import { validateEmail } from "../../validators/email";
import loginService from "../../services/auth/loginService";
import { ResponseError } from "../../helpers/ResponseError";

export default async function loginController(
  req: Request,
  res: Response
): Promise<void> {
  const { email, password } = req.body;

  // Validação dos campos obrigatórios
  if (!email || !password) {
    throw new ResponseError(400, "Email e senha são obrigatórios.");
  }

  // validar o formato do email
  const emailValid = validateEmail(email);

  if (!emailValid) {
    throw new ResponseError(400, "Email inválido.");
  }

  // Executa o service de login
  const { token, user } = await loginService({
    email: email.toLowerCase(),
    password,
  });

  // Resposta de sucesso
  res.status(200).json({
    message: "Login realizado com sucesso.",
    success: true,
    token: token,
    usuario: {
      id: user.id,
      nome_completo: user.nome_completo,
      email: user.email,
      role: user.role,
    },
  });
}
