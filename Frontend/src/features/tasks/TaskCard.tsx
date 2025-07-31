import Button from "@/components/ui/Button";

// Ícones - Elementos visuais e tipagens para ícones dinâmicos
import { LuPencilLine } from "react-icons/lu";
import { Card } from "@/components/ui/card";
import type { Atividade, StatusAtividade } from "@/types/atividade";
import formatDate from "@/utils/format-date";
import StatusTask from "./StatusTask";
import useModal from "@/context/modal/useModal";
import EditTask from "./edit-task/EditTask";

// Interface de propriedades - Define os dados que o componente recebe do pai
interface TarefaCardProps {
  task: Atividade;
  mostrarEditar?: boolean;
}

// Componente principal - Renderiza um card de tarefa com controles interativos
const TaskCard = ({ task, mostrarEditar }: TarefaCardProps) => {
  const { setContent } = useModal();

  const handleEdit = () => {
    setContent({
      title: "Editar Tarefa",
      children: <EditTask id={task.id} previousData={task} />,
    });
  };

  return (
    <Card className="bg-stone-100 border border-gray-300 w-full min-h-40 rounded-md p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex gap-1">
          <h1 className="text-gray-600 text-lg sm:text-xl">#{task.id}</h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-800 flex-1">
            {task.nome}
          </p>
        </div>
        <div className="flex items-center justify-between gap-8">
          <StatusTask
            status={
              task.data_entrega < new Date()
                ? "ATRASADA"
                : (task.status as StatusAtividade)
            }
          />
          {mostrarEditar && (
            <Button className="p-2" variant="transparent" onClick={handleEdit}>
              <LuPencilLine className="size-6 hover:text-primary" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <p>{task.descricao}</p>
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm font-medium text-gray-500">
            Prazo: {formatDate(task.data_entrega, false)}
          </p>
          {task.status === "CONCLUIDA" && task.concluido_em && (
            <p className="text-sm font-medium text-gray-500">
              Concluída:{" "}
              {task.concluido_em ? formatDate(task.concluido_em, false) : "N/A"}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
