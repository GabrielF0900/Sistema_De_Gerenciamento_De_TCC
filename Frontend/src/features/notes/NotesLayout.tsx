import React from "react";
import { Card } from "@/components/ui/card";
import { CgNotes } from "react-icons/cg";
import NotesForm from "./NotesForm";
import { Suspense } from "react";
import NotesLoading from "./NotesLoading";
import useCreateNote from "./hooks/create-note.hook";

const NotesContainer = React.lazy(() =>
  import("./NotesContainer").then((module) => ({ default: module.default }))
);

type NotesLayoutProps = {
  tcc: number;
};

/**
 * Componente de layout para Anotações
 * @returns Componente de layout de anotações
 */

export default function NotesLayout({ tcc }: NotesLayoutProps) {
  const { mutate: salvarNota, isPending } = useCreateNote();

  return (
    <Card className="flex flex-col gap-8 w-full bg-neutral rounded-lg shadow-lg p-6">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="flex items-center gap-2 sm:gap-3 font-bold text-xl sm:text-2xl lg:text-3xl">
            <CgNotes className="size-7" />
            <span>Anotações e Observações</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm sm:text-base">
            Registre aqui suas anotações e observações rápidas sobre o TCC
          </p>
        </div>
      </div>
      {/* Área de texto */}
      <NotesForm
        onSubmit={(data) =>
          salvarNota({
            tccId: tcc,
            conteudo: data.nota,
          })
        }
        loading={isPending}
      />
      <Suspense fallback={<NotesLoading />}>
        <NotesContainer tcc={tcc} />
      </Suspense>
    </Card>
  );
}
