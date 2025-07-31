import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import prisma from "../../config/prisma";

/**
 * Controller para listar reuniões do TCC do usuário
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const getReunioes = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  try {
    console.log('=== LISTAR REUNIÕES ===');
    console.log('User ID:', req.user?.id);
    console.log('Query params:', req.query);

    const userId = req.user?.id;
    const { tcc_id, status, page = '1', limit = '10' } = req.query;

    // Validações básicas
    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Usuário não autenticado."
      });
      return;
    }

    // Converter parâmetros de paginação
    const pageNumber = parseInt(page as string, 10);
    const limitNumber = parseInt(limit as string, 10);

    if (isNaN(pageNumber) || pageNumber < 1) {
      res.status(400).json({
        success: false,
        message: "Página deve ser um número maior que 0."
      });
      return;
    }

    if (isNaN(limitNumber) || limitNumber < 1 || limitNumber > 100) {
      res.status(400).json({
        success: false,
        message: "Limite deve ser um número entre 1 e 100."
      });
      return;
    }

    // Construir condições de busca
    const whereConditions: any = {
      TCC: {
        OR: [
          { Aluno_id: userId }, // É o aluno do TCC
          { Orientador_id: userId }, // É o orientador
          { Coorientador_id: userId }, // É o coorientador
        ]
      }
    };

    // Filtrar por TCC específico se fornecido
    if (tcc_id) {
      const tccIdNumber = parseInt(tcc_id as string, 10);
      if (isNaN(tccIdNumber)) {
        res.status(400).json({
          success: false,
          message: "ID do TCC deve ser um número válido."
        });
        return;
      }
      whereConditions.TCC_id = tccIdNumber;
    }

    // Filtrar por status se fornecido
    if (status && typeof status === 'string') {
      const validStatuses = ['AGENDADA', 'REALIZADA', 'CANCELADA', 'NAO_COMPARECEU'];
      if (!validStatuses.includes(status.toUpperCase())) {
        res.status(400).json({
          success: false,
          message: "Status inválido. Use: AGENDADA, REALIZADA, CANCELADA ou NAO_COMPARECEU."
        });
        return;
      }
      whereConditions.status = status.toUpperCase();
    }

    // Calcular offset para paginação
    const offset = (pageNumber - 1) * limitNumber;

    // Buscar reuniões com informações do TCC
    const [reunioes, totalCount] = await Promise.all([
      prisma.reuniao.findMany({
        where: whereConditions,
        include: {
          TCC: {
            select: {
              id: true,
              titulo: true,
              Aluno: {
                include: {
                  Usuario: {
                    select: {
                      nome_completo: true,
                      email: true
                    }
                  }
                }
              },
              Orientador: {
                include: {
                  Usuario: {
                    select: {
                      nome_completo: true,
                      email: true
                    }
                  }
                }
              },
              Coorientador: {
                include: {
                  Usuario: {
                    select: {
                      nome_completo: true,
                      email: true
                    }
                  }
                }
              }
            }
          }
        },
        orderBy: {
          data_agendada: 'desc'
        },
        skip: offset,
        take: limitNumber
      }),
      prisma.reuniao.count({
        where: whereConditions
      })
    ]);

    // Formatar resposta
    const reunioesFormatadas = reunioes.map(reuniao => ({
      id: reuniao.id,
      titulo: reuniao.titulo,
      descricao: reuniao.descricao,
      data_agendada: reuniao.data_agendada,
      data_realizada: reuniao.data_realizada,
      status: reuniao.status,
      observacoes: reuniao.observacoes,
      tcc: {
        id: reuniao.TCC.id,
        titulo: reuniao.TCC.titulo,
        aluno: reuniao.TCC.Aluno.Usuario.nome_completo,
        orientador: reuniao.TCC.Orientador?.Usuario.nome_completo || null,
        coorientador: reuniao.TCC.Coorientador?.Usuario.nome_completo || null
      },
      criado_em: reuniao.criado_em
    }));

    // Calcular informações de paginação
    const totalPages = Math.ceil(totalCount / limitNumber);

    console.log(`Reuniões encontradas: ${reunioes.length} de ${totalCount} total`);

    res.status(200).json({
      success: true,
      message: "Reuniões recuperadas com sucesso!",
      data: {
        reunioes: reunioesFormatadas,
        pagination: {
          current_page: pageNumber,
          per_page: limitNumber,
          total_items: totalCount,
          total_pages: totalPages,
          has_next_page: pageNumber < totalPages,
          has_prev_page: pageNumber > 1
        }
      }
    });

  } catch (error) {
    console.error("Erro ao listar reuniões:", error);
    
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor ao listar reuniões."
    });
  }
};

export default getReunioes;
