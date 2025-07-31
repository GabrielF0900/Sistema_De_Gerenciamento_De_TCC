import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getHistoricoTcc from "@/services/historico/getHistoricoTcc";
import type { GetTCCHistoricoParams } from "@/types/response/historico";
import type { HistoricoTCC } from "@/types/historico";
import type { AxiosError } from "axios";
import type { ApiResponse, PaginatedResponse } from "@/types/response/base";

/**
 * Hook para obter o histórico de um TCC específico.
 * @param tccId - ID do TCC para o qual se deseja obter o histórico.
 * @param params - Parâmetros opcionais para filtrar o histórico.
 * @returns Query com o histórico do TCC.
 */
export default function useTccApplyHistory(
  tccId: number,
  params?: GetTCCHistoricoParams
) {
  const [page, setPage] = useState(params?.page || 1);
  const [limit, setLimit] = useState(params?.limit || 10);
  const [acao, setAcao] = useState(params?.acao || undefined);
  const [entidade, setEntidade] = useState(params?.entidade || undefined);
  const [periodo, setPeriodo] = useState(params?.periodo || undefined);

  const queryParams: GetTCCHistoricoParams = {
    page,
    limit,
    acao,
    entidade,
    periodo,
  };

  const setQueryParams = (newParams: Partial<GetTCCHistoricoParams>) => {
    setPage(newParams.page ?? page);
    setLimit(newParams.limit ?? limit);
    setAcao(newParams.acao ?? acao);
    setEntidade(newParams.entidade ?? entidade);
    setPeriodo(newParams.periodo ?? periodo);
  };

  const query = useQuery<
    PaginatedResponse<HistoricoTCC>,
    AxiosError<ApiResponse>
  >({
    queryKey: ["tcc-historico", tccId, page, limit, acao, entidade, periodo],
    queryFn: () => getHistoricoTcc(tccId, queryParams),
    enabled: !!tccId,
    placeholderData: keepPreviousData,
    staleTime: Infinity, // Dados são sempre atualizados
  });

  return {
    ...query,
    page,
    limit,
    acao,
    entidade,
    periodo,
    setQueryParams,
  };
}
