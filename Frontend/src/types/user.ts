import type { Roles } from "./auth";

export interface UserData {
  id: number;
  nome_completo: string;
  email: string;
  role: keyof Roles;
}

export interface User {
  id: number;
  nome_completo: string;
  email: string;
  criado_em: Date;
  atualizado_em: Date;
}
