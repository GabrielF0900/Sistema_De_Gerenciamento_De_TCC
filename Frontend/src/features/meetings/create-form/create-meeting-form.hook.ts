import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createMeetingFormSchema, {
  type CreateMeetingFormData,
} from "./create-meeting-form.schema";

export default function useCreateMeetingForm(
  initialValues?: CreateMeetingFormData
) {
  const form = useForm<CreateMeetingFormData>({
    resolver: zodResolver(createMeetingFormSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  return {
    ...form,
  };
}
