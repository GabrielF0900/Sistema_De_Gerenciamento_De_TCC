/**
 * Classe para representar erros de resposta da API.
 * Esta classe estende a classe Error padrão do JavaScript e adiciona propriedades
 * específicas para o código de status HTTP, mensagem e detalhes adicionais.
 */
export class ResponseError extends Error {
  statusCode: number;
  message: string;
  details?: string;

  constructor(statusCode: number, message: string, details?: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.details = details;
    this.name = "ResponseError";
  }
}
