import React from "react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

type ContainerWithLogoProps = {
  className?: string;
};

/**
 * Componente de contêiner com logo.
 * Este componente é usado para envolver outros componentes com a logo do sistema.
 */

export default function ContainerWithLogo({
  children,
  className,
}: React.PropsWithChildren<ContainerWithLogoProps>) {
  return (
    <div
      className={cn(
        "bg-neutral min-h-[30rem] w-full max-w-screen-md p-6 rounded-2xl shadow-lg flex flex-col gap-6",
        className
      )}
    >
      <div className="flex justify-center items-center gap-2">
        <img src={logo} alt="Logo" className="w-16" />
        <span className="text-2xl font-bold text-center">FocoTCC</span>
      </div>
      {children}
    </div>
  );
}
