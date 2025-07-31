import { cn } from "@/utils/cn";
import React from "react";

type FormErrorProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Componente de Erro de Formulário.
 * Exibe mensagens de erro em formulários com estilo personalizado.
 * @param {React.ReactNode} [children] - Conteúdo do erro, geralmente uma mensagem de erro.
 * @param {React.HTMLAttributes<HTMLParagraphElement>} props - Outras propriedades HTML do parágrafo, como `className`, `style`, etc.
 * @return {JSX.Element} Um parágrafo estilizado para exibir mensagens de erro em formulários.
 */

export default function FormError({ children, ...props }: FormErrorProps) {
  return (
    <span
      role="alert"
      className={cn("text-red-600 text-sm mt-1", props.className)}
      {...props}
    >
      {children}
    </span>
  );
}
