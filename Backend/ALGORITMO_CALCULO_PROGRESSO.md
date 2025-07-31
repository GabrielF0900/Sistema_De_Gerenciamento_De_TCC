# Algoritmo de Cálculo de Progresso do TCC

## 📋 Índice
- [Visão Geral](#visão-geral)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Os Quatro Pilares](#os-quatro-pilares)
- [Implementação Técnica](#implementação-técnica)
- [Exemplos Práticos](#exemplos-práticos)
- [API Endpoints](#api-endpoints)
- [Configuração e Personalização](#configuração-e-personalização)
- [Casos de Uso](#casos-de-uso)

---

## 📊 Visão Geral

O cálculo de progresso do TCC é realizado de forma automatizada e transparente, considerando quatro pilares principais: tarefas, etapas, reuniões e defesas. Cada pilar possui um peso específico e contribui para o progresso total do TCC, que é apresentado em porcentagem de 0% a 100%.

---

## 🏗️ Arquitetura do Sistema

### Distribuição de Pesos
```
Progresso Total = Σ(Pilar × Peso)
```

| Pilar                | Peso | Justificativa                                 |
|----------------------|------|-----------------------------------------------|
| Tarefas/Atividades   | 30%  | Trabalho prático e operacional                |
| Etapas do Projeto    | 30%  | Marcos estruturais/metodológicos              |
| Reuniões             | 20%  | Acompanhamento orientativo                    |
| Defesas              | 20%  | Avaliações formais (pré-banca e banca final)  |

---

## 🎯 Os Quatro Pilares

### 1️⃣ Tarefas e Atividades (30%)
- Progresso calculado por: `(tarefas concluídas / total de tarefas) × 30%`
- Status considerado: `CONCLUIDA`
- Retorna 0% se não há tarefas cadastradas

### 2️⃣ Etapas do Projeto (30%)
- Progresso calculado por: `(etapas concluídas / total de etapas) × 30%`
- Status considerado: `CONCLUIDA`
- Retorna 0% se não há etapas cadastradas

### 3️⃣ Reuniões (20%)
- Progresso calculado por: `(reuniões realizadas / reuniões agendadas) × 20%`
- Status considerado: `REALIZADA`
- Retorna 0% se não há reuniões agendadas

### 4️⃣ Defesas (20%)
- Progresso binário: 10% para pré-banca realizada, 10% para banca final realizada
- Status considerado: `REALIZADA`
- Tipos: `PRE_BANCA` e `BANCA_FINAL`

---

## 💻 Implementação Técnica

### Estrutura de Dados
```typescript
export interface CalculateProgress {
  progresso_tarefas: number; // Progresso das tarefas (30%)
  progresso_etapas: number; // Progresso das etapas (30%)
  progresso_reunioes: number; // Progresso das reuniões (20%)
  progresso_defesas: number; // Progresso das defesas (20% = 10% pré-banca + 10% banca final)
  progresso_total: number; // Progresso total (soma dos componentes)
}
```

### Constantes
```typescript
const PESO_TAREFAS = 30;
const PESO_ETAPAS = 30;
const PESO_REUNIOES = 20;
const PESO_DEFESAS = 20;
```

### Função Principal
```typescript
export function calculateCompleteProgress(tcc: TCCProgress): CalculateProgress {
  const progresso_tarefas = calculateTasksProgress(tcc);
  const progresso_etapas = calculateStagesProgress(tcc);
  const progresso_reunioes = calculateMeetingsProgress(tcc);
  const progresso_defesas = calculateDefensesProgress(tcc);

  const progresso_total =
    progresso_tarefas +
    progresso_etapas +
    progresso_reunioes +
    progresso_defesas;

  return {
    progresso_tarefas,
    progresso_etapas,
    progresso_reunioes,
    progresso_defesas,
    progresso_total,
  };
}
```

### Funções Auxiliares
- `calculateTasksProgress`: calcula progresso das tarefas
- `calculateStagesProgress`: calcula progresso das etapas
- `calculateMeetingsProgress`: calcula progresso das reuniões
- `calculateDefensesProgress`: calcula progresso das defesas

---

## 📈 Exemplos Práticos

### Exemplo 1: TCC em Desenvolvimento Inicial
- Tarefas: 2 concluídas de 10
- Etapas: 1 concluída de 5
- Reuniões: 1 realizada de 2
- Defesas: Nenhuma realizada

**Cálculo:**
```
Tarefas: (2/10) × 30% = 6%
Etapas: (1/5) × 30% = 6%
Reuniões: (1/2) × 20% = 10%
Defesas: 0 × 20% = 0%
Progresso Total: 6% + 6% + 10% + 0% = 22%
```

### Exemplo 2: TCC Avançado
- Tarefas: 8 concluídas de 10
- Etapas: 4 concluídas de 5
- Reuniões: 5 realizadas de 6
- Defesas: Pré-banca realizada

**Cálculo:**
```
Tarefas: (8/10) × 30% = 24%
Etapas: (4/5) × 30% = 24%
Reuniões: (5/6) × 20% = 16.67%
Defesas: 1 × 10% = 10%
Progresso Total: 24% + 24% + 16.67% + 10% = 74.67%
```

### Exemplo 3: TCC Concluído
- Tarefas: 10 concluídas de 10
- Etapas: 5 concluídas de 5
- Reuniões: 8 realizadas de 8
- Defesas: Ambas realizadas

**Cálculo:**
```
Tarefas: (10/10) × 30% = 30%
Etapas: (5/5) × 30% = 30%
Reuniões: (8/8) × 20% = 20%
Defesas: (1+1) × 10% = 20%
Progresso Total: 30% + 30% + 20% + 20% = 100%
```

---

## 🚀 API Endpoints

### Calcular Progresso de TCC Específico
```http
GET /api/progress/tcc/:tccId
Authorization: Bearer {token}
```
**Resposta:**
```json
{
  "id": 1,
  "titulo": "Sistema de IA para Diagnóstico",
  "progresso": {
    "total": 74,
    "status": "Em Andamento",
    "detalhamento": {
      "tarefas": {
        "pontuacao": 24,
        "peso": 30,
        "total": 10,
        "concluidas": 8
      },
      "etapas": {
        "pontuacao": 24,
        "peso": 30,
        "total": 5,
        "concluidas": 4
      },
      "reunioes": {
        "pontuacao": 16,
        "peso": 20,
        "agendadas": 6,
        "realizadas": 5
      },
      "defesas": {
        "pontuacao": 10,
        "peso": 20,
        "preBanca": true,
        "bancaFinal": false
      }
    }
  }
}
```

---

## ⚙️ Configuração e Personalização

### Ajuste de Pesos
```typescript
const PESO_TAREFAS = 30;
const PESO_ETAPAS = 30;
const PESO_REUNIOES = 20;
const PESO_DEFESAS = 20;
// Total deve sempre somar 100%
```

### Status do Progresso
```typescript
export function calculateProgressStatus(progresso_total: number): string {
  if (progresso_total === 100) return "Concluído";
  if (progresso_total > 0) return "Em Andamento";
  return "Não Iniciado";
}
```

---

## 🎯 Casos de Uso
- Estudantes: acompanhamento do progresso, planejamento de atividades, motivação.
- Orientadores: gestão de orientandos, identificação de dificuldades, relatórios.
- Coordenadores: visão institucional, análise de gargalos, qualidade acadêmica.

---

## 🔧 Manutenção e Evolução
- Logs detalhados para monitoramento
- Tratamento de erros robusto
- Extensibilidade para novos pilares ou ajustes de regras

---

## 📚 Referências e Considerações
- Baseado em princípios de avaliação formativa, metodologia de projetos e acompanhamento acadêmico.
- Sistema quantitativo, flexível e transparente.

---

## 📝 Conclusão

O cálculo de progresso do TCC é automatizado, transparente e ajustável, refletindo fielmente o desenvolvimento acadêmico do estudante. O sistema é extensível e pode ser adaptado conforme necessidades institucionais.

**Versão**: 1.1  
**Data**: Julho 2025  
**Autores**: Equipe de Desenvolvimento Sistema TCC  
**Licença**: Uso Acadêmico
