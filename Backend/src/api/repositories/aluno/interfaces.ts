// interfaces para o repositório de alunos

export interface GetAlunos {
  id: number;
  nome_completo: string;
  email: string;
  curso: string;
}

export interface IAluno extends GetAlunos {
  criado_em: Date;
  atualizado_em: Date;
}
