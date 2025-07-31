// Interfaces e tipos utilizados no repositório de usuários

export interface ICreateUser {
  fullName: string;
  email: string;
  password: string;
  type: "ALUNO" | "PROFESSOR" | "ADMIN";
}

export interface IUsuario {
  id: number;
  nome_completo: string;
  email: string;
  criado_em: Date;
  atualizado_em: Date;
}
