# Sistema de Gerenciamento de TCC - API

## Autenticação e Cadastro

### 1. Registrar um novo usuário

```http
POST /api/public/registrar
Content-Type: application/json

{
  "nomeCompleto": "João Silva Santos",
  "instituicao": "Universidade Federal de Tecnologia",
  "curso": "Sistemas de Informação",
  "email": "joao.silva@email.com",
  "confirmEmail": "joao.silva@email.com",
  "senha": "123456",
  "confirmSenha": "123456"
}
```

### 2. Registrar um professor (formato antigo - ainda funciona)

```http
POST /api/public/registrar
Content-Type: application/json

{
  "nome": "Maria",
  "sobrenome": "Santos",
  "email": "maria.santos@email.com", 
  "senha": "123456",
  "tipo": "professor",
  "area_atuacao": "Inteligência Artificial",
  "disponibilidade": true
}
```

### 3. Fazer login

```http
POST /api/public/login
Content-Type: application/json

{
  "email": "joao.silva@email.com",
  "senha": "123456"
}
```
Retorna um token JWT que deve ser usado nas requisições privadas.

## APIs Privadas (Requerem Token JWT)

### 4. Listar alunos (para obter IDs)
```http
GET /api/private/alunos
Authorization: Bearer SEU_TOKEN_JWT
```

### 5. Listar professores disponíveis (para obter IDs)
```http
GET /api/private/professores/disponiveis
Authorization: Bearer SEU_TOKEN_JWT
```

### 6. Cadastrar TCC

```http
POST /api/private/cadastrar-tcc
Authorization: Bearer SEU_TOKEN_JWT
Content-Type: application/json

{
  "titulo": "Sistema de Inteligência Artificial para Análise de Dados",
  "tema": "Inteligência Artificial aplicada à análise de grandes volumes de dados",
  "curso": "Ciência da Computação",
  "orientador": "Prof. Dr. João da Silva",
  "coorientador": "Dra. Maria Santos",
  "resumo": "Este trabalho propõe o desenvolvimento de um sistema de IA capaz de analisar grandes volumes de dados e extrair insights relevantes para tomada de decisões empresariais.",
  "dataInicio": "2025-02-01",
  "dataConclusao": "2025-11-30",
  "statusAtual": "PLANEJAMENTO"
}
```

**Campos obrigatórios:**
- `titulo`: Título do TCC
- `tema`: Tema do TCC
- `curso`: Curso do aluno (deve coincidir com o curso cadastrado)
- `resumo`: Resumo do trabalho
- `dataInicio`: Data de início (formato YYYY-MM-DD)
- `dataConclusao`: Data de conclusão prevista (formato YYYY-MM-DD)
- `statusAtual`: Status do TCC

**Campos opcionais:**
- `orientador`: Nome do orientador (aceita qualquer texto)
- `coorientador`: Nome do coorientador (aceita qualquer texto)

**Observações importantes:**
- O sistema identifica automaticamente o aluno através do token JWT
- Os nomes dos orientadores são salvos como texto livre (não busca no banco)
- O curso informado deve coincidir com o curso do aluno logado
- A data de conclusão deve ser posterior à data de início
- Não há validação dos nomes dos professores por enquanto

### 7. Listar todos os TCCs
```http
GET /api/private/tccs
Authorization: Bearer SEU_TOKEN_JWT
```

### 8. Buscar professores por nome (útil para autocompletar)
```http
GET /api/private/professores/buscar?nome=Maria
Authorization: Bearer SEU_TOKEN_JWT
```

### 9. Buscar TCC por ID
```http
GET /api/private/tccs/1
Authorization: Bearer SEU_TOKEN_JWT
```

## Status de TCC Válidos
- `PLANEJAMENTO` (padrão)
- `DESENVOLVIMENTO`
- `REVISAO`
- `FINALIZACAO`
- `CONCLUIDO`

## Validações do Sistema

1. **Email único**: Cada email pode ser usado apenas uma vez
2. **TCC único por aluno**: Cada aluno pode ter apenas um TCC
3. **Validação de IDs**: Aluno, orientador e coorientador devem existir no banco
4. **Status válido**: Apenas os status listados são aceitos
5. **Campos obrigatórios**: titulo, tema, resumo e alunoId são obrigatórios

## Estrutura de Resposta

### Sucesso:
```json
{
  "message": "TCC cadastrado com sucesso.",
  "success": true,
  "tcc": {
    "id": 1,
    "titulo": "...",
    "tema": "...",
    "resumo": "...",
    "status_atual": "PLANEJAMENTO",
    "criado_em": "2025-01-07T...",
    "ultima_atualizacao": "2025-01-07T...",
    "aluno": {
      "id": 1,
      "curso": "Ciência da Computação",
      "usuario": {
        "nome": "João",
        "sobrenome": "Silva",
        "email": "joao.silva@email.com"
      }
    },
    "orientador": {
      "id": 1,
      "area_atuacao": "Inteligência Artificial",
      "usuario": {
        "nome": "Maria",
        "sobrenome": "Santos",
        "email": "maria.santos@email.com"
      }
    }
  }
}
```

### Erro:
```json
{
  "message": "Descrição do erro",
  "success": false
}
```
