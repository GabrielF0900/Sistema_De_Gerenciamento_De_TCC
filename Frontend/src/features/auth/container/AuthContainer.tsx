import React from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/utils/cn";

/**
 * Componente de contêiner de autenticação.
 * Este componente é usado para envolver os componentes de autenticação, como Login e Registro,
 * fornecendo um layout consistente com o logotipo e o título do aplicativo.
 */

export default function AuthContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "bg-neutral w-full max-w-[30rem] rounded-lg shadow-lg flex flex-col gap-4 p-6",
        className
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <img src={logo} alt="Logo" className="w-16 h-24" />
        <span className="text-black text-3xl font-bold">FocoTCC</span>
      </div>
      {children}
    </main>
  );
}
