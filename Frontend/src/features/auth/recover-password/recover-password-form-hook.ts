import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * Esquema de validação para o formulário de recuperação de senha.
 */
const recoverPasswordSchema = z.object({
  email: z
    .email("Insira um e-mail válido.")
    .nonempty("O e-mail é obrigatório."),
});

export type RecoverPasswordFormData = z.infer<typeof recoverPasswordSchema>;

/**
 * Hook para gerenciar o formulário de recuperação de senha.
 * Utiliza react-hook-form para gerenciamento de estado e validação.
 */
export function useRecoverPasswordForm() {
  return useForm<RecoverPasswordFormData>({
    resolver: zodResolver(recoverPasswordSchema),
  });
}
