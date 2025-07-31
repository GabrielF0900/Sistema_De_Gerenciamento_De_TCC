import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UpdatePasswordFormData } from "./update-password.schema";
import updatePasswordSchema from "./update-password.schema";

/**
 * Hook para gerenciar o formulário de atualização de senha do usuário.
 * Fornece métodos e estados para manipular o formulário.
 *
 * @returns {Object} - Objeto contendo métodos e estados do formulário.
 */
export default function useUpdatePasswordForm() {
  return useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
  });
}
