import { registerTCC } from "@/services/tcc/register";
import type { ApiResponse } from "@/types/response/base";
import type { GetTCCResponse, RegisterTCCRequest } from "@/types/response/tcc";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useCreateTCC() {
  const navigate = useNavigate();

  const mutation = useMutation<
    GetTCCResponse,
    AxiosError<ApiResponse>,
    RegisterTCCRequest
  >({
    mutationFn: registerTCC,
    onSuccess: () => {
      toast.success(
        "TCC criado com sucesso, redirecionado para á página do TCC",
        {
          autoClose: 5000,
          onClose: () => {
            navigate("/dashboard");
          },
          hideProgressBar: false,
        }
      );
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Erro ao criar TCC", {
        autoClose: 3000,
        hideProgressBar: false,
      });
    },
  });

  return {
    registerTCC: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
}
