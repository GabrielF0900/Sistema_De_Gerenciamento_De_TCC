import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * Esquema de validação para o formulário de login.
 * Utiliza zod para definir as regras de validação dos campos.
 * - email: deve ser um email válido e não pode estar vazio.
 * - password: deve ser uma string não vazia com pelo menos 6 caracteres.
 */ 
const loginSchema = z.object({
  email: z.email("Email inválido").nonempty("Email é obrigatório"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;


/**
 * Hook personalizado para gerenciar o formulário de login.
 * Utiliza react-hook-form com zod para validação.
 * Retorna as funções e estados necessários para manipular o formulário.
 */
export function useLoginForm() {
  return useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
}
