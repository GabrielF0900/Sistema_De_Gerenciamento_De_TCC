import Router from "express";
import authorization from "../middlewares/authorization";
import getAllProfessoresController from "../controllers/professores/getAllController";

// Arquivo de rotas de professores
// Este arquivo define as rotas relacionadas aos professores.

const professorRoutes = Router();

// Rota para obter todos os professores
professorRoutes.get("/", getAllProfessoresController);

export default professorRoutes;

