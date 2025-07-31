import { Request } from "express";

export interface DecodedUser {
  id: number;
  nome_completo: string; // Nome completo do usuário
  role: string;
  email: string;
}

export interface RequestWithUser extends Request {
  user?: DecodedUser; // O usuário decodificado do token JWT
  token?: string; // O token JWT, se necessário
}
