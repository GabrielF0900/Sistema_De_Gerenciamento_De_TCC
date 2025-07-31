import handlebars from "handlebars";
import fs from "fs";
import path from "path";

/**
 * Função para analisar templates de email usando Handlebars.
 *
 * @param {string} templateName - O nome do template a ser analisado (sem extensão). O template deve estar localizado na pasta 'templates' (src/email/templates) dentro do diretório atual.
 * @param {Object} data - Os dados a serem injetados no template. Deve ser um objeto contendo as variáveis que o template espera.
 * @returns {string} O conteúdo do template processado com os dados fornecidos.
 * @throws {Error} - Se o template não for encontrado, uma exceção será lançada.
 */

export default function parseTemplates(
  templateName: string,
  data: any
): string {
  const templatePath = path.join(
    __dirname,
    "..",
    "templates",
    `${templateName}.html`
  );

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template ${templateName} not found`);
  }

  const templateContent = fs.readFileSync(templatePath, "utf-8");
  const template = handlebars.compile(templateContent);

  return template(data);
}
