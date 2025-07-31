import type { StatusReuniao } from "@/types/reuniao";
import { cn } from "@/utils/cn";

const statusMeeting = {
  AGENDADA: { label: "Agendada", text: "text-white", bg: "bg-blue-500" },
  REALIZADA: { label: "Realizada", text: "text-white", bg: "bg-green-500" },
  NAO_COMPARECEU: {
    label: "Não compareceu",
    text: "text-white",
    bg: "bg-orange-500",
  },
  CANCELADA: { label: "Cancelada", text: "text-white", bg: "bg-red-500" },
} satisfies Record<StatusReuniao, { label: string; text: string; bg: string }>;

type MeetingStatusProps = {
  status: StatusReuniao;
  className?: string;
};

export default function MeetingStatus({
  status,
  className,
}: MeetingStatusProps) {
  const meetingStatus = statusMeeting[status];

  return (
    <div
      className={cn(
        "px-3 py-2 text-xs rounded-full",
        meetingStatus.text,
        meetingStatus.bg,
        className
      )}
    >
      {meetingStatus.label}
    </div>
  );
}
