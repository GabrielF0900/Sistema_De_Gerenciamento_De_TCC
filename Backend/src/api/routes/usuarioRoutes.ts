import { Router } from "express";
import updatePasswordController from "../controllers/usuario/updatePasswordController";
import updateNomeController from "../controllers/usuario/updateNameController";
import authorization from "../middlewares/authorization";
import { getUserProfileController } from "../controllers/usuario/profileController";

// Arquivo de rotas de autenticação
// Este arquivo define as rotas relacionadas a usuários, como atualização de nome e senha.

const usuarioRoutes = Router();

// Rota para obter o perfil do usuário
usuarioRoutes.get("/perfil", authorization, getUserProfileController);

// Rota para alterar nome
usuarioRoutes.patch("/alterar-nome", authorization, updateNomeController);

// Rota para alterar senha
usuarioRoutes.patch("/alterar-senha", authorization, updatePasswordController);

// Exporta as rotas de usuário
export default usuarioRoutes;
