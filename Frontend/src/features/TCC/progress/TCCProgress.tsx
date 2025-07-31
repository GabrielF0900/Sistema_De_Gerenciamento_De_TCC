import ProgressBar from "@/components/common/ProgressBar";
import { Card, CardHeader } from "@/components/ui/card";
import type { TCCProgress } from "@/types/progresso";
import { cn } from "@/utils/cn";
import { PresentationIcon, Target } from "lucide-react";
import { FaTasks } from "react-icons/fa";
import { IoMdPeople, IoMdTrendingUp } from "react-icons/io";

type TCCProgressProps = {
  className?: string;
  progress?: TCCProgress;
};

export default function TCCProgress({ className, progress }: TCCProgressProps) {
  return (
    <Card
      className={cn(
        "w-full max-w-7xl bg-neutral flex flex-col gap-8 rounded-lg shadow-lg p-6",
        className
      )}
    >
      <CardHeader className="gap-2 p-0">
        <IoMdTrendingUp className="size-6" />
        <h2 className="text-2xl font-semibold">Progresso Detalhado</h2>
      </CardHeader>
      <div className="flex flex-col flex-1 justify-between gap-6">
        <ProgressBar
          title="Marcos"
          progress={progress?.detalhamento.etapas.pontuacao ?? 0}
          icon={() => <Target className="text-green-500 size-5" />}
        >
          <span className="text-sm text-gray-500">
            {`${progress?.detalhamento.etapas.concluidas ?? 0} de ${
              progress?.detalhamento.etapas.total ?? 0
            } etapas concluídas`}
          </span>
        </ProgressBar>
        <ProgressBar
          title="Tarefas"
          progress={progress?.detalhamento.tarefas.pontuacao ?? 0}
          icon={() => <FaTasks className="text-blue-500" />}
        >
          <span className="text-sm text-gray-500">
            {`${progress?.detalhamento.tarefas.concluidas ?? 0} de ${
              progress?.detalhamento.tarefas.total ?? 0
            } tarefas concluídas`}
          </span>
        </ProgressBar>
        <ProgressBar
          title="Reuniões"
          progress={progress?.detalhamento.reunioes.realizadas ?? 0}
          icon={() => <IoMdPeople className="text-violet-500" />}
        >
          <span className="text-sm text-gray-500">
            {`${progress?.detalhamento.reunioes.realizadas ?? 0} de ${
              progress?.detalhamento.reunioes.agendadas ?? 0
            } reuniões realizadas`}
          </span>
        </ProgressBar>
        <ProgressBar
          title="Defesas"
          progress={progress?.detalhamento.defesas.pontuacao ?? 0}
          icon={() => <PresentationIcon className="text-red-500 size-4" />}
        >
          <span className="text-sm text-gray-500">
            {!progress?.detalhamento.defesas.preBanca &&
              !progress?.detalhamento.defesas.bancaFinal &&
              "Defesas não realizadas"}
            {progress?.detalhamento.defesas.preBanca &&
            !progress?.detalhamento.defesas.bancaFinal
              ? "Pré-banca realizada"
              : ""}
            {progress?.detalhamento.defesas.bancaFinal &&
            !progress?.detalhamento.defesas.preBanca
              ? "Banca final realizada"
              : ""}
            {progress?.detalhamento.defesas.preBanca &&
              progress?.detalhamento.defesas.bancaFinal &&
              "Pré-banca e banca final realizadas"}
          </span>
        </ProgressBar>
      </div>
    </Card>
  );
}
