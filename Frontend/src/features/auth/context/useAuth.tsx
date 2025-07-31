import { useContext } from "react";
import AuthContext from "./AuthContext";

/**
 * Hook para acessar o contexto de autenticação.
 * Este hook fornece acesso ao estado de autenticação do usuário e métodos relacionados.
 * @return {AuthContextType} O contexto de autenticação, incluindo o estado do usuário, token e métodos para login e logout.
 */
export default function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
