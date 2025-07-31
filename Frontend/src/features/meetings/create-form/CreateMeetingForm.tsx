import * as Form from "@/components/ui/form";
import { DialogClose } from "@radix-ui/react-dialog";
import useCreateMeetingForm from "./create-meeting-form.hook";
import type { CreateMeetingFormData } from "./create-meeting-form.schema";

type CreateMeetingFormProps = {
  initialValues?: CreateMeetingFormData;
  onSubmit: (data: CreateMeetingFormData) => void;
  isSubmitting?: boolean;
};

export default function CreateMeetingForm({
  initialValues,
  onSubmit,
  isSubmitting,
}: CreateMeetingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useCreateMeetingForm(initialValues);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <Form.Label htmlFor="titulo">Título</Form.Label>
        <Form.Input
          type="text"
          variant="primary"
          id="titulo"
          placeholder="Título da tarefa"
          className="w-full"
          aria-invalid={!!errors.titulo}
          {...register("titulo")}
        />
        {errors.titulo && (
          <Form.FormError>{errors.titulo.message}</Form.FormError>
        )}
      </div>

      <div className="w-full">
        <Form.Label htmlFor="descrição">Descrição</Form.Label>
        <Form.Textarea
          id="descrição"
          variant="primary"
          placeholder="Descrição da tarefa"
          className="w-full"
          rows={5}
          aria-invalid={!!errors.descricao}
          {...register("descricao")}
        />
        {errors.descricao && (
          <Form.FormError>{errors.descricao.message}</Form.FormError>
        )}
      </div>

      <div className="w-full">
        <Form.Label htmlFor="data-conclusão">
          Data e Horario Agendado
        </Form.Label>
        <Form.Input
          id="data-agendada"
          variant="primary"
          type="datetime-local"
          className="w-full"
          aria-invalid={!!errors.data_agendada}
          {...register("data_agendada")}
        />
        {errors.data_agendada && (
          <Form.FormError>{errors.data_agendada.message}</Form.FormError>
        )}
      </div>
      <div className="w-full">
        <Form.Label htmlFor="status">Observações (opcional)</Form.Label>
        <Form.Textarea
          id="status"
          variant="primary"
          className="w-full"
          aria-invalid={!!errors.observacoes}
          rows={5}
          {...register("observacoes")}
        />
        {errors.observacoes && (
          <Form.FormError>{errors.observacoes.message}</Form.FormError>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <DialogClose asChild>
          <Form.Button variant="danger" className="w-full">
            Cancelar
          </Form.Button>
        </DialogClose>
        <Form.Submit className="w-full" disabled={isSubmitting}>
          Agendar Reunião
        </Form.Submit>
      </div>
    </form>
  );
}
