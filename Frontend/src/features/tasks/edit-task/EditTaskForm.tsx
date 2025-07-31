import * as Form from "@/components/ui/form";
import { DialogClose } from "@radix-ui/react-dialog";
import type { EditTaskFormData } from "./edit-task-form.schema";
import { useEditTaskForm } from "./edit-task-form.hook";

type TaskFormProps = {
  previousValues?: Partial<EditTaskFormData>;
  onSubmit: (data: EditTaskFormData) => void;
  isSubmitting?: boolean;
};

/**
 * Componente de formulário para tarefas do TCC.
 * Exibe campos para título, descrição, data de início e data de conclusão.
 * @returns Componente de formulário de tarefas do TCC
 */

export default function TaskForm({
  previousValues,
  onSubmit,
  isSubmitting,
}: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useEditTaskForm(previousValues);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Form.Label htmlFor="titulo">Título</Form.Label>
        <Form.Input
          type="text"
          variant="primary"
          id="titulo"
          placeholder="Título da tarefa"
          className="w-full"
          aria-invalid={!!errors.titulo}
          {...register("titulo")}
        />
        {errors.titulo && (
          <Form.FormError>{errors.titulo.message}</Form.FormError>
        )}
      </div>

      <div className="w-full">
        <Form.Label htmlFor="descrição">Descrição</Form.Label>
        <Form.Textarea
          id="descrição"
          variant="primary"
          placeholder="Descrição da tarefa"
          className="w-full"
          rows={5}
          aria-invalid={!!errors.descricao}
          {...register("descricao")}
        />
        {errors.descricao && (
          <Form.FormError>{errors.descricao.message}</Form.FormError>
        )}
      </div>

      <div className="w-full">
        <Form.Label htmlFor="data-conclusão">Data de Conclusão</Form.Label>
        <Form.Input
          id="data-conclusão"
          variant="primary"
          type="date"
          className="w-full"
          aria-invalid={!!errors.data_conclusao}
          {...register("data_conclusao")}
        />
        {errors.data_conclusao && (
          <Form.FormError>{errors.data_conclusao.message}</Form.FormError>
        )}
      </div>
      <div className="w-full">
        <Form.Label htmlFor="status">Status</Form.Label>
        <Form.Select
          id="status"
          variant="primary"
          className="w-full"
          aria-invalid={!!errors.status}
          {...register("status")}
        >
          <option value="PENDENTE">Pendente</option>
          <option value="CONCLUIDA">Concluído</option>
        </Form.Select>
        {errors.status && (
          <Form.FormError>{errors.status.message}</Form.FormError>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <DialogClose asChild>
          <Form.Button variant="danger" className="w-full">
            Cancelar
          </Form.Button>
        </DialogClose>
        <Form.Submit className="w-full" disabled={isSubmitting}>
          Salvar alterações
        </Form.Submit>
      </div>
    </form>
  );
}
