import TasksLayout from "@/features/tasks/TasksLayout";
import { useTCCContext } from "@/hooks/useTCCContext";
import useTitle from "@/hooks/useTitle";

/**
 * Página de Tarefas do TCC
 * @returns Componente de página de tarefas
 */

export default function TasksPage() {
  useTitle("Tarefas | Foco TCC");

  const { tccData } = useTCCContext();

  return (
    <div className="w-full max-w-8xl">
      <TasksLayout tccId={tccData.id} />
    </div>
  );
}
