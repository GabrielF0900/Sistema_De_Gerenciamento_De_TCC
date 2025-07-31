import type { AreaConhecimento } from "../area-conhecimento";
import type { ApiResponse } from "./base";

export interface GetAllAreaConhecimentoResponse extends ApiResponse {
  areasConhecimento: AreaConhecimento[];
}
