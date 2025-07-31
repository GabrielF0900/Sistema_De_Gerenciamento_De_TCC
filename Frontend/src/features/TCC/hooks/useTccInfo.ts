import { useQuery } from "@tanstack/react-query";
import getTccProgress from "@/services/progresso/getTccProgress";
import getTCCById from "@/services/tcc/getById";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";
import type { GetTCCResponse } from "@/types/response/tcc";
import type { TccProgressResponse } from "@/types/response/progresso";

/**
 * Hook para buscar os dados do TCC do e do seu progresso.
 * Utiliza o contexto do TCC para acessar os dados do usuário.
 * @returns {Object} Objeto contendo os dados do TCC, progresso e estados de carregamento e erro.
 */
export default function useTccInfo(tccId: number) {
  const {
    data: tccData,
    isLoading: isTccLoading,
    isError: isTccError,
    error: tccError,
  } = useQuery<GetTCCResponse, AxiosError<ApiResponse>>({
    queryKey: ["tcc", tccId],
    queryFn: () => getTCCById(tccId),
    enabled: !!tccId, // Habilita a query apenas se o tccId estiver definido
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
    retry: 1,
  });

  // Busca o progresso do TCC
  const {
    data: progressoData,
    isLoading: isProgressoLoading,
    isError: isProgressoError,
    error: progressoError,
  } = useQuery<TccProgressResponse, AxiosError<ApiResponse>>({
    queryKey: ["tcc-progress", tccId],
    queryFn: () => getTccProgress(tccId),
    enabled: !!tccId,
    staleTime: 1000 * 60 * 5, // cache por 5 minutos
    retry: 1,
  });

  return {
    data: {
      tcc: tccData?.tcc,
      progresso: progressoData?.progresso,
    },
    loading: isTccLoading || isProgressoLoading,
    error: isTccError || isProgressoError,
    tccError: tccError
      ? progressoError
      : progressoError
      ? progressoError.message
      : null,
  };
}
