import z from "zod";

export const editTaskFormSchema = z.object({
  titulo: z.string().min(1, "O título é obrigatório"),
  descricao: z.string().min(1, "A descrição é obrigatória"),
  data_conclusao: z
    .string()
    .nonempty("A data de conclusão é obrigatória")
    .refine((date) => new Date(date) >= new Date(), {
      message: "A data de entrega não pode ser anterior à data atual",
    }),
  status: z.enum(["PENDENTE", "CONCLUIDA"], {
    message: "Selecione um status válido",
  }),
});

export type EditTaskFormData = z.infer<typeof editTaskFormSchema>;
