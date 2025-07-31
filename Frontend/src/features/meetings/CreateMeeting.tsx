import useModal from "@/context/modal/useModal";
import CreateMeetingForm from "./create-form/CreateMeetingForm";
import useCreateMeeting from "./hooks/create-meeting.hook";
import { useLocation, useNavigate } from "react-router-dom";
import type { CreateMeetingFormData } from "./create-form/create-meeting-form.schema";
import { useTCCContext } from "@/hooks/useTCCContext";

export default function CreateMeeting() {
  const { mutate: createMeeting, isPending, isSuccess } = useCreateMeeting();

  const { tccData } = useTCCContext();

  const { closeModal } = useModal();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (data: CreateMeetingFormData) => {
    createMeeting({
      ...data,
      tccId: tccData?.id,
    });
  };

  if (isSuccess) {
    closeModal();

    if (location.pathname !== "/reunioes") {
      navigate("/reunioes");
    }
  }

  return <CreateMeetingForm onSubmit={handleSubmit} isSubmitting={isPending} />;
}
