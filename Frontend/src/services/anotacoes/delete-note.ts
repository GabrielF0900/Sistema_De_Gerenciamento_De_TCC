import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { ApiResponse } from "@/types/response/base";

export default async function deleteNote(id: number): Promise<ApiResponse> {
  const response = await api.delete(API_CONFIG.ENDPOINTS.ANOTACOES.DELETE + id);
  return response.data;
}
