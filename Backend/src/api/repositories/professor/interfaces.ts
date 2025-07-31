export interface IGetAllProfessores {
  id: number;
  nome_completo: string;
  email: string;
  area_atuacao: string;
  disponibilidade: boolean;
}

export interface GetAllProfessoresParams {
  nome?: string;
  disponivel?: boolean;
}
