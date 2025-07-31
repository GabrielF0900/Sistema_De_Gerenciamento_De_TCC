import NotesLayout from "@/features/notes/NotesLayout";
import { useTCCContext } from "@/hooks/useTCCContext";
import useTitle from "@/hooks/useTitle";

/**
 * Página de Anotações do TCC
 * @returns Componente de página de anotações
 */

export default function NotesPage() {
  useTitle("Anotações | Foco TCC");

  const { tccData } = useTCCContext();

  return (
    <div className="w-full max-w-8xl">
      <NotesLayout tcc={tccData.id} />
    </div>
  );
}
