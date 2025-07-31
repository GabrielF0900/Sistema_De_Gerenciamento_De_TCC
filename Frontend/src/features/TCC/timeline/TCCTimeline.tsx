import { Card, CardHeader } from "@/components/ui/card";
import { useCronograma } from "@/hooks/useCronograma";
import { useStatusTheme, type Status } from "@/hooks/useStatusTheme";
import { cn } from "@/utils/cn";
import formatDate from "@/utils/format-date";
import { Calendar } from "lucide-react";

type TCCTimelineProps = {
  startDate?: Date | string;
  endDate?: Date | string;
  status?: Date | string;
};

/**
 * Componente para exibir o cronograma do TCC
 * @param {TCCTimelineProps} props - Propriedades do componente
 * @returns Componente Card com o cronograma do TCC
 */

export default function TCCTimeline({
  startDate,
  endDate,
  status,
}: TCCTimelineProps) {
  // Cálculos
  const formatedStartDate = formatDate(startDate as string, false);
  const formatedEndDate = formatDate(endDate as string, false);
  const diasRestantes = useCronograma(endDate as string);
  const prazoAtrasado = diasRestantes !== null && diasRestantes < 0;
  const statusKey = prazoAtrasado ? "ATRASADO" : status || "PENDENTE";
  const statusAtual = useStatusTheme(statusKey as Status);

  return (
    <Card className="flex flex-col gap-6 min-h-60 p-6">
      <CardHeader className="gap-2 p-0">
        <Calendar className="size-6" />
        <h2 className="text-xl font-semibold">Cronograma do TCC</h2>
      </CardHeader>
      {/* Datas */}
      <div className="flex flex-col text-base text-gray-500 gap-4">
        <div className="flex justify-between">
          <span>Data de início:</span>
          <span className="text-gray-900 font-semibold">
            {formatedStartDate ?? "--/--/----"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Data de entrega:</span>
          <span className="text-gray-900 font-semibold">
            {formatedEndDate ?? "--/--/----"}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Dias restantes:</span>
          <span className="text-gray-900 font-semibold">
            {diasRestantes ?? "—"}
          </span>
        </div>
      </div>
      {/* Status */}
      {status && (
        <span
          className={cn(
            "text-lg font-bold rounded-lg text-center p-2 sm:p-1 flex justify-center items-center min-h-[2rem] sm:min-h-[2.5rem]",
            statusAtual?.colorBackground,
            statusAtual?.cor
          )}
        >
          {statusAtual?.nome}
        </span>
      )}
    </Card>
  );
}
