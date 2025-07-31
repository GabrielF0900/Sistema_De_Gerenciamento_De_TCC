import { Router } from "express";
import createReuniaoController from "../controllers/reunioes/createReuniao";
import getReunioes from "../controllers/reunioes/getReunioes";
import getReuniaoById from "../controllers/reunioes/getReuniaoById";
import getReunioesByTccController from "../controllers/reunioes/getByTccController";
import updateReuniao from "../controllers/reunioes/updateReuniao";
import deleteReuniao from "../controllers/reunioes/deleteReuniao";
import authorization from "../middlewares/authorization";
import validateAccessTCC from "../middlewares/validateAccessTCC";
import validateNumberParams from "../middlewares/validateNumberParams";
import validateAccessReuniao from "../middlewares/validateAccessReuniao";

/**
 * Arquivo de rotas para reuniões
 * Este arquivo define as rotas relacionadas ao CRUD de reuniões
 */

const reunioesRoutes = Router();

// Todas as rotas de reuniões requerem autenticação
reunioesRoutes.use(authorization);

// Rota para criar uma nova reunião
// POST /api/reunioes
reunioesRoutes.post(
  "/",
  [authorization, validateAccessTCC],
  createReuniaoController
);

// Rota para listar reuniões (com filtros e paginação)
// GET /api/reunioes?tcc_id=1&status=AGENDADA&page=1&limit=10
reunioesRoutes.get("/", getReunioes);

// Rota para buscar uma reunião específica por ID
// GET /api/reunioes/:id
reunioesRoutes.get("/:id", getReuniaoById);

// Rota para buscar reuniões de um TCC específico
// GET /api/reunioes/tcc/:tccId
reunioesRoutes.get(
  "/tcc/:id",
  [authorization, validateNumberParams, validateAccessTCC],
  getReunioesByTccController
);

// Rota para atualizar uma reunião
// PUT /api/reunioes/:id
reunioesRoutes.put(
  "/:id",
  [authorization, validateNumberParams, validateAccessReuniao],
  updateReuniao
);

// Rota para deletar/cancelar uma reunião
// DELETE /api/reunioes/:id?forceDelete=true
reunioesRoutes.delete(
  "/:id",
  [authorization, validateNumberParams, validateAccessReuniao],
  deleteReuniao
);

// Exporta as rotas de reuniões
export default reunioesRoutes;
