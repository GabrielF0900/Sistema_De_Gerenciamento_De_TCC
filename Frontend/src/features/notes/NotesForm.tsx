import { FormError, Submit, Textarea } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";

type NotesFormProps = {
  onSubmit: (data: NoteFormData) => void;
  loading?: boolean;
};

type NoteFormData = {
  nota: string;
};

export default function NotesForm({
  onSubmit,
  loading = false,
}: NotesFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NoteFormData>({
    defaultValues: {
      nota: "",
    },
  });

  const onSubmitForm = (data: NoteFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="flex flex-col gap-2">
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full h-60 relative"
      >
        <Textarea
          variant="primary"
          placeholder="Adicione suas anotações..."
          className="w-full h-full pb-10"
          aria-invalid={!!errors.nota}
          {...register("nota", {
            required: "Anotação não pode ser vazia",
          })}
        />
        <Submit
          variant="primary"
          className="flex items-center gap-2 absolute bottom-2 right-3 rounded-full"
          disabled={loading}
        >
          {!loading && <FaPlus className="size-5" />}
        </Submit>
      </form>
      {errors.nota && <FormError>{errors.nota.message}</FormError>}
    </div>
  );
}
