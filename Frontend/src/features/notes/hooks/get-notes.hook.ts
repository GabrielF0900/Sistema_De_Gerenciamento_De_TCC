import { useQuery } from "@tanstack/react-query";
import type { AnotacoesResponse } from "@/types/response/anotacao";
import type { AxiosError } from "axios";
import type { ApiResponse } from "@/types/response/base";
import getTccNotes from "@/services/anotacoes/get-tcc-notes";

export default function useNotes(tccId: number) {
  return useQuery<AnotacoesResponse, AxiosError<ApiResponse>>({
    queryKey: ["tcc-notes", tccId],
    queryFn: () => getTccNotes(tccId),
    enabled: !!tccId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
