import z from "zod";

/**
 * Schema de validação para o formulário de atualização de senha.
 * Define as regras de validação para os campos de senha.
 */
const updatePasswordSchema = z
  .object({
    novaSenha: z
      .string()
      .min(6, "A nova senha deve ter pelo menos 6 caracteres"),
    confirmarNovaSenha: z.string(),
  })
  .refine((data) => data.novaSenha === data.confirmarNovaSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarNovaSenha"],
  });

export type UpdatePasswordFormData = z.infer<typeof updatePasswordSchema>;
export default updatePasswordSchema;
