import { useContext } from "react";
import TCCContext from "@/features/TCC/contexts/TCCContext";
import type { TCCContextType } from "../types/tcc";

/**
 * Hook para acessar o contexto do TCC
 * @returns O contexto do TCC
 * @throws Erro se o hook for usado fora do TCCProvider
 */

export const useTCCContext = (): TCCContextType => {
  const context = useContext(TCCContext);
  if (context === undefined) {
    throw new Error("useTCCContext deve ser usado dentro de um TCCProvider");
  }
  return context;
};
