import prisma from "../../config/prisma";
import {
  ICreateHistoricoTcc,
  IHistoricoTccParams,
  IHistoricoTccResponse,
} from "./intefaces";
import { getDateRange } from "../../utils/date";

/**
 * Função para criar um histórico de ações no TCC.
 * @param data - Dados do histórico a ser criado.
 * @returns Promise com o histórico criado.
 */

export async function createHistoricoTcc(
  data: ICreateHistoricoTcc
): Promise<void> {
  await prisma.historicoTcc.create({
    data: {
      acao: data.acao,
      entidade: data.entidade,
      entidadeId: data.entidadeId,
      usuarioId: data.usuarioId,
      tccId: data.tccId,
      descricao: data.descricao,
      detalhes: data.detalhes,
    },
  });
}

/**
 * Função para buscar o histórico de ações de um TCC específico.
 * @param tccId - ID do TCC para buscar o histórico.
 * @returns Promise com o histórico encontrado.
 */
export async function getHistoricoTcc(
  tccId: number,
  params: IHistoricoTccParams
): Promise<IHistoricoTccResponse> {
  const where: any = { tccId };
  let skip: number | undefined;
  let take: number | undefined;

  if (params.acao) {
    where.acao = params.acao;
  }

  if (params.entidade) {
    where.entidade = params.entidade;
  }

  if (params.periodo) {
    const filtroData = getDateRange(params.periodo);
    where.feito_em = {
      gte: filtroData.gte,
      lte: filtroData.lte,
    };
  }

  const totalCount = await prisma.historicoTcc.count({
    where,
  });

  if (params.page && params.limit) {
    skip = (params.page - 1) * params.limit;
    take = params.limit;
  }

  const historico = await prisma.historicoTcc.findMany({
    where,
    orderBy: { feito_em: "desc" },
    include: { Usuario: true },
    skip,
    take,
  });

  return {
    items: historico.map((item) => ({
      id: item.id,
      acao: item.acao,
      entidade: item.entidade,
      entidadeId: item.entidadeId,
      descricao: item.descricao,
      detalhes: item.detalhes ? item.detalhes : undefined,
      feito_em: item.feito_em,
      Usuario: {
        id: item.Usuario.id,
        nome: item.Usuario.nome_completo,
      },
    })),
    total: totalCount,
    page: params.page || 1,
    limit: params.limit || historico.length,
    hasNext:
      totalCount > (params.page || 1) * (params.limit || historico.length),
    hasPrevious: (params.page || 1) > 1,
    totalPages: Math.ceil(totalCount / (params.limit || historico.length)),
  };
}
