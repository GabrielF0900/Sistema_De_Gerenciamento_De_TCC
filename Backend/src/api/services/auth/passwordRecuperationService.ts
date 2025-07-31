import { ResponseError } from "../../helpers/ResponseError";
import { findUserByEmail } from "../../repositories/usuario/usuarioRepository";
import { sendPasswordResetEmail } from "../../../email/emailService";
import { setPasswordRecoveryToken } from "../../repositories/recuperacao-senha/recuperacaoSenhaRepository";
import { encryptToken, generateRecoveryToken } from "../../utils/criptrography";

/**
 * Solicita a recuperação de senha para um usuário.
 * @param {string} email - O email do usuário que deseja recuperar a senha.
 * @returns {Promise<void>} - Retorna uma promessa que resolve quando o email de recuperação é enviado.
 */

export async function requestPasswordReset(email: string): Promise<void> {
  // Encontra o usuário pelo email
  const user = await findUserByEmail(email);

  if (!user) {
    throw new ResponseError(404, "Usuario não encontrado com este email.");
  }

  // Gera o token para recuperação de senha
  const token = generateRecoveryToken();
  const tokenHash = encryptToken(token);
  const expires = new Date(Date.now() + 30 * 60 * 1000); // Token válido por 30 minutos

  // Inserir o token de recuperação de senha no banco de dados
  await setPasswordRecoveryToken(user.id, tokenHash, expires);

  // Envia o email de recuperação de senha
  await sendPasswordResetEmail({
    to: user.email,
    token: token,
    user_id: user.id,
    userName: user.nome_completo,
  });
}
