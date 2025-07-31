import type { Atividade, StatusAtividade } from "../atividade";
import type { ApiResponse } from "./base";

export interface CreateTaskRequest {
  nome: string;
  descricao: string;
  dataEntrega: string;
  status: string;
  tccId: number;
}

export interface GetTasksResponse extends ApiResponse {
  atividades: Atividade[];
}

export interface UpdateTaskRequest {
  nome: string;
  descricao: string;
  dataEntrega: string;
  status: StatusAtividade;
}
