import {
  createTCC,
  findTCCByAlunoId,
} from "../../repositories/TCC/TCCRepository";
import { ResponseError } from "../../helpers/ResponseError";
import { CreateTCCPayload } from "../../repositories/TCC/interfaces";
import { ICreateTCCService } from "./contracts";
import { findProfessorByName } from "../../repositories/professor/professorRepository";
import { findAreaConhecimentoByName } from "../../repositories/area-conhecimento/areaConhecimentoRepository";

export default async function createTCCService(
  data: ICreateTCCService
): Promise<CreateTCCPayload> {
  // Validação de limite de TCCs
  const existingTCCs = await findTCCByAlunoId(data.alunoId);

  if (existingTCCs) {
    throw new ResponseError(
      400,
      "O aluno já possui um TCC cadastrado. Não é possível criar mais de um TCC."
    );
  }

  // Validação de datas
  const dataInicioDate = new Date(data.dataInicio as string);
  const dataConclusaoDate = new Date(data.dataConclusao as string);

  if (isNaN(dataInicioDate.getTime()) || isNaN(dataConclusaoDate.getTime())) {
    throw new ResponseError(
      400,
      "Formato de data inválido. Use o formato YYYY-MM-DD ou ISO 8601."
    );
  }

  if (dataConclusaoDate <= dataInicioDate) {
    throw new ResponseError(
      400,
      "A data de conclusão deve ser posterior à data de início."
    );
  }

  // Validação de orientador
  if (!data.orientadorNome) {
    throw new ResponseError(
      400,
      "O nome do orientador é obrigatório para criar um TCC."
    );
  }

  // Buscar orientador por nome
  const orientador = await findProfessorByName(data.orientadorNome.trim());

  if (!orientador) {
    throw new ResponseError(404, `Orientador não encontrado.`);
  }

  // Buscar coorientador por nome (se fornecido)
  let coorientador = null;
  if (data.coorientadorNome && data.coorientadorNome.trim()) {
    coorientador = await findProfessorByName(data.coorientadorNome.trim());

    // Verifica se o coorientador é o mesmo que o orientador
    if (coorientador && coorientador.Usuario_id === orientador.Usuario_id) {
      throw new ResponseError(
        400,
        "O coorientador não pode ser o mesmo que o orientador."
      );
    }

    if (!coorientador) {
      throw new ResponseError(404, `Coorientador não encontrado.`);
    }
  }

  // busca a área de conhecimento pelo ID
  const areaConhecimento = await findAreaConhecimentoByName(
    data.areaConhecimento.trim()
  );

  if (!areaConhecimento) {
    throw new ResponseError(404, `Área de conhecimento não encontrada.`);
  }

  // Criação do TCC com IDs dos orientadores
  const tcc = await createTCC({
    titulo: data.titulo,
    tema: data.tema,
    resumo: data.resumo,
    dataInicio: dataInicioDate,
    dataConclusao: dataConclusaoDate,
    statusAtual: data.statusAtual,
    alunoId: data.alunoId,
    areaConhecimentoId: areaConhecimento.id,
    orientadorId: orientador.Usuario_id,
    coorientadorId: coorientador?.Usuario_id,
  });

  return tcc;
}
