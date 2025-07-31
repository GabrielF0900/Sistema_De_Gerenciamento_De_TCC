import type React from "react";
import { cn } from "@/utils/cn";

const Variants = {
  default: "focus:ring-2 focus:ring-gray-300",
  primary:
    "hover:border-blue-700 focus:border-blue-700 focus:ring-2 focus:ring-blue-300",
  secondary:
    "hover:bg-secondary focus:ring-2 focus:ring-secondary focus:border-secondary",
} as const;

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof Variants;
  className?: string;
};

/**
 * Componente de Input Personalizado.
 * Este componente renderiza um campo de entrada HTML com estilos personalizados.
 * @param {string} [type="text"] - Tipo do campo de entrada (padrão é "text").
 * @param {string} [className] - Classes CSS adicionais para estilização.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Outras propriedades HTML do input, como `placeholder`, `value`, `onChange`, etc.
 * @return {JSX.Element} Um elemento de input estilizado com classes CSS personalizadas.
 */
function Input({
  type = "text",
  variant = "default",
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "px-3 py-2 rounded-lg border-[1.5px] border-solid border-gray-400 bg-white font-normal transition-colors duration-300 ease-in-out focus:outline-none aria-invalid:border-red-600 aria-invalid:focus:ring-2 aria-invalid:ring-red-300 disabled:bg-gray-100 disabled:text-gray-700",
        Variants[variant],
        className
      )}
      type={type}
      {...props}
    />
  );
}

export default Input;
