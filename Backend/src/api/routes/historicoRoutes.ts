import Router from "express";
import getHistoricoTccController from "../controllers/historico/getTccController";
import authorization from "../middlewares/authorization";
import validateNumberParams from "../middlewares/validateNumberParams";
import validateAccessTCC from "../middlewares/validateAccessTCC";

const historicoRoutes = Router();

// Rota para buscar o histórico de ações de um TCC específico
historicoRoutes.get(
  "/tcc/:id",
  [authorization, validateNumberParams, validateAccessTCC],
  getHistoricoTccController
);

export default historicoRoutes;
