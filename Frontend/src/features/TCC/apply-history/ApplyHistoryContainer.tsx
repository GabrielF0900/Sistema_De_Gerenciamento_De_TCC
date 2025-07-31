import ApplyHistoryCard from "./ApplyHistoryCard";
import type { HistoricoTCC } from "@/types/historico";

type ApplyHistoryContainerProps = {
  items?: HistoricoTCC[];
};

export default function ApplyHistoryContainer({
  items,
}: ApplyHistoryContainerProps) {

  return (
    <div className="w-full flex flex-col gap-6">
      {items?.map((item) => (
        <ApplyHistoryCard key={item.id} historico={item} />
      ))}
      {items?.length === 0 && (
        <div className="text-center text-gray-500 text-xl flex justify-center items-center h-80">
          Nenhuma atividade recente encontrada.
        </div>
      )}
    </div>
  );
}
