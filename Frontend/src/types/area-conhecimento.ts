/**
 * Constante de categorias de áreas de conhecimento.
 */

export const CategoriaAreaConhecimento = {
  CIENCIAS_HUMANAS: "Ciências Humanas",
  CIENCIAS_EXATAS: "Ciências Exatas",
  CIENCIAS_BIOLOGICAS: "Ciências Biológicas",
  ENGENHARIAS: "Engenharias",
  CIENCIAS_SOCIAIS: "Ciências Sociais",
  CIENCIAS_AGRARIAS: "Ciências Agrárias",
  LINGUISTICA: "Linguística",
  TECNOLOGIA: "Tecnologia",
  ARTES: "Artes",
  SAUDE: "Saúde",
  OUTROS: "Outros",
} as const;

/**
 * Interface para representar uma área de conhecimento.
 */

export interface AreaConhecimento {
  id: number;
  nome: string;
  categoria: keyof typeof CategoriaAreaConhecimento;
}
