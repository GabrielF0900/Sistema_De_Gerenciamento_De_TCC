import React from "react";
import { Link } from "react-router-dom";

/**
 * Componente de contêiner para a página de registro.
 * Este componente exibe o título e subtítulo da página de registro,
 * Também inclui um link para a página de login caso o usuário já tenha uma conta.
 */
export default function RegisterContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col items-center justify-center text-black ">
        <h1 className=" text-3xl font-bold mb-2">Cadastro</h1>
        <h2 className=" text-lg font-sans ">
          Crie sua conta para acessar o sistema
        </h2>
      </div>
      {children}
      <div className="flex flex-col items-center justify-center mt-3">
        <span className="flex flex-wrap flex-col font-semibold ">
          Já tem uma conta?
        </span>
        <Link to="/login" className="text-primary font-bold hover:opacity-85">
          Faça Login
        </Link>
      </div>
    </div>
  );
}
