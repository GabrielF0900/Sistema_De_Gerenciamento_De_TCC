import { Router } from "express";
import loginController from "../controllers/auth/loginController";
import registerController from "../controllers/auth/registerController";
import { requestPasswordResetController } from "../controllers/auth/passwordRecuperationController";
import { resetPasswordController } from "../controllers/auth/resetPasswordController";

// Arquivo de rotas de autenticação
// Este arquivo define as rotas relacionadas à autenticação, como login.

const authRoutes = Router();

// Rota de login
authRoutes.post("/login", loginController);

// Rota de registro
authRoutes.post("/register", registerController);

// Rota de recuperação de senha
authRoutes.post("/request-password-reset", requestPasswordResetController);

// Rota de redefinição de senha
authRoutes.post("/reset-password", resetPasswordController);

// Exporta as rotas de autenticação
export default authRoutes;