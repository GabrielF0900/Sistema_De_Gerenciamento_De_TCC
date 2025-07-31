import {
  Anotacao,
  Atividade,
  Defesa,
  EtapaTCC,
  Reuniao,
  TCC,
} from "@prisma/client";

/**
 * interface para o cálculo do progresso do desenvolvimento do TCC.
 * Inclui o progresso de tarefas, etapas, anotações, reuniões e defesas.
 * Cada componente tem um peso específico que contribui para o progresso total.
 */

export interface CalculateProgress {
  progresso_tarefas: number; // Progresso das tarefas (30%)
  progresso_etapas: number; // Progresso das etapas (30%)
  progresso_reunioes: number; // Progresso das reuniões (10%)
  progresso_defesas: number; // Progresso das defesas (20% = 10% pré-banca + 10% banca final)
  progresso_total: number; // Progresso total (soma dos componentes)
}

/**
 * Interface para o progresso calculado de um TCC.
 */
export interface TCCProgress extends TCC {
  Atividades?: Atividade[];
  EtapasTCC?: EtapaTCC[];
  Reunioes?: Reuniao[];
  Defesas?: Defesa[];
  progresso_total?: number;
}
