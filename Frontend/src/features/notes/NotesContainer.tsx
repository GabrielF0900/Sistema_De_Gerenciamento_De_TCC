import useNotes from "./hooks/get-notes.hook";
import NoteCard from "./NoteCard";

type NotesContainerProps = {
  tcc: number;
};

export default function NotesContainer({ tcc }: NotesContainerProps) {
  const { data } = useNotes(tcc);

  console.log("Dados das anotações:", data);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-col gap-4">
        {data?.anotacoes.length === 0 && (
          <div className="text-gray-400 flex items-center justify-center h-60">
            <p>Nenhuma anotação cadastrada.</p>
          </div>
        )}
        {data?.anotacoes.map((nota) => (
          <NoteCard key={nota.id} nota={nota} />
        ))}
      </div>
    </div>
  );
}
