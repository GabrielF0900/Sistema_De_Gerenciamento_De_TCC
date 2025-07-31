import ProgressBar from "@/components/common/ProgressBar";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

type TCCInfoProps = {
  info?: {
    title: string;
    course: string;
    advisor: string;
    coAdvisor: string;
    knowledgeArea: string;
    totalProgress: number;
    startDate?: string;
    endDate?: string;
  };
};

/**
 * Componente para exibir informações do TCC
 * @param {TCCInfoProps} props - Propriedades do componente
 * @returns Componente Card com informações do TCC
 */

export default function TCCInfo({ info }: TCCInfoProps) {
  return (
    <Card className="w-full bg-neutral flex flex-col rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-col gap-4">
        <span className="flex items-center gap-2 text-lg font-semibold">
          <GraduationCap className="inline size-8 text-primary" />
          Trabalho de Conclusão de Curso
        </span>
        <h2 className="text-xl font-bold">
          {info?.title ?? "Nenhum TCC definido"}
        </h2>
        <div className="flex flex-row flex-wrap gap-4 justify-between">
          <div className="flex flex-col">
            <span className="text-gray-500">Curso:</span>
            <span className="text-gray-800">
              {info?.course ?? "Nenhum curso definido"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Área de conhecimento:</span>
            <span className="text-gray-800">
              {info?.knowledgeArea ?? "Nenhuma área definida"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Orientador:</span>
            <span className="text-gray-800">
              {info?.advisor ?? "Nenhum orientador atribuído"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Coorientador:</span>
            <span className="text-gray-800">
              {info?.coAdvisor ?? "Nenhum coorientador atribuído"}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ProgressBar
          title="Progresso do TCC"
          progress={info?.totalProgress ?? 0}
        >
          <span className="text-sm text-gray-500">
            Projeto iniciado em {info?.startDate ?? "--/--/----"}, e previsto
            para conclusão em {" "}
            {info?.endDate ?? "--/--/----"}
          </span>
        </ProgressBar>
      </div>
    </Card>
  );
}
