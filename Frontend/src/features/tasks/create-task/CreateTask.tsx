import useCreateTask from "../hooks/create-task.hook";
import { useTCCContext } from "@/hooks/useTCCContext";
import { useLocation, useNavigate } from "react-router-dom";
import useModal from "@/context/modal/useModal";
import CreateTaskForm from "./CreateTaskForm";
import type { CreateTaskFormData } from "./create-task-form.schema";

/**
 * Componente para criar uma nova tarefa.
 * Utiliza o hook useCreateTask para gerenciar a criação da tarefa.
 * @returns Componente de criação de tarefa
 */

export default function CreateTask() {
  const { mutate: createTask, isPending, isSuccess } = useCreateTask();

  const { tccData } = useTCCContext();

  const { closeModal } = useModal();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (data: CreateTaskFormData) => {
    createTask({
      ...data,
      nome: data.titulo,
      dataEntrega: data.data_conclusao,
      tccId: tccData?.id,
      status: "PENDENTE",
    });
  };

  if (isSuccess) {
    closeModal();

    if (location.pathname !== "/tarefas") {
      navigate("/tarefas");
    }
  }

  return <CreateTaskForm onSubmit={handleSubmit} isSubmitting={isPending} />;
}
