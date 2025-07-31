import { HistoricoAtividades } from "@/features/TCC/apply-history/ApplyHistory";
import { useTCCContext } from "@/hooks/useTCCContext";
import useTitle from "@/hooks/useTitle";

export default function ApplyHistoryPage() {
  useTitle("Histórico de Ações do TCC | Foco TCC");

  const { tccData } = useTCCContext();

  return (
    <div className="flex flex-col -center gap-6 w-full max-w-8xl">
      <HistoricoAtividades tccId={tccData.id} />
    </div>
  );
}
