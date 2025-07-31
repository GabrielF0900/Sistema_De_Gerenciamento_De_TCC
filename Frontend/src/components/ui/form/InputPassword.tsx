import Input, { type InputProps } from "@/components/ui/form/Input";
import { Eye, EyeOff } from "lucide-react";
import { useTogglePassword } from "@/hooks/useTogglepassword";
import { cn } from "@/utils/cn";

/**
 * Componente de Input para Senha.
 * Este componente renderiza um campo de entrada para senha com a funcionalidade de mostrar/ocultar a senha.
 * Utiliza o hook `useTogglePassword` para alternar entre os estados de visibilidade da senha.
 * @param {string} id - Identificador único para o campo de entrada.
 * @param {keyof typeof Variants} [variant="default"] - Define o estilo do input.
 * @param {string} [className] - Classes CSS adicionais para estilização do input.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Outras propriedades HTML do input, como `placeholder`, `value`, `onChange`, etc.
 * @return {JSX.Element} Um elemento de input estilizado com a funcionalidade de mostrar/ocultar senha.
 */
export default function InputPassword({
  id,
  variant = "default",
  className,
  ...props
}: InputProps) {
  const { mostrarSenha, toggleSenha } = useTogglePassword();

  return (
    <div className="relative min-w-fit flex" aria-labelledby={id}>
      <Input
        type={mostrarSenha ? "text" : "password"}
        className={cn("pr-10", className)}
        id={id}
        variant={variant}
        aria-describedby={id}
        {...props}
      />
      <button
        type="button"
        onClick={toggleSenha}
        className="absolute inset-y-0 right-0 flex items-center pr-2"
        aria-label="Mostrar/Ocultar Senha"
        aria-controls={id}
      >
        {mostrarSenha ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}
