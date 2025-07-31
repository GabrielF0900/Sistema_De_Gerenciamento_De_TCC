# Instruções para aplicar a migração do banco de dados

## ⚠️ IMPORTANTE: Backup dos dados
Antes de executar a migração, certifique-se de fazer backup dos seus dados, pois a alteração de `nome` e `sobrenome` para `nomeCompleto` pode resultar em perda de dados.

## Passos para aplicar a migração:

### 1. Certifique-se de que o PostgreSQL está rodando
Se você estiver usando Docker, execute:
```bash
docker run --name postgres-tcc -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=meu_banco -p 5432:5432 -d postgres:16
```

### 2. Execute a migração
No diretório Backend, execute:
```bash
npx prisma migrate dev --name alterar_nome_sobrenome_para_nome_completo
```

### 3. Se você já tem dados na tabela Usuario
Você precisará migrar os dados existentes. Execute este SQL no seu banco ANTES da migração:

```sql
-- Adicione a coluna nomeCompleto temporariamente
ALTER TABLE "Usuario" ADD COLUMN "nomeCompleto_temp" TEXT;

-- Migre os dados existentes
UPDATE "Usuario" SET "nomeCompleto_temp" = CONCAT(nome, ' ', sobrenome);

-- Agora execute a migração do Prisma
-- Depois, copie os dados de volta:
UPDATE "Usuario" SET "nomeCompleto" = "nomeCompleto_temp";

-- Remova a coluna temporária
ALTER TABLE "Usuario" DROP COLUMN "nomeCompleto_temp";
```

### 4. Alternativa: Reset completo (perda de dados)
Se você não precisar manter os dados existentes:
```bash
npx prisma migrate reset --force
```

## O que foi alterado:

### Schema Prisma (✅ Concluído)
- `nome` e `sobrenome` foram substituídos por `nomeCompleto` no model Usuario

### Código TypeScript (✅ Concluído)
- Atualizado `listar.ts` para usar `nomeCompleto` em vez de `nome` e `sobrenome`

### Ainda precisa fazer:
- [ ] Executar a migração no banco de dados
- [ ] Verificar e atualizar outros arquivos que possam usar `nome` e `sobrenome`
