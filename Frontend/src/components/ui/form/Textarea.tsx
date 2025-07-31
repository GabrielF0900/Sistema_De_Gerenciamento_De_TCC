import React from "react";
import { cn } from "@/utils/cn";

const Variants = {
  default: "focus:ring-2 focus:ring-gray-300",
  primary:
    "hover:border-blue-700 focus:border-blue-700 focus:ring-2 focus:ring-blue-300",
  secondary:
    "hover:bg-secondary focus:ring-2 focus:ring-secondary focus:border-secondary",
} as const;

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: keyof typeof Variants;
    className?: string;
  };

/**
 * Componente de Textarea Personalizado.
 * Este componente renderiza uma área de texto HTML com estilos personalizados.
 * @param {string} [className] - Classes CSS adicionais para estilização.
 * @param {React.TextareaHTMLAttributes<HTMLTextAreaElement>} props - Outras propriedades HTML do textarea, como `placeholder`, `value`, `onChange`, etc.
 * @return {JSX.Element} Um elemento de textarea estilizado com classes CSS personalizadas.
 */

export default function Textarea({
  variant = "default",
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        "px-3 py-2 rounded-lg border border-solid border-gray-400 bg-white font-normal transition-colors duration-300 ease-in-out focus:outline-none resize-none aria-invalid:border-red-600 aria-invalid:focus:ring-2 aria-invalid:ring-red-300 disabled:bg-gray-100 disabled:text-gray-700",
        Variants[variant],
        className
      )}
      {...props}
    />
  );
}
