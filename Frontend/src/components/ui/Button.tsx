import React from "react";
import { cn } from "@/utils/cn"; // Ajuste o caminho conforme necessário

type Variants = {
  default: string;
  primary: string;
  secondary: string;
  neutral: string;
  transparent: string;
  logout: string;
  select: string;
  edit: string;
  quicks: string;
  DropProf: string;
  danger: string;
  ghost: string;
};

// Define as variantes de estilo para o botão
const variants: Variants = {
  default:
    "bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-sm transition-colors duration-300",
  primary:
    "bg-primary hover:bg-primary/80 text-white shadow-lg transition-colors duration-300",
  secondary:
    "bg-secondary hover:bg-secondary/80 text-white shadow-lg transition-colors duration-300",
  neutral:
    "bg-neutral hover:bg-neutral/80 text-white shadow-lg transition-colors duration-300",
  transparent: "bg-transparent text-black",
  ghost: "bg-transparent text-black hover:bg-gray-300/30",
  logout: " text-red-500 hover:text-red-700 transition-colors duration-300",
  select:
    "font-medium text-[#252525] hover:text-gray-400 cursor-pointer transition-colors duration-300",
  edit: " hover:text-blue-900 transition-colors duration-300",
  quicks:
    "border border-gray-400 rounded-md shadow-lg cursor-pointer hover:translate-y-1 hover:bg-slate-300 transition-all",
  DropProf: "text-black hover:text-gray-400 transition-colors duration-300",
  danger: "bg-red-600 hover:bg-red-700 text-white transition-colors duration-300",
};

export type ButtonProps = {
  variant?: keyof typeof variants;
  className?: string | string[];
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Componente de Botão Personalizado.
 * Este componente permite a criação de botões com diferentes variantes de estilo.
 * @param {keyof Variants} [variant] - Define o estilo do botão. Opções: "default", "primary", "secondary", "neutral".
 * @param {string} [className] - Classe CSS adicional para personalização.
 * @param {React.ReactNode} [children] - Conteúdo do botão, geralmente texto ou ícones.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Outras propriedades HTML do botão, como `onClick`, `disabled`, etc.
 * @return {JSX.Element} Um botão estilizado com base na variante selecionada.
 */

function Button({
  variant = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg text-black font-semibold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
