import type { ReuniaoWithTCC } from "../reuniao";
import type { ApiResponse } from "./base";

export interface GetReunioesResponse extends ApiResponse {
  reunioes: ReuniaoWithTCC[];
}

export interface CreateReuniaoRequest {
  titulo: string;
  descricao?: string;
  data_agendada: string;
  observacoes?: string;
  tccId: number;
}
