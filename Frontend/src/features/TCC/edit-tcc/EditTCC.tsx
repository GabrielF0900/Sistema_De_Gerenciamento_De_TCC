import { Card } from "@/components/ui/card";
import EditTCCForm from "./EditTCCForm";
import { useTCCContext } from "@/hooks/useTCCContext";
import useAreaConhecimento from "@/hooks/useAreaConhecimento";
import useProfessores from "@/features/professor/hooks/useProfessores";
import { useEditTCC } from "./edit-tcc";
import type { StatusTCC } from "@/types/tcc";

/**
 * Componente para editar informações do TCC
 * @returns Componente de edição do TCC
 */

export default function EditTCC() {
  const { editable, tccData } = useTCCContext();

  const { areasConhecimento } = useAreaConhecimento();
  const { professores } = useProfessores();

  const { mutate } = useEditTCC();

  return (
    <>
      <Card className="p-6 shadow-md">
        <EditTCCForm
          professores={professores || []}
          areasConhecimento={areasConhecimento || []}
          disabled={!editable}
          initialData={{
            titulo: tccData.titulo,
            resumo: tccData.resumo,
            tema: tccData.tema,
            orientador: tccData.orientador,
            coorientador: tccData.coorientador,
            dataConclusao: tccData.prazo_entrega,
            dataInicio: tccData.data_inicio ?? "",
            areaConhecimento: tccData.area_conhecimento ?? "",
            status: tccData.status,
          }}
          onSubmit={(data) => {
            mutate({
              ...data,
              id: tccData.id,
              orientadorNome: data.orientador,
              coorientadorNome: data.coorientador,
              areaConhecimento: data.areaConhecimento,
              statusAtual: data.status as StatusTCC,
            });
          }}
        />
      </Card>
    </>
  );
}
