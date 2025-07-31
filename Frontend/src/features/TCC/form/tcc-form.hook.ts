import TCCFormSchema, { type TCCFormData } from "./tcc-form.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * Hook para gerenciar o formulário de criação de TCC.
 * Utiliza a biblioteca react-hook-form para gerenciamento de formulários e zod para validação.
 * @param initialData - Dados iniciais para o formulário, útil para edição de TCCs existentes.
 * @returns Objeto com métodos e estados do formulário, incluindo register, handleSubmit e formState.
 */
export default function useTCCForm(initialData?: Partial<TCCFormData>) {
  const form = useForm<TCCFormData>({
    resolver: zodResolver(TCCFormSchema),
    defaultValues: {
      ...initialData,
      status: initialData?.status || "PLANEJAMENTO",
    },
  });

  return {
    ...form,
  };
}
