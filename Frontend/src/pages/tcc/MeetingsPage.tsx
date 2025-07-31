import MeetingsLayout from "@/features/meetings/MeetingsLayout";
import { useTCCContext } from "@/hooks/useTCCContext";
import useTitle from "@/hooks/useTitle";

export default function MeetingsPage() {
  useTitle("Reuniões | FocoTCC");

  const { tccData } = useTCCContext();

  return (
    <div className="flex flex-col gap-6 w-full max-w-8xl">
      <MeetingsLayout tcc={tccData?.id} />
    </div>
  );
}
