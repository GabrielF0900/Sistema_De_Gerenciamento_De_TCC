import Button from "@/components/ui/Button";
import type { Anotacao } from "@/types/anotacao";
import formatDate from "@/utils/format-date";
import { FaTrashCan } from "react-icons/fa6";
import useDeleteNote from "./hooks/delete-note.hooks";
import { LoaderCircle } from "lucide-react";

type NoteCardProps = {
  nota: Anotacao;
};

export default function NoteCard({ nota }: NoteCardProps) {
  const { mutate, isPending } = useDeleteNote();

  const handleDelete = () => {
    if (isPending) return;
    mutate(nota.id);
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-md">
      <div className="min-h-32 flex justify-between">
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between gap-4 overflow-x-auto">
            <p className="font-medium text-gray-800 text-ellipsis">
              {nota.conteudo ?? "Sem conteúdo"}
            </p>
            <span className="text-xs text-gray-600">
              {formatDate(nota.criado_em)}
            </span>
          </div>
          <Button
            variant="ghost"
            className="self-start p-2 hover:text-primary"
            onClick={handleDelete}
          >
            {isPending && (
              <LoaderCircle className="text-gray-500 animate-spin" />
            )}
            {!isPending && <FaTrashCan className="text-gray-500" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
