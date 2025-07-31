import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import queryClient from "@/lib/api/react-query";

/**
 * Componente de erro para criação de TCC.
 * Exibe uma mensagem de erro e um link para voltar à página de criação de TCC e
 * um botão para tentar novamente.
 * @returns JSX.Element - Componente de erro de criação de TCC.
 */

export default function CreateTCCError() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const refetchData = () => {
    queryClient.refetchQueries({ queryKey: ["areas-conhecimento"] });
    queryClient.refetchQueries({
      queryKey: ["professores", { disponibilidade: true }],
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 flex-1">
      <div className="py-1">
        <h1 className="text-3xl text-center font-semibold mb-4">
          Erro ao Carregar Formulário
        </h1>
        <p className="text-center text-red-600">
          Ocorreu um erro ao tentar carregar o formulário. Por favor, tente
          novamente.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="primary" onClick={handleBack}>
          Voltar
        </Button>
        <Button variant="secondary" onClick={refetchData}>
          Tentar Novamente
        </Button>
      </div>
    </div>
  );
}
