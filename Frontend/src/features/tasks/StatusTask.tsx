import type { StatusAtividade } from "@/types/atividade";
import { cn } from "@/utils/cn";
import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import type { IconType } from "react-icons/lib";

export const StatusColor = {
  PENDENTE: {
    cor: "text-[#343534]",
    colorBackground: "bg-[#E0E0E0]",
    icon: FaRegClock,
  },
  CONCLUIDA: {
    cor: "text-[#202D21]",
    colorBackground: "bg-[#C8E6C9]",
    icon: FaRegCheckCircle,
  },
  ATRASADA: {
    cor: "text-[#3F2C2C]",
    colorBackground: "bg-[#FFCDD2]",
    icon: FaRegClock,
  },
} satisfies Record<
  StatusAtividade,
  { cor: string; colorBackground: string; icon: IconType }
>;

export default function StatusTask({ status }: { status: StatusAtividade }) {
  const { cor, colorBackground, icon: Icon } = StatusColor[status];

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-1 text-xs font-medium border border-gray-300",
        colorBackground
      )}
    >
      <Icon className={cn("size-4", cor)} />
      <span className={cn("text-sm", cor)}>{status}</span>
    </div>
  );
}
