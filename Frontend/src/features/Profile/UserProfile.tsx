import { ImProfile } from "react-icons/im";
import { IoLockClosedOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { useTCCContext } from "@/hooks/useTCCContext";
import { Card } from "@/components/ui/card";
import UpdatePasswordForm from "./update-password/form/UpdatePasswordForm";
import UpdateNameForm from "./update-name/UpdateNameForm";
import ProfileCard from "./ProfileCard";
import { useUserProfile } from "./hooks/profile.hook";
import type { User } from "@/types/user";

function UserProfile() {
  const { data } = useUserProfile();
  const { tccData } = useTCCContext();

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="w-full flex flex-wrap lg:flex-col gap-6 lg:max-w-96">
        {/* Cartão de perfil do aluno */}
        <ProfileCard
          user={data?.user as User}
          className="flex-1 basis-80 lg:basis-auto"
        >
          <p className="text-sm text-gray-600 mb-2 text-center">
            Curso: {tccData?.curso}
          </p>
          <p className="text-sm text-gray-600 text-center">
            Orientador: {tccData?.orientador || "Não disponível"}
          </p>
        </ProfileCard>
        {/* Estatísticas */}
        <Card className="flex flex-col flex-1 basis-80 lg:basis-auto gap-6 p-6">
          <div className="flex items-center gap-2">
            <IoStatsChart className="size-6" />
            <h1 className="text-2xl font-bold">Estatísticas</h1>
          </div>
          <div className="flex flex-col gap-6 flex-1 justify-center">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600 font-medium">
                Tarefas Concluídas:
              </p>
              <p className="text-sm font-semibold text-black">
                {tccData?.tarefas_completas || 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600 font-medium">
                Marcos Atingidos:
              </p>
              <p className="text-sm font-semibold text-black">
                {tccData?.marcos_completos || 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600 font-medium">
                Progresso Geral:
              </p>
              <p className="text-sm font-bold text-[#244C9E]">
                {tccData?.progresso ? `${tccData.progresso}%` : "0%"}
              </p>
            </div>
          </div>
        </Card>
      </div>
      {/* Coluna da direita: Informações pessoais */}
      <div className="flex-1 bg-neutral p-6 sm:p-8 rounded-lg shadow flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <ImProfile className="size-6" />
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Informações Pessoais
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-56">
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">
                Nome Completo:
              </p>
              <p className="text-sm font-semibold text-black">
                {data?.user.nome_completo ?? "Usuário"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 font-medium mb-1">Email:</p>
              <p className="text-sm font-semibold text-black">
                {data?.user.email ?? "Email não disponível"}
              </p>
            </div>
          </div>
          <UpdateNameForm />
        </div>
        <div className="border border-gray-300"></div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <IoLockClosedOutline className="size-6" />
            <h1 className="text-2xl font-bold">Altere sua Senha</h1>
          </div>
          <UpdatePasswordForm />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
