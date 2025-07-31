import { Request, Response, NextFunction } from "express";
import { verifyJwtToken } from "../utils/jwt";
import { DecodedUser } from "../types/auth";
import { RequestWithUser } from "../types/auth";

/**
 * Middleware de autorização para verificar o token JWT no header Authorization.
 */
export default function authorization(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
): void {
  console.log('=== DEBUG Authorization Middleware ===');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  
  const authHeader = req.headers.authorization;
  console.log('Auth Header:', authHeader ? 'presente' : 'ausente');
  
  const parts = authHeader?.split(" ");

  // Verifica se o header Authorization está presente
  if (!authHeader || !parts?.[1]) {
    console.log('Token não fornecido');
    res.status(401).json({ success: false, message: "Token não fornecido." });
    return;
  }

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    console.log('Formato de token inválido');
    res.status(401).json({
      success: false,
      message: "Formato de token inválido.",
    });
    return;
  }

  // verifica se o token é válido
  const token = parts[1];
  console.log('Token extraído:', token.substring(0, 20) + '...');
  
  const decoded = verifyJwtToken(token);
  console.log('Token decodificado:', decoded);

  if (!decoded) {
    console.log('Token inválido');
    res.status(401).json({
      success: false,
      message: "Token inválido.",
    });
    return;
  }

  // Adiciona os dados decodificados do usuário à requisição
  req.user = decoded as DecodedUser;
  console.log('Usuário adicionado ao req:', req.user);

  next();
}
