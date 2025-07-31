import getTccReunioes from "@/services/reunioes/get-tcc-reunioes";
import { useQuery } from "@tanstack/react-query";

export default function useMeetings(tccId: number) {
  return useQuery({
    queryKey: ["tcc-meetings", tccId],
    queryFn: () => getTccReunioes(tccId),
    enabled: !!tccId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
