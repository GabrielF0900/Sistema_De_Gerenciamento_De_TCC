export function parsePrazo(prazo: string): Date {
  const [dia, mes, ano] = prazo.split("-");
  return new Date(`${ano}-${mes}-${dia}T23:59:59`);
}
