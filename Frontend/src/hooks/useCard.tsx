import { useState } from "react"
import  { arrayCards } from '../components/arrayCards'
import type { Atividade } from "@/types/atividade";

// Hook customizado que mantém o estado da lista de tarefas
export function useCard () {
   const [tarefas, setTarefas] = useState<Atividade[]>(arrayCards)
   // Retorna o estado e função para atualizar as tarefas
   return {tarefas, setTarefas};
};
