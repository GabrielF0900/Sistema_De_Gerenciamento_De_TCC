import z from "zod";

const createMeetingFormSchema = z.object({
  titulo: z.string().min(1, "O título é obrigatório"),
  descricao: z.string().min(1, "A descrição é obrigatória"),
  data_agendada: z
    .string()
    .nonempty("A data de conclusão é obrigatória")
    .refine((date) => new Date(date) >= new Date(), {
      message: "A data de entrega não pode ser anterior à data atual",
    }),
  observacoes: z.string().optional(),
});

export type CreateMeetingFormData = z.infer<typeof createMeetingFormSchema>;
export default createMeetingFormSchema;
