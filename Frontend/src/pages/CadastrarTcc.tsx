import useTitle from "@/hooks/useTitle";
import CreateTCC from "@/features/TCC/create-tcc/CreateTCC";
import ContainerWithLogo from "@/components/common/ContainerWithLogo";

/**
 * Página para cadastrar um novo TCC
 */

export function CadastrarTcc() {
  useTitle("Cadastrar TCC | FocoTCC");

  return (
    <div className="bg-secondary w-full min-h-screen flex justify-center p-4 sm:p-6 lg:p-8">
      <ContainerWithLogo className="w-full max-w-screen-md">
        <CreateTCC />
      </ContainerWithLogo>
    </div>
  );
}
