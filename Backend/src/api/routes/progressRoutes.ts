import { Router } from "express";
import authorization from "../middlewares/authorization";
import allowRoles from "../middlewares/allowRoles";
import validateAccessTCC from "../middlewares/validateAccessTCC";
import validateNumberParams from "../middlewares/validateNumberParams";
import getTCCProgressController from "../controllers/progresso-tcc/getTCCProgress";
import getOrientadorTCCsProgressController from "../controllers/progresso-tcc/getOrientadorTCCsProgress";

const router = Router();

/**
 * @route GET /progress/tcc/:tccId
 * @desc Calcular o progresso de um TCC específico baseado nos 5 pilares
 * @access Professores e Alunos autenticados
 */
router.get(
  "/tcc/:id",
  [authorization, validateNumberParams, validateAccessTCC],
  getTCCProgressController
);

/**
 * @route GET /progress/orientador/:orientadorId
 * @desc Obter progresso de todos os TCCs de um orientador
 * @access Apenas Professores
 */
router.get(
  "/orientador/:id",
  [authorization, allowRoles(["PROFESSOR"]), validateNumberParams],
  getOrientadorTCCsProgressController
);

export default router;
