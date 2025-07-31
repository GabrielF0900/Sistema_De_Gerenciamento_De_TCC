import { $Enums, Reuniao } from "@prisma/client";

/**
 * Interfaces para criar uma reunião.
 */
export interface ICreateReuniao {
  titulo: string; // Título da reunião
  descricao: string; // Descrição da reunião
  data_agendada: Date; // Data agendada para a reunião
  observacoes?: string; // Observações adicionais sobre a reunião
  TCC_id: number; // ID do TCC relacionado à reunião
}

export interface IUpdateReuniao {
  id: number; // ID da reunião a ser atualizada
  titulo?: string; // Novo título da reunião (opcional)
  descricao?: string; // Nova descrição da reunião (opcional)
  data_agendada?: Date; // Nova data agendada para a reunião (opcional)
  observacoes?: string; // Novas observações sobre a reunião (opcional)
  status?: $Enums.StatusReuniao; // Novo status da reunião (opcional)
}

export interface IGetReuniao extends Omit<Reuniao, "TCC_id"> {
  tcc: {
    id: number; // ID do TCC relacionado à reunião
    titulo: string; // Título do TCC
    aluno: string; // Nome do aluno do TCC
    orientador: string | null; // Nome do orientador do TCC (pode ser nulo)
    coorientador: string | null; // Nome do coorientador do TCC (pode ser nulo)
  };
  criado_em: Date; // Data de criação da reunião
}

export interface IReuniao extends Reuniao {
  Usuario_id: number; // ID do usuário que criou a reunião
}
