import CreateTCCForm from "./CreateTCCForm";
import useAreaConhecimento from "@/hooks/useAreaConhecimento";
import useProfessores from "@/features/professor/hooks/useProfessores";
import CreateTCCError from "./CreateTCCError";
import CreateTCCLoading from "./CreateTCCLoading";
import useCreateTCC from "./create-tcc-fetch";
import type { StatusTCC } from "@/types/tcc";

/**
 * Componente principal para criar um novo TCC.
 * Renderiza o formulário de criação de TCC com o logo e título.
 * @returns JSX.Element - Componente de criação de TCC.
 */

export default function CreateTCC() {
  const {
    areasConhecimento,
    isLoading: loadingAreas,
    error: errorAreas,
  } = useAreaConhecimento();

  const {
    professores,
    isLoading: loadingProfessores,
    error: errorProfessores,
  } = useProfessores({
    disponibilidade: true,
  });

  const { registerTCC, isLoading } = useCreateTCC();

  // Verifica se há erros ao carregar áreas de conhecimento ou professores
  if (errorAreas || errorProfessores) return <CreateTCCError />;

  // Verifica se os dados ainda estão sendo carregados
  if (loadingAreas || loadingProfessores) return <CreateTCCLoading />;

  return (
    <>
      <div className="py-1">
        <h1 className="text-3xl text-center font-bold mb-2">Cadastrar TCC</h1>
        <p className="text-center text-gray-600 font-semibold">
          Registre seu trabalho de conclusão de curso!
        </p>
      </div>
      <CreateTCCForm
        areasConhecimento={areasConhecimento || []}
        professores={professores || []}
        onSubmit={(data) =>
          registerTCC({
            ...data,
            orientadorNome: data.orientador,
            coorientadorNome: data.coorientador,
            statusAtual: data.status as StatusTCC,
          })
        }
        isLoading={isLoading}
      />
    </>
  );
}
