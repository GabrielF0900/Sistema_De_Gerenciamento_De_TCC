import { useEffect } from "react";

/**
 * Hook para definir o título da página.
 * Este hook atualiza o título do documento com base no valor fornecido.
 * @param {string} title - O título a ser definido para a página.
 */

export default function useTitle(title: string) {
  useEffect(() => {
    // Guarda o título anterior para possível uso futuro
    const previousTitle = document.title;
    // Define o novo título do documento
    document.title = title;

    // Limpa o título ao desmontar o componente para evitar vazamentos de memória
    return () => {
      document.title = previousTitle;
    };
  });
}
