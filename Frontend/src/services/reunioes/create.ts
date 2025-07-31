import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { ApiResponse } from "@/types/response/base";
import type { CreateReuniaoRequest } from "@/types/response/reuniao";

export default async function createMeeting(
  data: CreateReuniaoRequest
): Promise<ApiResponse> {
  const response = await api.post(API_CONFIG.ENDPOINTS.REUNIOES.CREATE, {
    ...data,
  });
  return response.data;
}
