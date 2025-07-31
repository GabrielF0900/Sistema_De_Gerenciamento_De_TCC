import {
  $Enums,
  Anotacao,
  Atividade,
  Defesa,
  EtapaTCC,
  Reuniao,
} from "@prisma/client";
import {
  PESO_ETAPAS,
  PESO_REUNIOES,
  PESO_TAREFAS,
} from "../constants/progressoConstants";
import { CalculateProgress, TCCProgress } from "../types/progress";

/**
 * Função principal para calcular o progresso completo do TCC
 */
export function calculateCompleteProgress(tcc: TCCProgress): CalculateProgress {
  // Cálculo do progresso de cada componente
  const progresso_tarefas = calculateTasksProgress(tcc);
  const progresso_etapas = calculateStagesProgress(tcc);
  const progresso_reunioes = calculateMeetingsProgress(tcc);
  const progresso_defesas = calculateDefensesProgress(tcc);

  // Cálculo do progresso total
  const progresso_total =
    progresso_tarefas +
    progresso_etapas +
    progresso_reunioes +
    progresso_defesas;

  return {
    progresso_tarefas,
    progresso_etapas,
    progresso_reunioes,
    progresso_defesas,
    progresso_total,
  };
}

// Funções auxiliares para calcular o progresso de cada componente individualmente

/**
 * Calcula o progresso das tarefas do TCC
 */

export function calculateTasksProgress(tcc: TCCProgress): number {
  const totalTarefas = tcc.Atividades?.length || 0;
  const tarefasConcluidas =
    tcc.Atividades?.filter((atividade) => atividade.status === "CONCLUIDA")
      .length || 0;
  return totalTarefas > 0
    ? (tarefasConcluidas / totalTarefas) * PESO_TAREFAS
    : 0;
}

/**
 * Calcula o progresso das etapas do TCC
 */

export function calculateStagesProgress(tcc: TCCProgress): number {
  const totalEtapas = tcc.EtapasTCC?.length || 0;
  const etapasConcluidas =
    tcc.EtapasTCC?.filter((etapa) => etapa.status === "CONCLUIDA").length || 0;
  return totalEtapas > 0 ? (etapasConcluidas / totalEtapas) * PESO_ETAPAS : 0;
}

/**
 * Calcula o progresso das reuniões do TCC
 */

export function calculateMeetingsProgress(tcc: TCCProgress): number {
  const reunioesAgendadas = tcc.Reunioes?.length || 0;
  const reunioesCumpridas =
    tcc.Reunioes?.filter((reuniao) => reuniao.status === "REALIZADA").length ||
    0;
  return reunioesAgendadas > 0
    ? (reunioesCumpridas / reunioesAgendadas) * PESO_REUNIOES
    : 0;
}

/**
 * Calcula o progresso das defesas do TCC
 */

export function calculateDefensesProgress(tcc: TCCProgress): number {
  let progresso_defesas = 0;
  const preBanca = tcc.Defesas?.find((defesa) => defesa.tipo === "PRE_BANCA");
  const bancaFinal = tcc.Defesas?.find(
    (defesa) => defesa.tipo === "BANCA_FINAL"
  );

  if (preBanca?.status === "REALIZADA") {
    progresso_defesas += 10; // 10% para pré-banca
  }
  if (bancaFinal?.status === "REALIZADA") {
    progresso_defesas += 10; // 10% para banca final
  }

  return progresso_defesas;
}

// Funções auxiliares para calcular a porcentagem de progresso de cada componente

/**
 * Calcula a porcentagem de progresso de um componente com base no progresso e no peso
 * @param progresso - Progresso do componente
 * @param peso - Peso do componente
 * @returns Porcentagem de progresso do componente
 */
export function calculateProgressPercentage(progresso: number): number {
  return Math.round((progresso / 100) * 100);
}

/**
 * Calcula o status geral do progresso com base no progresso total
 * @param progresso_total - Progresso total do TCC
 * @returns Status geral do progresso
 */

export function calculateProgressStatus(progresso_total: number): string {
  if (progresso_total === 100) {
    return "Concluído";
  }

  if (progresso_total > 0) {
    return "Em Andamento";
  }

  return "Não Iniciado";
}

/**
 * calcula o número de tarefas concluídas
 * @param tasks - Lista de tarefas do TCC
 * @returns Número de tarefas concluídas
 */

export function calculateCompletedTasks(tasks: Atividade[]): number {
  return tasks.filter((item) => item.status === "CONCLUIDA").length;
}

/**
 * calcula o número de etapas concluídas
 * @param stages - Lista de etapas do TCC
 * @returns Número de etapas concluídas
 */

export function calculateCompletedStages(stages: EtapaTCC[]): number {
  return stages.filter((item) => item.status === "CONCLUIDA").length;
}

/**
 * calcula as anotações feitas na semana atual
 * @param notes - Lista de anotações do TCC
 * @returns Número de anotações feitas na semana atual
 */
export function calculateNotesThisWeek(notes: Anotacao[]): number {
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  return notes.filter((note) => new Date(note.criado_em) >= startOfWeek).length;
}

/**
 * calcula o número de reuniões realizadas
 * @param notes - Lista de anotações do TCC
 * @returns Número de anotações
 */

export function calculateCompletedMeetings(meetings: Reuniao[]): number {
  return meetings.filter((item) => item.status === "REALIZADA").length;
}

/**
 * calcula o número de reuniões agendadas
 * @param meetings - Lista de reuniões do TCC
 * @returns Número de reuniões agendadas
 */
export function calculateScheduledMeetings(meetings: Reuniao[]): number {
  return meetings.filter((item) => item.status === "AGENDADA").length;
}

/**
 * calcula se uma defesa foi realizada
 * @param thesisDefense - Lista de defesas do TCC
 * @param status - Status da defesa a ser verificado
 * @returns boolean indicando se a defesa foi realizada.
 */

export function calculateDefenseStatus(
  thesisDefense: Defesa[],
  type: $Enums.TipoDefesa
): boolean {
  return !!thesisDefense.find(
    (defense) => defense.tipo === type && defense.status === "REALIZADA"
  );
}
