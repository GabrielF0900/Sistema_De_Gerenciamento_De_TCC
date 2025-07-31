import { cn } from "@/utils/cn";
import Input, { type InputProps } from "./Input";

type OptionType = {
  index: number | string;
  value: string | number;
};

type DatalistProps = {
  options: OptionType[];
} & InputProps;

/**
 * Componente Datalist Personalizado.
 * Este componente permite a criação de um campo de entrada com sugestões baseadas em uma lista de opções.
 * @param {string} id - Identificador único para o elemento datalist.
 * @param {OptionType[]} options - Lista de opções para o datalist, cada opção deve ter um `index`, `value` e opcionalmente um `label`.
 * @param {string} [variant] - Define o estilo do input. Opções: "default", "primary", "secondary", "neutral".
 * @param {string} [className] - Classe CSS adicional para personalização.
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - Outras propriedades HTML do input, como `placeholder`, `value`, `onChange`, etc.
 * @return {JSX.Element} Um campo de entrada com um datalist associado que exibe sugestões baseadas nas opções fornecidas.
 */
export default function Datalist({
  id,
  options,
  variant = "default",
  className,
  ...props
}: DatalistProps) {
  return (
    <div className="relative">
      <Input list={id} variant={variant} className={cn(className)} {...props} />
      <datalist id={id} aria-labelledby={id}>
        {options.map((option) => (
          <option key={option.index} value={option.value} />
        ))}
      </datalist>
    </div>
  );
}
