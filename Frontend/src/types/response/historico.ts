import type { AcoesHistorico, EntidadesHistorico } from "../historico";

export interface GetTCCHistoricoParams {
  acao?: AcoesHistorico;
  entidade?: EntidadesHistorico;
  periodo?: "hoje" | "semana" | "mes";
  page?: number;
  limit?: number;
}
