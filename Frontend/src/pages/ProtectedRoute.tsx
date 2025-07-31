import useAuth from "@/features/auth/context/useAuth";
import type { Roles } from "@/types/auth";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  roles: [keyof Roles]; // Array of roles that are allowed to access the route
};

/**
 * Componente para proteger rotas com base no perfil do usuário
 * @param {ProtectedRouteProps} props - Propriedades do componente, incluindo os papéis permitidos
 * @returns Componente Outlet se o usuário tiver o papel necessário, ou redireciona para a página de login
 */
export default function ProtectedRoute({ roles }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user && roles && !roles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
