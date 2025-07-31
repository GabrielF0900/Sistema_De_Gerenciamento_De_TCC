import api from "@/lib/api/axios";
import { API_CONFIG } from "@/config/api";
import type { GetTCCResponse, RegisterTCCRequest } from "@/types/response/tcc";

/**
 * Função para registrar um novo TCC
 * @returns Promise com os dados do TCC criado
 */
export async function registerTCC(
  data: RegisterTCCRequest
): Promise<GetTCCResponse> {
  const response = await api.post<GetTCCResponse>(
    API_CONFIG.ENDPOINTS.TCC.CREATE,
    data
  );
  
  return response.data;
}
