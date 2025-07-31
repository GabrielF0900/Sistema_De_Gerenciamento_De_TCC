// Arquivo de contratos para o serviço de autenticação
// Este arquivo define as interfaces e tipos utilizados no serviço de autenticação.

import { $Enums } from "@prisma/client";

export interface ILoginService {
  email: string;
  password: string;
}

export interface IRegisterService {
  nome_completo: string;
  email: string; 
  password: string;
  type: $Enums.TipoUsuario;
  course?: string;
  areaOfExpertise?: string;
}

export interface AuthPayload {
  token: string;
  user: {
    id: number;
    nome_completo: string;
    role: string;
    email: string;
  };
}
