import sgMail from "./sendgridClient";
import { passwordResetEmailData } from "./types";
import parseTemplates from "./parseTemplates";
import { ResponseError } from "../api/helpers/ResponseError";

/**
 * Função para enviar um email de redefinição de senha
 *
 * @param {passwordResetEmailData} data - Os dados necessários para o template do email, incluindo o nome do usuário e o link de redefinição de senha.
 * @param {string} to - O endereço de email do destinatário.
 * @returns {Promise<void>} - Uma promessa que resolve quando o email for enviado com sucesso.
 * @throws {Error} - Se ocorrer um erro ao enviar o email.
 */

export async function sendPasswordResetEmail(
  data: passwordResetEmailData
): Promise<void> {
  const emailContent = parseTemplates("recuperar-senha", {
    userName: data.userName,
    resetLink: `${process.env.CLIENT_URL}/redefinir-senha?user_id=${data.user_id}&token=${data.token}`,
  });

  const msg = {
    to: data.to, // O email do destinatário
    from: "israelsoaporto@gmail.com", // Use a verified sender email
    subject: "Redefinição de Senha",
    html: emailContent,
  };

  try {
    await sgMail.send(msg);
    console.log("Email de redefinição de senha enviado com sucesso.");
  } catch (error) {
    console.error("Erro ao enviar o email de redefinição de senha:", error);
    throw new ResponseError(
      500,
      "Erro ao enviar o email de redefinição de senha"
    );
  }
}
