import { useQuery } from "@tanstack/react-query";
import getAllProfessores from "@/services/professores/get-all";
import type {
  GetAllProfessoresParams,
  GetAllProfessoresResponse,
} from "@/types/response/professor";
import { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";

/**
 * Hook para obter a lista de professores e gerenciar o estado do professor selecionado.
 * @returns {Object} Objeto contendo a lista de professores e o estado do professor selecionado.
 */
export default function useProfessores(initalParams?: GetAllProfessoresParams) {
  const fetch = useQuery<GetAllProfessoresResponse, AxiosError<ApiResponse>>({
    queryKey: ["professores", initalParams],
    queryFn: () => getAllProfessores(initalParams),
    retry: 2, // Tenta novamente até 2 vezes em caso de falha
    staleTime: Infinity, // Dados são considerados frescos indefinidamente
  });

  return {
    professores: fetch.data?.data || [],
    ...fetch, // Retorna todas as propriedades do useQuery
  };
}
