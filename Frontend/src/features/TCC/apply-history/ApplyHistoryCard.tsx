import type { EntidadesHistorico, HistoricoTCC } from "@/types/historico";
import { cn } from "@/utils/cn";
import formatDate from "@/utils/format-date";
import type { IconType } from "react-icons";
import { BiCommentDetail } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { GrTask } from "react-icons/gr";
import { IoPeopleSharp } from "react-icons/io5";
import { LuGraduationCap, LuPresentation, LuTarget } from "react-icons/lu";

const Icon = {
  TCC: LuGraduationCap,
  ATIVIDADE: GrTask,
  ANOTACAO: CgNotes,
  ETAPA_TCC: LuTarget,
  REUNIAO: IoPeopleSharp,
  DEFESA: LuPresentation,
  COMENTARIO: BiCommentDetail,
} satisfies Record<EntidadesHistorico, IconType>;

const actionColors = {
  CRIAR: { text: "text-green-600", bg: "bg-green-200" },
  ALTERAR: { text: "text-yellow-600", bg: "bg-yellow-200" },
  ATUALIZAR: { text: "text-blue-600", bg: "bg-blue-200" },
  EXCLUIR: { text: "text-red-600", bg: "bg-red-200" },
  CANCELAR: { text: "text-orange-600", bg: "bg-orange-200" },
} satisfies Record<string, { text: string; bg: string }>;

type ApplyHistoryCardProps = {
  historico: HistoricoTCC;
};

export default function ApplyHistoryCard({ historico }: ApplyHistoryCardProps) {
  const IconEntity = Icon[historico.entidade] || GrTask;
  const action = actionColors[historico.acao] || {
    text: "text-gray-600",
    bg: "bg-gray-200",
  };

  return (
    <div
      className={cn("flex items-center justify-between p-4 rounded shadow-sm", {
        [action.bg]: true,
      })}
    >
      <div className="flex items-center gap-4">
        <IconEntity className={cn("size-6", action.text)} />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800">
            {historico.descricao ?? "Atividade sem descrição"}
          </h3>
          <p className="text-sm text-gray-700">
            {historico.detalhes ?? "Sem detalhes adicionais"}
          </p>
          <p className="text-sm text-gray-700">
            {formatDate(historico.feito_em, true) || "Data não disponível"}
          </p>
        </div>
      </div>
    </div>
  );
}
