import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * Schema de validação para o formulário de recuperação de senha.
 * Define que o campo email é obrigatório e deve ser um email válido.
 */
const resetPasswordSchema = z
  .object({
    novaSenha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmarNovaSenha: z.string(),
  })
  .refine((data) => data.novaSenha === data.confirmarNovaSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarNovaSenha"],
  });

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

/**
 * Hook para gerenciar o formulário de redefinição de senha.
 * Fornece métodos e estados para manipular o formulário.
 *
 * @returns {Object} - Objeto contendo métodos e estados do formulário.
 */
export function useResetPasswordForm() {
  return useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });
}
