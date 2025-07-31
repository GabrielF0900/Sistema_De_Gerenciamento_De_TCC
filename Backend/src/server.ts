import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from "./api/routes";
import { errorHandler } from './api/middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para entender JSON
app.use(express.json());

// Usar rotas externas com prefixo /api
app.use("/api", routes);

// Middleware de tratamento de erros
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
