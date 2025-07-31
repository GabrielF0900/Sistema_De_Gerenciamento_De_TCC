/**
 * Função para obter a configuração do JWT
 * @returns {Object} Configuração do JWT contendo o segredo e o tempo de expiração
 */
export default function getJwtConfig() {
  return {
    secret: process.env.JWT_SECRET || "default_secret",
    expiresIn: "4h" as const,
    algorithm: "HS256" as const,
  };
}
