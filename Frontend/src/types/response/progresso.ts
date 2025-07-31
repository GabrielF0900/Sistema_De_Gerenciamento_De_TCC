import type { TCCProgress } from "../progresso";
import type { ApiResponse } from "./base";

export interface TccProgressResponse extends ApiResponse {
  id: number;
  titulo: string;
  progresso: TCCProgress;
}
