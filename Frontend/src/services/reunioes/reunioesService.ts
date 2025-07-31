import api from "@/lib/api/axios";
import type { StatusReuniao, ReuniaoWithTCC, CreateReuniaoRequest, UpdateReuniaoRequest } from "../../types/reuniao";

export interface GetReunioesResponse {
success: boolean;
message?: string;
reunioes?: ReuniaoWithTCC[];
data?: {
  reunioes: ReuniaoWithTCC[];
  pagination?: {
    current_page?: number;
    per_page?: number;
    total_items?: number;
    total_pages?: number;
    has_next_page?: boolean;
    has_prev_page?: boolean;
  };
};
}

export interface CreateReuniaoResponse {
  success: boolean;
  message: string;
  reuniao: ReuniaoWithTCC;
}

export interface UpdateReuniaoResponse {
  success: boolean;
  message: string;
  reuniao: ReuniaoWithTCC;
}

export interface DeleteReuniaoResponse {
  success: boolean;
  message: string;
}

/**
 * Criar uma nova reunião
 */
export const createReuniao = async (data: CreateReuniaoRequest): Promise<CreateReuniaoResponse> => {
  const response = await api.post<CreateReuniaoResponse>("/reunioes", data);
  return response.data;
};

/**
 * Listar reuniões com filtros opcionais
 */
export const getReunioes = async (params?: {
  tcc_id?: number;
  status?: StatusReuniao;
  page?: number;
  limit?: number;
}): Promise<GetReunioesResponse> => {
  const response = await api.get<GetReunioesResponse>("/reunioes", { params });
  return response.data;
};

/**
 * Buscar reunião por ID
 */
export const getReuniaoById = async (id: number): Promise<{ success: boolean; reuniao: ReuniaoWithTCC }> => {
  const response = await api.get<{ success: boolean; reuniao: ReuniaoWithTCC }>(`/reunioes/${id}`);
  return response.data;
};

/**
 * Atualizar reunião
 */
export const updateReuniao = async (id: number, data: UpdateReuniaoRequest): Promise<UpdateReuniaoResponse> => {
  const response = await api.put<UpdateReuniaoResponse>(`/reunioes/${id}`, data);
  return response.data;
};

/**
 * Deletar/cancelar reunião
 */
export const deleteReuniao = async (id: number, forceDelete = false): Promise<DeleteReuniaoResponse> => {
  const response = await api.delete<DeleteReuniaoResponse>(`/reunioes/${id}?forceDelete=${forceDelete}`);
  return response.data;
};
