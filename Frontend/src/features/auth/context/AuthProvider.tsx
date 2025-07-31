import React, { useEffect, useState } from "react";
import type { UserData } from "@/types/user";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import isTokenExpired from "@/utils/jwt";

/**
 * Provider para o contexto de autenticação.
 * Este componente gerencia o estado de autenticação do usuário e fornece métodos para login, logout e recuperação de dados do usuário.
 * @param {React.ReactNode} children - Componentes filhos que serão renderizados dentro do provedor de contexto.
 * @return {JSX.Element} Um provedor de contexto que encapsula os componentes filhos, fornecendo acesso ao estado de autenticação e métodos relacionados.
 */

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  // Verifica se o usuário está autenticado
  const isAuthenticated = !!user;

  const navigate = useNavigate();

  // Efeito para recuperar os dados do usuário do localStorage ao montar o componente
  useEffect(() => {
    // Recupera os dados do usuário do localStorage ao montar o componente
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    // Se os dados do usuário e o token estiverem presentes, define o estado
    if (storedUser && storedToken) {
      // Verifica se o token está expirado
      if (isTokenExpired(storedToken)) {
        // Se o token estiver expirado, limpa o localStorage e redireciona para o login
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setLoading(false);
  }, [navigate]);

  // Função para definir a sessão do usuário
  // Esta função atualiza o estado do usuário e do token, e armazena os dados no localStorage
  const setSession = (userData: UserData, token: string) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Função para fazer logout
  // Limpa o estado do usuário e o token, remove os dados do localStorage e redireciona para a página de login
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, token, loading, setSession, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
