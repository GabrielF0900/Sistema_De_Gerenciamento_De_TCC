import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editTaskFormSchema,
  type EditTaskFormData,
} from "./edit-task-form.schema";

/**
 * Hook para gerenciar o formulário de tarefas do TCC.
 * Utiliza react-hook-form com validação Zod.
 * @returns {object} Objeto contendo métodos e propriedades do formulário.
 */
export function useEditTaskForm(initialValues?: Partial<EditTaskFormData>) {
  const form = useForm<EditTaskFormData>({
    resolver: zodResolver(editTaskFormSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  return {
    ...form,
  };
}
