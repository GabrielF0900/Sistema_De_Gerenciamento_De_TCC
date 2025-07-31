import { cn } from "@/utils/cn";
import React from "react";

const Variants = {
  default: "focus:ring-2 focus:ring-gray-300",
  primary:
    "hover:border-blue-700 focus:border-blue-700 focus:ring-2 focus:ring-blue-300",
  secondary:
    "hover:bg-secondary focus:ring-2 focus:ring-secondary focus:border-secondary",
} as const;

export type SelectProps = React.InputHTMLAttributes<HTMLSelectElement> & {
  variant?: keyof typeof Variants;
  className?: string;
};

/**
 * Componente de Select Personalizado.
 * Este componente renderiza um campo de seleção HTML com estilos personalizados.
 * @param {string} [className] - Classes CSS adicionais para estilização.
 * @param {React.InputHTMLAttributes<HTMLSelectElement>} props - Outras propriedades HTML do select, como `placeholder`, `value`, `onChange`, etc.
 * @return {JSX.Element} Um elemento de select estilizado com classes CSS personalizadas.
 */
export default function Select({
  variant = "default",
  className,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        "px-3 py-2 rounded-lg border border-solid border-gray-400 bg-white font-normal transition-colors duration-300 ease-in-out focus:outline-none aria-invalid:border-red-600 aria-invalid:focus:ring-2 aria-invalid:ring-red-300 disabled:bg-gray-100 disabled:text-gray-700",
        Variants[variant],
        className
      )}
      {...props}
    >
      {props.children}
    </select>
  );
}
