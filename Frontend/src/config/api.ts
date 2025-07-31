// Configurações da API
export const API_CONFIG = {
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      REQUEST_PASSWORD_RESET: "/auth/request-password-reset",
      RESET_PASSWORD: "/auth/reset-password",
    },
    TCC: {
      GET_BY_ALUNO: "/tccs/aluno",
      GET_ALL: "/tccs",
      GET_BY_ID: "/tccs/", // id do TCC deve ser concatenado
      CREATE: "/tccs",
      UPDATE: "/tccs/", // id do TCC deve ser concatenado
      DELETE: "/tccs/:id",
    },
    PROFESSORES: {
      GET_ALL: "/professores",
    },
    AREAS_CONHECIMENTO: {
      GET_ALL: "/areas-conhecimento",
      GET_BY_ID: "/areas-conhecimento/:id",
    },
    USERS: {
      PROFILE: "/user/profile",
    },
    PROGRESS: {
      GET_TCC_PROGRESS: "/progress/tcc/", // id do TCC deve ser concatenado
    },
    ATIVIDADES: {
      CREATE: "/atividades",
      GET_BY_TCC: "/atividades/tcc/", // id do TCC deve ser concatenado
      UPDATE: "/atividades/", // id da atividade deve ser concatenado
      DELETE: "/atividades/", // id da atividade deve ser concatenado
    },
    HISTORICO: {
      GET_TCC_HISTORICO: "/historico/tcc/", // id do TCC deve ser concatenado
    },
    ANOTACOES: {
      GET_BY_TCC: "anotacoes/tcc/", // id do TCC deve ser concatenado
      CREATE: "anotacoes",
      DELETE: "anotacoes/", // id da anotação deve ser concatenado
    },
    REUNIOES: {
      GET_BY_TCC: "reunioes/tcc/", // id do TCC deve ser concatenado
      CREATE: "reunioes",
    },
    ALUNOS: {
      GET_BY_ID: "/alunos/", // id do aluno deve ser concatenado
    },
    USUARIO: {
      GET_PROFILE: "/usuario/perfil",
      UPDATE_PASSWORD: "/usuario/alterar-senha",
      UPDATE_NAME: "/usuario/alterar-nome",
    },
  },
};
