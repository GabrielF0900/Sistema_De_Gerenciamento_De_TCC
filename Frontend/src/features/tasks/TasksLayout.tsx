import React from "react";
import Button from "@/components/ui/Button";
import { Card } from "@/components/ui/card";
import { FaPlus } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import useModal from "@/context/modal/useModal";
import CreateTask from "./create-task/CreateTask";
import { Suspense } from "react";
import TasksLoading from "./TasksLoading";

const TasksContainer = React.lazy(() =>
  import("./TasksContainer").then((module) => ({
    default: module.default,
  }))
);

export default function TasksLayout({ tccId }: { tccId: number }) {
  const { setContent } = useModal();

  const handleCreateTask = () => {
    setContent({
      title: "Nova Tarefa",
      description: "Preencha os detalhes da nova tarefa.",
      children: <CreateTask />,
    });
  };

  return (
    <Card className="flex flex-col flex-1 gap-8 w-full shadow-lg p-6 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <GrTask className="size-10" />
          <div>
            <h1 className="font-bold text-3xl">Listas de Tarefas</h1>
            <p className="text-gray-500">Gerencie suas tarefas do seu TCC</p>
          </div>
        </div>
        <Button
          variant="primary"
          className="flex items-center justify-center gap-2"
          onClick={handleCreateTask}
        >
          <FaPlus className="size-4" />
          Nova Tarefa
        </Button>
      </div>
      <Suspense fallback={<TasksLoading />}>
        <TasksContainer tccId={tccId} />
      </Suspense>
    </Card>
  );
}
