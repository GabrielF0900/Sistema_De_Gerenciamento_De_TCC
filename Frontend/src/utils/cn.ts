import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Função para combinar classes do Tailwind CSS.
 * Permite usar clsx para condicionalmente aplicar classes e twMerge para mesclar classes Tailwind sem conflitos.
 * @param inputs - Classes a serem combinadas.
 * @returns Uma string com as classes combinadas.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
