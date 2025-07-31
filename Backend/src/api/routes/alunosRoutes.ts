import { Router } from "express";
import authorization from "../middlewares/authorization";
import getAllAlunosController from "../controllers/aluno/getAllController";
import getAlunoController from "../controllers/aluno/getAlunoController";

const alunosRoutes = Router();

// rota para obter todos os alunos
alunosRoutes.get("/", [authorization], getAllAlunosController);

// rota para obter um aluno específico pelo ID
alunosRoutes.get("/:id", [authorization], getAlunoController);

export default alunosRoutes;
