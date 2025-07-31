import { LoaderCircle } from "lucide-react";

/**
 * Componente de carregamento para a criação de TCC.
 * Exibe um ícone de carregamento enquanto os dados estão sendo buscados.
 */

export default function CreateTCCLoading() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <LoaderCircle className="animate-spin text-primary" size={96} />
    </div>
  );
}
