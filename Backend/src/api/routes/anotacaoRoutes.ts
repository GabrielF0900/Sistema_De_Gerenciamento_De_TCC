import { Router } from "express";
import authorization from "../middlewares/authorization";
import allowRoles from "../middlewares/allowRoles";
import validateAccessTCC from "../middlewares/validateAccessTCC";
import validateNumberParams from "../middlewares/validateNumberParams";
import validateAccessAnotacao from "../middlewares/validateAccessAnotacao";
import { createAnotacaoController } from "../controllers/anotacoes/createController";
import getAnotacoesByTccController from "../controllers/anotacoes/getByTccController";
import updateAnotacaoController from "../controllers/anotacoes/updateController";
import deleteAnotacaoController from "../controllers/anotacoes/deleteController";

const anotacaoRouter = Router();

// Rota para obter anotações associadas a um TCC
anotacaoRouter.get(
  "/tcc/:id",
  [authorization, validateNumberParams, validateAccessTCC],
  getAnotacoesByTccController
);

// Rota para criar uma anotação associada a um TCC
anotacaoRouter.post(
  "/",
  [authorization, validateAccessTCC],
  createAnotacaoController
);

// Rota para editar uma anotação específica
anotacaoRouter.put(
  "/:id",
  [authorization, validateNumberParams, validateAccessAnotacao],
  updateAnotacaoController
);

// Rota para deletar uma anotação específica
anotacaoRouter.delete(
  "/:id",
  [authorization, validateNumberParams, validateAccessAnotacao],
  deleteAnotacaoController
);

export default anotacaoRouter;
