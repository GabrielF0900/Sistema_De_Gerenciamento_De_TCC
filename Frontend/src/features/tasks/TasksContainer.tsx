import { useTccTasks } from "./hooks/tcc-tasks.hook";
import TaskCard from "./TaskCard";

export default function TasksContainer({ tccId }: { tccId: number }) {
  const { data } = useTccTasks(tccId);

  return (
    <div className="flex flex-col gap-4">
      {data?.atividades.map((task) => (
        <TaskCard key={task.id} task={task} mostrarEditar={true} />
      ))}
      {data?.atividades.length === 0 && (
        <p className="text-gray-400 flex items-center mt-12 justify-center text-sm sm:text-base">
          Nenhuma tarefa cadastrada.
        </p>
      )}
    </div>
  );
}
