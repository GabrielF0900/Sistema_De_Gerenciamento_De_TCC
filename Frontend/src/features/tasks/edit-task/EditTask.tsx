import { useEffect, useMemo, useCallback } from "react";
import useModal from "@/context/modal/useModal";
import type { EditTaskFormData } from "./edit-task-form.schema";
import EditTaskForm from "./EditTaskForm";
import type { Atividade } from "@/types/atividade";
import useEditTask from "../hooks/edit-task.hook";

type EditTaskProps = {
  id: number;
  previousData?: Partial<Atividade>;
};

/**
 * Componente para editar uma tarefa existente.
 * Utiliza o hook useEditTask para gerenciar a edição da tarefa.
 * Recebe o ID da tarefa e os dados anteriores como propriedades.
 * @param id ID da tarefa a ser editada
 * @param previousData Dados anteriores da tarefa para preencher o formulário
 * @returns Componente de edição de tarefa
 */

export default function EditTask({ id, previousData }: EditTaskProps) {
  const { mutate: editTask, isPending, isSuccess } = useEditTask();
  const { closeModal } = useModal();

  const handleSubmit = useCallback(
    (data: EditTaskFormData) => {
      editTask({
        taskId: id,
        data: {
          nome: data.titulo,
          descricao: data.descricao,
          dataEntrega: data.data_conclusao,
          status: data.status,
        },
      });
    },
    [editTask, id]
  );

  useEffect(() => {
    if (isSuccess) closeModal();
  }, [isSuccess, closeModal]);

  const initialValues = useMemo(
    () => ({
      titulo: previousData?.nome ?? "",
      descricao: previousData?.descricao ?? "",
      data_conclusao: previousData?.data_entrega
        ? new Date(previousData.data_entrega as Date).toISOString().slice(0, 10)
        : "",
      status:
        previousData?.status === "ATRASADA"
          ? "PENDENTE"
          : previousData?.status ?? "PENDENTE",
    }),
    [previousData]
  );

  return (
    <EditTaskForm
      previousValues={initialValues}
      onSubmit={handleSubmit}
      isSubmitting={isPending}
    />
  );
}
