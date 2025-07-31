import { AxiosError } from "axios";
import getAllAreaConhecimento from "@/services/area-conhecimento/get-all";
import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "@/types/response/base";
import type { GetAllAreaConhecimentoResponse } from "@/types/response/area-conhecimento";

/**
 * Hook para gerenciar áreas de conhecimento.
 * Este hook busca as áreas de conhecimento disponíveis e as retorna.
 */
export default function useAreaConhecimento() {
  const fetch = useQuery<
    GetAllAreaConhecimentoResponse,
    AxiosError<ApiResponse>
  >({
    queryKey: ["areas-conhecimento"],
    queryFn: () => getAllAreaConhecimento(),
    retry: 2, // Tenta novamente até 2 vezes em caso de falha
    staleTime: Infinity, // Dados são considerados frescos indefinidamente
  });

  return {
    areasConhecimento: fetch.data?.areasConhecimento || [],
    ...fetch, // Retorna todas as propriedades do useQuery
  };
}
