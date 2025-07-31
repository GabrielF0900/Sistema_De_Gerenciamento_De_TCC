import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/features/auth/context/useAuth";

/**
 * Componente para proteger rotas que requerem autenticação
 * @returns Componente Outlet se o usuário estiver autenticado, ou redireciona para a página de login
 */
export default function RequireAuthRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
