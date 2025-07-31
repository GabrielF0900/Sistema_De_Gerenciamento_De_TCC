import { ResponseError } from "../../helpers/ResponseError";
import { findUserByEmail } from "../../repositories/usuario/usuarioRepository";
import { generateJwtToken } from "../../utils/jwt";
import { AuthPayload, ILoginService } from "./contracts";
import bcrypt from "bcryptjs";

/**
 * Serviço de login que autentica um usuário com base no email e senha fornecidos.
 * @param {ILoginService} params - Parâmetros de login contendo email e senha.
 * @returns {Promise<AuthPayload>} Retorna um objeto contendo o token JWT e os dados do usuário.
 * @throws {ResponseError} Lança um erro se a autenticação falhar.
 */
export default async function loginService(
  params: ILoginService
): Promise<AuthPayload> {
  // Busca o usuário no banco de dados
  const usuario = await findUserByEmail(params.email);

  // Verifica se o usuário existe
  if (!usuario) {
    throw new ResponseError(404, "Usuário não encontrado");
  }

  // Verifica a senha
  const senhaCorreta = await bcrypt.compare(params.password, usuario.senha);

  if (!senhaCorreta) {
    throw new ResponseError(401, "Senha inválida");
  }

  // Geração do token JWT
  const payload = {
    id: usuario.id,
    nome_completo: usuario.nome_completo,
    role: usuario.tipo,
    email: usuario.email,
  };

  const token = generateJwtToken(payload);

  return { token, user: payload };
}
