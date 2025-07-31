import { useState } from "react";

/**
 * Hook para gerenciar o estado de um toggle (aberto/fechado).
 * @param {boolean} initialValue - Valor inicial do toggle (padrão é false).
 * @returns {Object} Objeto contendo o estado do toggle e funções para manipulá-lo
 */

export default function useToggle(initialValue: boolean = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return { isOpen, toggle, open, close };
}
