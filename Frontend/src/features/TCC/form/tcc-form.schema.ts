import z from "zod";
import { statusTCC } from "@/types/tcc";

/**
 * Schema de validação para o formulário de criação de TCC.
 * Utiliza a biblioteca Zod para definir as regras de validação.
 */
export const TCCFormSchema = z
  .object({
    titulo: z.string().min(1, "Título é obrigatório"),
    tema: z.string().min(1, "Tema é obrigatório"),
    areaConhecimento: z.string().min(1, "Área do conhecimento é obrigatória"),
    orientador: z.string().min(1, "Orientador é obrigatório"),
    coorientador: z.string().optional(),
    resumo: z.string().min(1, "Resumo é obrigatório"),
    dataInicio: z.string({
      message: "Data de início é obrigatória",
    }),
    dataConclusao: z.string({
      message: "Data de conclusão é obrigatória",
    }),
    status: z
      .enum(Object.keys(statusTCC) as [string, ...string[]], {
        message: "Status é obrigatório",
      })
      .refine((val) => {
        return Object.keys(statusTCC).includes(val);
      }),
  })
  .refine(
    (data) => {
      const dateInicio = new Date(data.dataInicio);
      const dateConclusao = new Date(data.dataConclusao);
      return dateInicio < dateConclusao;
    },
    {
      message: "A data de início deve ser anterior à data de término",
      path: ["dataInicio"],
    }
  );

export type TCCFormData = z.infer<typeof TCCFormSchema>;
export default TCCFormSchema;
