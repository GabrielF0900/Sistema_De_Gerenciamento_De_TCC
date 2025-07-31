// Hooks e bibliotecas
import { calculatePercentage } from "@/utils/calculate";
import useTCCInfo from "../TCC/hooks/useTccInfo";
import useModal from "@/context/modal/useModal";
import { useNavigate } from "react-router-dom";

// Ícones
import { IoMdPeople } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { FaPlus, FaTasks } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BookOpen, TargetIcon } from "lucide-react";
import { CgNotes } from "react-icons/cg";

// Componentes
import { Card, CardHeader } from "@/components/ui/card";
import Button from "@/components/ui/Button";
import TCCInfo from "../TCC/info/TCCInfo";
import TCCProgress from "../TCC/progress/TCCProgress";
import TCCTimeline from "../TCC/timeline/TCCTimeline";
import CreateTask from "../tasks/create-task/CreateTask";
import CreateMeeting from "../meetings/CreateMeeting";

// Contexto do TCC
import { useTCCContext } from "@/hooks/useTCCContext";

function MainDashboard() {
  // Navegação
  const navigate = useNavigate();

  const { tccData, setEditable } = useTCCContext();

  const { setContent } = useModal();

  const { data } = useTCCInfo(tccData?.id as number);

  const handleEditTCC = () => {
    setEditable(true);
    navigate("/meu-tcc");
  };

  /* // Se não há dados do TCC, mostra estado vazio
  if (!data.tcc) {
    return (
      <div className="flex justify-center items-center h-screen bg-secondary">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Nenhum TCC Encontrado</h2>
          <p className="text-gray-600">Cadastre um TCC para ver o dashboard.</p>
        </div>
      </div>
    );
  } */

  // Renderiza o dashboard
  return (
    <div className="flex flex-col gap-8 min-h-screen w-full max-w-8xl">
      {/* Infomaçoẽs de TCC */}
      <TCCInfo
        info={{
          title: data.tcc?.titulo as string,
          course: data.tcc?.aluno.curso as string,
          advisor:
            typeof data.tcc?.orientador === "string"
              ? data.tcc?.orientador
              : data.tcc?.orientador?.nome || "Nenhum orientador atribuído",
          coAdvisor:
            typeof data.tcc?.coorientador === "string"
              ? data.tcc?.coorientador
              : data.tcc?.coorientador?.nome || "Nenhum coorientador atribuído",
          knowledgeArea: data.tcc?.areaConhecimento as string,
          totalProgress: data.progresso?.total as number,
          startDate: data.tcc?.dataInicio
            ? new Date(data.tcc.dataInicio).toLocaleDateString("pt-BR")
            : undefined,
          endDate: data.tcc?.dataConclusao
            ? new Date(data.tcc.dataConclusao).toLocaleDateString("pt-BR")
            : undefined,
        }}
      />
      {/* Cartões de resumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-4">
        {/* Tarefas */}
        <Card className="flex items-center justify-between shadow-lg p-6 min-h-32">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold">Marcos</h3>
            <span className="flex gap-1 items-center text-3xl font-semibold">
              {data.tcc?.etapas.concluidas ?? 0}/{data.tcc?.etapas.total ?? 0}
            </span>
            <span className="text-green-500 font-medium">
              {`${calculatePercentage(
                data.tcc?.etapas.concluidas as number,
                data.tcc?.etapas.total as number
              )}% Concluídas`}
            </span>
          </div>
          <div className="bg-green-100 size-16 rounded-full p-2 flex items-center justify-center">
            <TargetIcon className="size-10 text-green-400" />
          </div>
        </Card>
        <Card className="flex items-center justify-between shadow-lg p-6 min-h-32">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold">Tarefas</h3>
            <span className="flex gap-1 items-center text-3xl font-semibold">
              {data.tcc?.tarefas.concluidas ?? 0}/{data.tcc?.tarefas.total ?? 0}
            </span>
            <span className="text-blue-500 font-medium">
              {`${calculatePercentage(
                data.tcc?.tarefas.concluidas as number,
                data.tcc?.tarefas.total as number
              )}% Concluídas`}
            </span>
          </div>
          <div className="bg-blue-100 size-16 rounded-full p-2 flex items-center justify-center">
            <FaTasks className="size-8 text-blue-400" />
          </div>
        </Card>
        {/* Reuniões */}
        <Card className="flex items-center justify-between shadow-lg p-6 min-h-32">
          <div>
            <h3 className="text-md font-semibold">Reuniões</h3>
            <span className="flex gap-1 items-center text-3xl font-semibold">
              {data.tcc?.reunioes.total ?? 0}
            </span>
            <span className=" text-violet-600 font-medium">
              {data.tcc?.reunioes.agendadas ?? 0} Agendadas
            </span>
          </div>
          <div className="size-16 bg-violet-200 rounded-full flex items-center justify-center">
            <IoMdPeople className="size-10 text-violet-500" />
          </div>
        </Card>
        {/* Anotações */}
        <Card className="flex items-center justify-between shadow-lg p-6 min-h-32">
          <div>
            <h3 className="text-md font-semibold">Anotações</h3>
            <span className="flex gap-1 items-center text-3xl font-semibold">
              {data.tcc?.anotacoes.total ?? 0}
            </span>
            <span className=" text-orange-500 font-medium">
              {data.tcc?.anotacoes.esta_semana ?? 0} esta semana
            </span>
          </div>
          <div className="size-16 bg-orange-200 rounded-full flex items-center justify-center">
            <CgNotes className="size-10 text-orange-500" />
          </div>
        </Card>
      </div>
      {/* Progresso, Cronograma do TCC e ações rápidas */}
      <div className="w-full flex flex-col md:flex-row md:items-start gap-4">
        {/* Progressp do TCC */}
        <TCCProgress progress={data.progresso} />
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          {/* Cronograma */}
          <TCCTimeline
            startDate={data.tcc?.dataInicio as Date}
            endDate={data.tcc?.dataConclusao as Date}
            status={(data.tcc?.statusAtual as unknown as string) || "PENDENTE"}
          />
          {/* Ações rápidas */}
          <Card className="w-full p-6 flex flex-col gap-6">
            <CardHeader className="p-0 gap-2">
              <BookOpen className="size-6" />
              <h2 className="text-xl font-semibold">Ações Rápidas</h2>
            </CardHeader>
            <div className="flex flex-col gap-6">
              <Button
                variant="quicks"
                className="flex items-center gap-2"
                onClick={handleEditTCC}
              >
                <CiEdit className="size-6" />
                Editar TCC
              </Button>
              <Button
                variant="quicks"
                className="flex items-center gap-2"
                onClick={() =>
                  setContent({
                    title: "Nova Tarefa",
                    description: "Preencha os detalhes da nova tarefa.",
                    children: <CreateTask />,
                  })
                }
              >
                <FaPlus className="size-6" />
                Nova tarefa
              </Button>
              <Button
                variant="quicks"
                className="flex items-center gap-2"
                onClick={() =>
                  setContent({
                    title: "Nova Reunião",
                    description: "Preencha os campos para agendar uma reunião",
                    children: <CreateMeeting />,
                  })
                }
              >
                <RiCalendarScheduleLine className="size-6" />
                Agendar Reunião
              </Button>
              <Button variant="quicks" className="flex items-center gap-2">
                <HiOutlineNewspaper className="size-6" />
                Gerar Relatório
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
