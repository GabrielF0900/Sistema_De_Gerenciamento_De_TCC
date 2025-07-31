import { ArrowDown, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/Button";
import { Select } from "@/components/ui/form";
import ApplyHistoryLoading from "./ApplyHistoryLoading";
import { Suspense } from "react";
import useTccApplyHistory from "../hooks/useTccApplyHistory";
import React from "react";
import type { AcoesHistorico, EntidadesHistorico } from "@/types/historico";
import Pagination from "@/components/ui/Pagination";

const ApplyHistoryContainer = React.lazy(() =>
  import("./ApplyHistoryContainer").then((module) => ({
    default: module.default,
  }))
);

export function HistoricoAtividades({ tccId }: { tccId: number }) {
  const { data, page, acao, entidade, periodo, setQueryParams } =
    useTccApplyHistory(tccId);

  return (
    <div className="flex flex-col gap-8">
      <Card className="bg-neutral w-full p-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
        <div className="flex justify-center items-center gap-2">
          <Clock className="size-6" />
          <h1 className="font-semibold text-2xl">Histórico de Atividades</h1>
        </div>

        <Button className="flex items-center gap-2">
          <ArrowDown className="size-6" />
          Exportar
        </Button>
      </Card>
      <Card className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-semibold flex items-center gap-2">
          Filtros
        </span>

        <div
          className="flex sm:basis-96 shrink flex-wrap sm:flex-nowrap gap-4"
          id="historico-filtros"
        >
          <Select
            id="acoes"
            name="acoes"
            variant="primary"
            placeholder="Todas as Acões"
            className="flex-1"
            value={acao}
            onChange={(e) => {
              setQueryParams({ acao: e.target.value as AcoesHistorico });
            }}
            aria-labelledby="historico-filtros"
          >
            <option value="">Todas as ações</option>
            <option value="CRIAR">Criação</option>
            <option value="ALTERAR">Alteração</option>
            <option value="ATUALIZAR">Atualização</option>
            <option value="CANCELAR">Cancelamento</option>
            <option value="EXCLUIR">Exclusão</option>
          </Select>
          <Select
            id="entidade"
            name="entidade"
            variant="primary"
            className="flex-1"
            value={entidade}
            onChange={(e) => {
              setQueryParams({
                entidade: e.target.value as EntidadesHistorico,
              });
            }}
            aria-labelledby="historico-filtros"
          >
            <option value="">Todos os tipos</option>
            <option value="TCC">TCC</option>
            <option value="ATIVIDADE">Tarefas</option>
            <option value="ANOTACAO">Anotações</option>
            <option value="ETAPA_TCC">Etapas do TCC</option>
            <option value="REUNIAO">Reuniões</option>
            <option value="DEFESA">Defesas</option>
          </Select>
          <Select
            id="periodo"
            name="periodo"
            className="flex-1"
            variant="primary"
            value={periodo}
            onChange={(e) => {
              setQueryParams({
                periodo: e.target.value as "hoje" | "semana" | "mes",
              });
            }}
            aria-labelledby="historico-filtros"
          >
            <option value="">Todos os períodos</option>
            <option value="hoje">Hoje</option>
            <option value="semana">Esta semana</option>
            <option value="mes">Este mês</option>
          </Select>
        </div>
      </Card>

      {/* Seção de Atividades Recentes */}
      <Card className="p-6 flex flex-col gap-6">
        <h2 className="flex font-semibold ml-3 text-2xl">
          Atividades Recentes
        </h2>
        <Suspense fallback={<ApplyHistoryLoading />}>
          <ApplyHistoryContainer items={data?.items || []} />
        </Suspense>
        <Pagination
          page={page}
          totalPages={data?.totalPages || 1}
          onPageChange={(page) => setQueryParams({ page })}
        />
      </Card>
    </div>
  );
}
