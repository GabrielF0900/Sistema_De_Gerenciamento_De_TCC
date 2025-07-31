# 🧪 Exemplos de JSON para Testes no Insomnia

## 📋 **Configuração no Insomnia**

### **1. Endpoint para Cadastro de TCC:**
```
POST {{base_url}}/api/private/cadastrar-tcc
```

### **2. Headers necessários:**
```
Authorization: Bearer {{token}}
Content-Type: application/json
```

---

## 🎯 **Exemplos de JSON para Cadastro de TCC**

### **Exemplo 1: TCC de Ciência da Computação**
```json
{
  "titulo": "Desenvolvimento de Sistema Web para Gerenciamento de TCCs usando React e Node.js",
  "tema": "Sistema de gestão acadêmica para trabalhos de conclusão de curso",
  "curso": "Ciência da Computação",
  "resumo": "Este trabalho tem como objetivo desenvolver um sistema web completo para gerenciamento de trabalhos de conclusão de curso (TCCs), utilizando tecnologias modernas como React no frontend e Node.js com TypeScript no backend. O sistema permitirá o cadastro de alunos, professores, orientadores e o acompanhamento do progresso dos trabalhos acadêmicos.",
  "dataInicio": "2025-02-01",
  "dataConclusao": "2025-11-30",
  "statusAtual": "PLANEJAMENTO",
  "orientador": "Prof. Dr. João Silva Santos",
  "coorientador": "Prof. Dra. Maria Aparecida Costa",
  "areaConhecimentoId": 9
}
```

### **Exemplo 2: TCC de Administração**
```json
{
  "titulo": "Análise do Impacto da Transformação Digital nas Pequenas e Médias Empresas",
  "tema": "Transformação digital e gestão empresarial",
  "curso": "Administração",
  "resumo": "Esta pesquisa visa analisar como a transformação digital tem impactado as pequenas e médias empresas no Brasil, identificando desafios, oportunidades e estratégias adotadas para se adaptarem às novas tecnologias. O estudo incluirá pesquisa de campo com empresários locais.",
  "dataInicio": "2025-03-15",
  "dataConclusao": "2025-12-10",
  "statusAtual": "DESENVOLVIMENTO",
  "orientador": "Prof. Dr. Carlos Eduardo Mendes",
  "areaConhecimentoId": 71
}
```

### **Exemplo 3: TCC de Medicina**
```json
{
  "titulo": "Estudo Epidemiológico sobre Diabetes Tipo 2 em Pacientes Idosos",
  "tema": "Diabetes e envelhecimento populacional",
  "curso": "Medicina",
  "resumo": "Análise retrospectiva dos casos de diabetes tipo 2 em pacientes idosos atendidos no Hospital Universitário, com foco nos fatores de risco, complicações e protocolos de tratamento. O estudo busca contribuir para melhorias no atendimento geriátrico.",
  "dataInicio": "2025-01-20",
  "dataConclusao": "2025-10-15",
  "statusAtual": "REVISAO",
  "orientador": "Prof. Dra. Ana Paula Rodrigues",
  "coorientador": "Dr. Roberto Silva Lima",
  "areaConhecimentoId": 47
}
```

### **Exemplo 4: TCC de Engenharia Civil**
```json
{
  "titulo": "Análise da Sustentabilidade em Construções Residenciais de Baixo Custo",
  "tema": "Sustentabilidade na construção civil",
  "curso": "Engenharia Civil",
  "resumo": "Estudo sobre a implementação de práticas sustentáveis em construções residenciais de baixo custo, avaliando materiais alternativos, eficiência energética e redução de resíduos. O trabalho propõe soluções viáveis para habitação popular sustentável.",
  "dataInicio": "2025-02-10",
  "dataConclusao": "2025-11-20",
  "statusAtual": "PLANEJAMENTO",
  "orientador": "Prof. Dr. Fernando Oliveira Santos",
  "areaConhecimentoId": 26
}
```

### **Exemplo 5: TCC sem Coorientador**
```json
{
  "titulo": "Desenvolvimento de Aplicativo Mobile para Controle Financeiro Pessoal",
  "tema": "Tecnologia financeira e aplicações móveis",
  "curso": "Sistemas de Informação",
  "resumo": "Criação de um aplicativo mobile multiplataforma para controle financeiro pessoal, utilizando React Native e integração com APIs bancárias. O app incluirá funcionalidades de categorização de gastos, metas financeiras e relatórios detalhados.",
  "dataInicio": "2025-03-01",
  "dataConclusao": "2025-12-01",
  "statusAtual": "DESENVOLVIMENTO",
  "orientador": "Prof. MSc. Lucas Pereira Alves",
  "areaConhecimentoId": 135
}
```

### **Exemplo 6: TCC sem Área de Conhecimento**
```json
{
  "titulo": "Estudo Comparativo de Metodologias Ágeis em Projetos de Software",
  "tema": "Metodologias de desenvolvimento de software",
  "curso": "Engenharia de Software",
  "resumo": "Análise comparativa entre as principais metodologias ágeis utilizadas no desenvolvimento de software, incluindo Scrum, Kanban e XP. O estudo será baseado em casos reais de empresas de tecnologia da região.",
  "dataInicio": "2025-02-15",
  "dataConclusao": "2025-11-15",
  "statusAtual": "PLANEJAMENTO",
  "orientador": "Prof. Dr. Gabriel Santos Oliveira"
}
```

---

## 🔧 **Status Válidos:**
- `PLANEJAMENTO`
- `DESENVOLVIMENTO`
- `REVISAO`
- `FINALIZACAO`
- `CONCLUIDO`

---

## 📋 **IDs de Algumas Áreas de Conhecimento:**

| ID | Área de Conhecimento |
|----|---------------------|
| 1  | Matemática |
| 9  | Ciência da Computação |
| 26 | Engenharia Civil |
| 47 | Medicina |
| 71 | Administração |
| 89 | Direito |
| 135| Sistemas de Informação |

**💡 Dica:** Para ver todas as áreas disponíveis, faça uma requisição GET para:
```
GET {{base_url}}/api/public/areas-conhecimento
```

---

## ⚠️ **Campos Obrigatórios:**
- `titulo`
- `tema`
- `curso`
- `resumo`
- `dataInicio`
- `dataConclusao`
- `statusAtual`

## 📝 **Campos Opcionais:**
- `orientador`
- `coorientador`
- `areaConhecimentoId`

---

## 🚀 **Como Usar no Insomnia:**

1. **Crie uma nova requisição POST**
2. **Cole a URL:** `{{base_url}}/api/private/cadastrar-tcc`
3. **Adicione o header de autorização:** `Authorization: Bearer {{token}}`
4. **Cole um dos exemplos de JSON acima no body**
5. **Execute a requisição** ✨
