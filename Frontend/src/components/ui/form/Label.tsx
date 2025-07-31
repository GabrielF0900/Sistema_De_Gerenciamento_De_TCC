import React from "react";
import { cn } from "@/utils/cn";

type LabelProps = {
  required?: boolean;
  children?: React.ReactNode;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Componente de Rótulo Personalizado.
 * Este componente permite a criação de rótulos para campos de formulário com estilos personalizados.
 * @param {React.ReactNode} [children] - Conteúdo do rótulo, geralmente texto.
 * @param {string} [className] - Classes CSS adicionais para estilização do rótulo.
 * @param {boolean} [required=false] - Indica se o campo é obrigatório.
 * Se verdadeiro, um asterisco vermelho será adicionado ao final do rótulo.
 * @param {React.LabelHTMLAttributes<HTMLLabelElement>} props - Outras propriedades HTML do rótulo, como `htmlFor`, `className`, etc.
 * @return {JSX.Element} Um rótulo estilizado para uso em formulários.
 */
export default function Label({
  children,
  className,
  required = false,
  ...props
}: LabelProps) {
  return (
    <label className={cn("font-semibold mb-2 block", className)} {...props}>
      {children}
      {required && <span className="text-red-600"> *</span>}
    </label>
  );
}
