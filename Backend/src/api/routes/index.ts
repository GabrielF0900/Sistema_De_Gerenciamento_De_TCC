import { Router } from "express";
import authRoutes from "./authRoutes";
import alunosRoutes from "./alunosRoutes";
import professorRoutes from "./professorRoutes";
import TCCRoutes from "./TCCRoutes";
import areaConhecimentoRoutes from "./areaConhecimentoRoutes";
import atividadesRoutes from "./atividadesRoutes";
import anotacaoRoutes from "./anotacaoRoutes";
import progressRoutes from "./progressRoutes";
import reunioesRoutes from "./reunioesRoutes";
import historicoRoutes from "./historicoRoutes";
import usuarioRoutes from "./usuarioRoutes";

// Arquivo de centralização das rotas da API
// Este arquivo importa e agrupa todas as rotas da API.

const routes = Router();

// Usando as rotas de autenticação
routes.use("/auth", authRoutes);
// Usando as rotas de alunos
routes.use("/alunos", alunosRoutes);
// Usando as rotas de professores
routes.use("/professores", professorRoutes);
// Usando as rotas de TCC
routes.use("/tccs", TCCRoutes);
// Usando as rotas de áreas de conhecimento
routes.use("/areas-conhecimento", areaConhecimentoRoutes);
// Usando as rotas de atividades
routes.use("/atividades", atividadesRoutes);
// Usando as rotas de anotações
routes.use("/anotacoes", anotacaoRoutes);
// Usando as rotas de progresso
routes.use("/progress", progressRoutes);
// Usando as rotas de reuniões
routes.use("/reunioes", reunioesRoutes);
// Importando as rotas de histórico
routes.use("/historico", historicoRoutes);
// Importando as rotas de usuários
routes.use("/usuario", usuarioRoutes);

export default routes;
