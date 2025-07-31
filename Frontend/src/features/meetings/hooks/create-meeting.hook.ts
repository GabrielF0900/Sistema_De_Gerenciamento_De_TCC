import queryClient from "@/lib/api/react-query";
import createMeeting from "@/services/reunioes/create";
import type { ApiResponse } from "@/types/response/base";
import type { CreateReuniaoRequest } from "@/types/response/reuniao";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function useCreateMeeting() {
  return useMutation<
    ApiResponse,
    AxiosError<ApiResponse>,
    CreateReuniaoRequest
  >({
    mutationFn: createMeeting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tcc-meetings"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Erro ao agendar reunião");
    },
  });
}
