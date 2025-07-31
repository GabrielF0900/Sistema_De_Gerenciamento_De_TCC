// Componentes de UI - Elementos de interface para dropdown, botões e barra de progresso
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Button from "../ui/Button";
import ProgressBar from "./ProgressBar";

// Ícones - Elementos visuais e tipagens para ícones dinâmicos
import { LuPencilLine } from "react-icons/lu";
import type { IconType } from "react-icons";

// Utilitários - Funções auxiliares para cores, ícones e conversão de datas
import { StatusIcon } from "../card/StatusIcon";
import { getStatusColor, StatusColor } from "@/utils/StatusColor";
import { parsePrazo } from "./ParsePrazo";

// Hooks do React - Gerenciamento de estado e efeitos colaterais
import { useEffect, useState } from "react";

// Interface de propriedades - Define os dados que o componente recebe do pai
interface TarefaCardProps {
  id: number;
  title: string;
  description: string;
  prazo: string;
  stats: string;
  mostrar?: boolean;
  mostrarEditar?: boolean;
}

// Componente principal - Renderiza um card de tarefa com controles interativos
const MarksCard = ({ id, title, description, prazo, stats, mostrar, mostrarEditar }: TarefaCardProps) => {
  
  // Gerenciamento de estado - Controla status, atraso e data de conclusão da tarefa
  const [statusAtual, setStatusAtual] = useState(stats.toLowerCase());
  const [statusAnterior, setStatusAnterior] = useState(stats.toLowerCase());
  const [estaAtrasado, setEstaAtrasado] = useState(false);
  const [dataConcluida, setDataConcluida] = useState<string | null>(null);

  // Lógica de progresso - Define qual status usar para calcular a porcentagem
  const progressoStatus = statusAtual === "atrasado" ? statusAnterior : statusAtual;

  // Efeito de verificação automática - Monitora se a tarefa passou do prazo e atualiza status
  useEffect(() => {
    const hoje = new Date();
    const dataPrazo = parsePrazo(prazo);
    const isAtrasado = dataPrazo < hoje;
  
    if (isAtrasado) {
      setEstaAtrasado(true);   
      setStatusAtual("atrasado");
    } else {
      setEstaAtrasado(false);  
      if (isAtrasado && statusAtual === "atrasado") {
        setStatusAtual(statusAnterior);
      }
    }
  }, [prazo, statusAtual, statusAnterior]);

  // Manipulador de mudança de status - Atualiza o status quando usuário seleciona nova opção
  const handleStatusChange = (newStats: string) => {
    setStatusAtual(newStats);
    setStatusAnterior(newStats);

    if (newStats === "concluído") {
      const hoje = new Date();
      const dataFormatada = hoje.toLocaleDateString("pt-BR");
      setDataConcluida(dataFormatada);
    } else {
      setDataConcluida(null);
    }
  };

  // Configurações visuais - Define cores e ícones baseados no status atual da tarefa
  const { cor, colorBackground } = getStatusColor(statusAtual);
  const Icon = StatusIcon[statusAtual];

  // Calculadora de porcentagem - Converte status em valor numérico para barra de progresso
  const getPercentByStatus = (status: string): number => {
    switch (status) {
      case "pendente":
        return 0;
      case "desenvolvimento":
        return 50;
      case "concluído":
        return 100;
      default:
        return 0;
    }
  };

  return (
    // Container principal - Estrutura base do card com bordas, sombra e espaçamento
    <div className="border border-gray-300 w-full min-h-40 rounded-md p-4 sm:p-7 mt-5 shadow-lg">
      
      {/* Seção do cabeçalho - Área superior com ID, título e controles de status */}
      <div className="border-b">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          
          {/* ID da tarefa - Identificador numérico visual da tarefa */}
          <h1 className="text-gray-600 text-lg sm:text-xl">#{id}</h1>

          {/* Título da tarefa - Nome principal em destaque */}
          <p className="text-lg sm:text-xl font-semibold text-gray-800 flex-1">{title}</p>

          {/* Controle de status - Dropdown interativo ou indicador fixo para tarefas atrasadas */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-2 sm:mt-0">
            {estaAtrasado ? (
              // Status fixo - Exibido quando a tarefa está atrasada, não permite alteração
              <div
                className="flex items-center font-bold gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-md shadow-md focus:outline-none text-xs sm:text-sm"
                style={{ color: cor, backgroundColor: colorBackground }}
              >
                {Icon && <Icon size={16} className="sm:hidden" />}
                {Icon && <Icon size={18} className="hidden sm:block" />}
                <span className="whitespace-nowrap">{statusAtual.charAt(0).toUpperCase() + statusAtual.slice(1)}</span>
              </div>
            ) : (
              // Dropdown interativo - Permite ao usuário alterar o status da tarefa
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-md shadow-md focus:outline-none text-xs sm:text-sm font-bold"
                    style={{ color: cor, backgroundColor: colorBackground }}
                  >
                    {Icon && <Icon size={16} className="sm:hidden" />}
                    {Icon && <Icon size={18} className="hidden sm:block" />}
                    <span className="whitespace-nowrap">{statusAtual.charAt(0).toUpperCase() + statusAtual.slice(1)}</span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  side="bottom"
                  align="center"
                  className="bg-white z-50"
                  sideOffset={8}
                >
                  {Object.entries(StatusColor)
                    .filter(([Key]) => Key !== "atrasado")
                    .map(([key]) => {
                      const ItemIcon: IconType | undefined = StatusIcon[key];

                      return (
                        <DropdownMenuItem
                          key={key}
                          onClick={() => handleStatusChange(key)}
                          className="flex items-center gap-2 cursor-pointer font-medium hover:bg-gray-200"
                        >
                          {ItemIcon && <ItemIcon size={18} />}
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </DropdownMenuItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Botão de edição - Aparece condicionalmente para permitir edição da tarefa */}
            {mostrarEditar && (
              <Button className="border-none ml-auto" variant="edit">
                <LuPencilLine size={18} className="sm:hidden" />
                <LuPencilLine size={20} className="hidden sm:block" />
              </Button>
            )}
          </div>

        </div>

        {/* Detalhes da tarefa - Área inferior com descrição e informações de prazo */}
        <div className="flex flex-col gap-2 mt-2">
          {/* Descrição - Texto explicativo sobre o que a tarefa envolve */}
          <p>{description}</p>
          
          {/* Informações de prazo e conclusão - Mostra data limite e data de finalização */}
          <div className="flex flex-row items-center gap-2 mb-4">
            <p className="text-sm font-medium text-gray-500 mb-1">Prazo: {prazo}</p>
            {statusAnterior === "concluído" && dataConcluida !== null && (
              <p className="text-sm font-medium text-gray-500 mb-1">Concluída: {dataConcluida}</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Barra de progresso - Visualização gráfica do andamento da tarefa */}
      {mostrar && (
        <>
          <span className="flex mb-3 justify-end pr-3">{getPercentByStatus(progressoStatus)}%</span>
          <ProgressBar percent={getPercentByStatus(progressoStatus)} />
        </>
      )}
    </div>
  );
};

export default MarksCard;