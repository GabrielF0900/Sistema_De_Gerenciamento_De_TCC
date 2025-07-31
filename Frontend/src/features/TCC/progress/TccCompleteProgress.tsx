import { Card, CardHeader } from "@/components/ui/card";
import ProgressBar from "@/components/common/ProgressBar";
import { PresentationIcon, Target } from "lucide-react";
import { IoMdPeople, IoMdTrendingUp } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import type { TCCProgress } from "@/types/progresso";

type TccCompleteProgressProps = {
  data?: TCCProgress;
};

/**
 * Componente que exibe o progresso do TCC detalhado, incluindo marcos, etapas, reuniões e defesas.
 * @returns Componente de progresso do TCC
 */
export default function TccCompleteProgress({
  data,
}: TccCompleteProgressProps) {
  return (
    <Card className="p-6 flex flex-col gap-6">
      <CardHeader className="p-0">
        <h2 className="text-2xl font-semibold">Progresso do TCC</h2>
      </CardHeader>
      <div className="flex flex-col gap-4">
        <ProgressBar
          progress={data?.total ?? 0}
          title="Progresso Total"
          icon={() => <IoMdTrendingUp className="text-gray-800 size-5" />}
        />
        <ProgressBar
          progress={data?.detalhamento.etapas.pontuacao ?? 0}
          title="Marcos"
          icon={() => <Target className="text-green-500 size-5" />}
        />
        <ProgressBar
          title="Tarefas"
          progress={data?.detalhamento.tarefas.pontuacao ?? 0}
          icon={() => <FaTasks className="text-blue-500" />}
        />

        <ProgressBar
          title="Reuniões"
          progress={data?.detalhamento.reunioes.pontuacao ?? 0}
          icon={() => <IoMdPeople className="text-violet-500" />}
        />
        <ProgressBar
          title="Defesas"
          progress={data?.detalhamento.defesas.pontuacao ?? 0}
          icon={() => <PresentationIcon className="text-red-500 size-4" />}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl">Marcos</h3>
          <div className="grid grid-cols-2 grid-row-3 gap-x-8 gap-y-2">
            <span>Peso</span>
            <span>{`${data?.detalhamento.etapas.peso ?? 30}%`}</span>
            <span>Total</span>
            <span>{data?.detalhamento.etapas.total ?? 0}</span>
            <span>Concluídas</span>
            <span>{data?.detalhamento.etapas.concluidas ?? 0}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl">Etapas</h3>
          <div className="grid grid-cols-2 grid-row-3 gap-x-8 gap-y-2">
            <span>Peso</span>
            <span>{`${data?.detalhamento.tarefas.peso ?? 30}%`}</span>
            <span>Total</span>
            <span>{data?.detalhamento.tarefas.total ?? 0}</span>
            <span>Concluídas</span>
            <span>{data?.detalhamento.tarefas.concluidas ?? 0}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl">Reuniões</h3>
          <div className="grid grid-cols-2 grid-row-3 gap-x-8 gap-y-2">
            <span>Peso</span>
            <span>{`${data?.detalhamento.reunioes.peso ?? 20}%`}</span>
            <span>Agendadas</span>
            <span>{data?.detalhamento.reunioes.agendadas ?? 0}</span>
            <span>Realizadas</span>
            <span>{data?.detalhamento.reunioes.realizadas ?? 0}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-xl">Defesas</h3>
          <div className="grid grid-cols-2 grid-row-3 gap-x-8 gap-y-2">
            <span>Peso</span>
            <span>{`${data?.detalhamento.defesas.peso ?? 20}%`}</span>
            <span>Pré-Banca</span>
            <span>
              {data?.detalhamento.defesas.preBanca
                ? "Realizada"
                : "Não Realizada"}
            </span>
            <span>Final</span>
            <span>
              {data?.detalhamento.defesas.bancaFinal
                ? "Realizada"
                : "Não Realizada"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
