import type { Anotacao } from "../anotacao";
import type { ApiResponse } from "./base";

export interface AnotacoesResponse extends ApiResponse {
  anotacoes: Anotacao[];
}
