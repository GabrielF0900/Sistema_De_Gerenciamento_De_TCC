import MeetingCard from "./MeetingCard";
import useMeetings from "./hooks/meetings.hook";

type MeetingsContainerProps = {
  tcc: number;
};

export default function MeetingsContainer({ tcc }: MeetingsContainerProps) {
  const { data } = useMeetings(tcc);

  return (
    <div className="flex flex-col gap-6">
      {data?.reunioes.length === 0 && (
        <div className="min-h-60 flex items-center justify-center">
          <p className="text-lg text-gray-700 font-meduim">
            nenhuma reunião agendada
          </p>
        </div>
      )}
      {data?.reunioes.map((reuniao) => (
        <MeetingCard data={reuniao} />
      ))}
    </div>
  );
}
