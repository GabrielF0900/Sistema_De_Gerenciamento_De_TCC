import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TaskFormSchema,
  type CreateTaskFormData,
} from "./create-task-form.schema";

/**
 * Hook para gerenciar o formulário de criação de tarefas.
 * Utiliza react-hook-form com validação Zod.
 * @returns {object} Objeto contendo métodos e propriedades do formulário.
 */
export function useCreateTaskForm() {
  const form = useForm<CreateTaskFormData>({
    resolver: zodResolver(TaskFormSchema),
  });

  return {
    ...form,
  };
}
