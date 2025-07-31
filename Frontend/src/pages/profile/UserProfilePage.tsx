import React, { Suspense } from "react";
import useTitle from "@/hooks/useTitle";
import UserProfileLoading from "@/features/Profile/UserProfileLoading";

const UserProfile = React.lazy(() => import("@/features/Profile/UserProfile"));

/**
 * Página de perfil do usuário.
 * Exibe informações do usuário, estatísticas e formulários de atualização.
 * Utiliza carregamento sob demanda para otimizar a performance.
 * @returns Componente de página de perfil do usuário
 */

export default function UserProfilePage() {
  useTitle("Perfil de Usuário | FocoTCC");

  return (
    <Suspense fallback={<UserProfileLoading />}>
      <UserProfile />
    </Suspense>
  );
}