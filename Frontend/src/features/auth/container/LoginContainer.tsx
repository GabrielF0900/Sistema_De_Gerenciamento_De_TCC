import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente de contêiner de login.
 * Este componente é usado para envolver os componentes de login,
 * fornecendo um layout consistente com o título e a descrição do login.
 */

export default function LoginContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col items-start justify-start text-black ">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <h2 className="text-lg font-sans">
          insira suas credenciais para acessar o sistema
        </h2>
      </div>
      {children}
      <div className="flex flex-col items-center justify-center">
        <span className="flex flex-wrap flex-col font-semibold ">
          Não tem uma conta?
        </span>
        <Link
          to="/register"
          className="text-primary font-bold hover:opacity-85"
        >
          Cadastre-se
        </Link>
      </div>
    </div>
  );
}
