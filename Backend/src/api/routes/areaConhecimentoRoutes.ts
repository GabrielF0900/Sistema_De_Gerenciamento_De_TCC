import Router from "express";
import getAllAreasConhecimentoController from "../controllers/area-conhecimento/getAllController";
import getAreaConhecimentoByIdController from "../controllers/area-conhecimento/getByIdController";

const areaConhecimentoRoutes = Router();

// Rota para buscar todas as áreas de conhecimento
areaConhecimentoRoutes.get("/", getAllAreasConhecimentoController);

// Rota para buscar uma área de conhecimento pelo ID
areaConhecimentoRoutes.get("/:id", getAreaConhecimentoByIdController);

export default areaConhecimentoRoutes;