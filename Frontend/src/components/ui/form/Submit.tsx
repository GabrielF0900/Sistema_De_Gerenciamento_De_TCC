import Button, { type ButtonProps } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { FaSpinner } from "react-icons/fa";

/**
 * Componente de Botão Personalizado para Submissão de Formulários.
 * Este componente é utilizado para enviar formulários com um estilo consistente.
 * @param {string} [variant] - Define o estilo do botão. Opções: "default", "primary", "secondary", "neutral".
 * @param {string} [className] - Classe CSS adicional para personalização.
 * @param {React.ReactNode} [children] - Conteúdo do botão, geralmente texto ou ícones.
 * @param {boolean} [disabled] - Indica se o botão está desativado. Se verdadeiro, o botão será estilizado com opacidade reduzida e não será clicável.
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Outras propriedades HTML do botão, como `onClick`, `disabled`, etc.
 * @return {JSX.Element} Um botão estilizado com base na variante selecionada.
 */
export default function Submit({
  variant = "primary",
  className,
  children = "Enviar",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <Button
      type="submit"
      variant={variant}
      className={cn(
        "flex justify-center items-center gap-2",
        {
          "opacity-40 cursor-not-allowed": disabled,
          "hover:opacity-85": !disabled && variant !== "default",
        },
        className
      )}
      {...props}
    >
      {disabled && <FaSpinner className="animate-spin text-inherit" />}
      {children}
    </Button>
  );
}
