import { API_CONFIG } from "@/config/api";
import api from "@/lib/api/axios";
import type { GetReunioesResponse } from "@/types/response/reuniao";

export default async function getTccReunioes(
  tccId: number
): Promise<GetReunioesResponse> {
  const response = await api.get(
    API_CONFIG.ENDPOINTS.REUNIOES.GET_BY_TCC + tccId
  );
  return response.data;
}
