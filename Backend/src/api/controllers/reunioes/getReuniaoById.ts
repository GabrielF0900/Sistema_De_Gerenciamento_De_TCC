import { Response } from "express";
import { RequestWithUser } from "../../types/auth";
import prisma from "../../config/prisma";

/**
 * Controller para buscar uma reunião específica por ID
 * @param req - Requisição com dados do usuário autenticado
 * @param res - Resposta da requisição
 */
export const getReuniaoById = async (
  req: RequestWithUser,
  res: Response
): Promise<void> => {
  try {
    console.log('=== BUSCAR REUNIÃO POR ID ===');
    console.log('User ID:', req.user?.id);
    console.log('Reunião ID:', req.params.id);

    const userId = req.user?.id;
    const reuniaoId = parseInt(req.params.id, 10);

    // Validações básicas
    if (!userId) {
      res.status(401).json({
        success: false,
        message: "Usuário não autenticado."
      });
      return;
    }

    if (isNaN(reuniaoId) || reuniaoId <= 0) {
      res.status(400).json({
        success: false,
        message: "ID da reunião inválido."
      });
      return;
    }

    // Buscar a reunião com todas as informações necessárias
    const reuniao = await prisma.reuniao.findFirst({
      where: {
        id: reuniaoId,
        TCC: {
          OR: [
            { Aluno_id: userId }, // É o aluno do TCC
            { Orientador_id: userId }, // É o orientador
            { Coorientador_id: userId }, // É o coorientador
          ]
        }
      },
      include: {
        TCC: {
          select: {
            id: true,
            titulo: true,
            tema: true,
            status_atual: true,
            Aluno: {
              include: {
                Usuario: {
                  select: {
                    id: true,
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
                    id: true,
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
                    id: true,
                    nome_completo: true,
                    email: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!reuniao) {
      res.status(404).json({
        success: false,
        message: "Reunião não encontrada ou você não tem permissão para visualizá-la."
      });
      return;
    }

    // Determinar o papel do usuário atual no TCC
    let papelUsuario = 'viewer';
    if (reuniao.TCC.Aluno.Usuario.id === userId) {
      papelUsuario = 'aluno';
    } else if (reuniao.TCC.Orientador?.Usuario.id === userId) {
      papelUsuario = 'orientador';
    } else if (reuniao.TCC.Coorientador?.Usuario.id === userId) {
      papelUsuario = 'coorientador';
    }

    // Formatar resposta
    const reuniaoFormatada = {
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
        tema: reuniao.TCC.tema,
        status: reuniao.TCC.status_atual,
        participantes: {
          aluno: {
            id: reuniao.TCC.Aluno.Usuario.id,
            nome: reuniao.TCC.Aluno.Usuario.nome_completo,
            email: reuniao.TCC.Aluno.Usuario.email
          },
          orientador: reuniao.TCC.Orientador ? {
            id: reuniao.TCC.Orientador.Usuario.id,
            nome: reuniao.TCC.Orientador.Usuario.nome_completo,
            email: reuniao.TCC.Orientador.Usuario.email
          } : null,
          coorientador: reuniao.TCC.Coorientador ? {
            id: reuniao.TCC.Coorientador.Usuario.id,
            nome: reuniao.TCC.Coorientador.Usuario.nome_completo,
            email: reuniao.TCC.Coorientador.Usuario.email
          } : null
        }
      },
      usuario_papel: papelUsuario,
      pode_editar: ['aluno', 'orientador', 'coorientador'].includes(papelUsuario),
      pode_cancelar: ['aluno', 'orientador', 'coorientador'].includes(papelUsuario) && reuniao.status === 'AGENDADA',
      criado_em: reuniao.criado_em
    };

    console.log(`Reunião encontrada: ${reuniao.id} - Status: ${reuniao.status}`);

    res.status(200).json({
      success: true,
      message: "Reunião encontrada com sucesso!",
      reuniao: reuniaoFormatada
    });

  } catch (error) {
    console.error("Erro ao buscar reunião:", error);
    
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor ao buscar reunião."
    });
  }
};

export default getReuniaoById;
