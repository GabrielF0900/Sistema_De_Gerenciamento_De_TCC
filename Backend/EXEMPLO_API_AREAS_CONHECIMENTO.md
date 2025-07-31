# 📋 API de Áreas de Conhecimento - Exemplos de Uso

## 📌 Endpoints Disponíveis

### 1. **Listar todas as áreas de conhecimento**
```http
GET /api/public/areas-conhecimento
```

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "146 áreas de conhecimento encontradas",
  "data": [
    {
      "id": 1,
      "nome": "Administração"
    },
    {
      "id": 2,
      "nome": "Agronomia"
    },
    {
      "id": 3,
      "nome": "Análise de Dados"
    },
    // ... mais 143 áreas
  ]
}
```

### 2. **Buscar área específica por ID**
```http
GET /api/public/areas-conhecimento/3
```

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Área de conhecimento encontrada",
  "data": {
    "id": 3,
    "nome": "Análise de Dados",
    "quantidadeTccs": 5
  }
}
```

---

## 🚀 **Cadastro de TCC com Área de Conhecimento**

### **Endpoint:**
```http
POST /api/private/cadastrar-tcc
Authorization: Bearer <token>
```

### **Corpo da Requisição (ATUALIZADO):**
```json
{
  "titulo": "Desenvolvimento de Sistema de Gestão de TCCs",
  "tema": "Sistema web para gerenciamento de trabalhos de conclusão de curso",
  "curso": "Ciência da Computação",
  "resumo": "Este trabalho tem como objetivo desenvolver um sistema web completo para gerenciamento de TCCs, incluindo cadastro de alunos, professores e acompanhamento do progresso dos trabalhos.",
  "dataInicio": "2025-01-15",
  "dataConclusao": "2025-12-15",
  "statusAtual": "PLANEJAMENTO",
  "orientador": "Prof. Dr. João Silva",
  "coorientador": "Prof. Dra. Maria Santos",
  "areaConhecimentoId": 3
}
```

### **Resposta de Sucesso (201):**
```json
{
  "message": "TCC cadastrado com sucesso.",
  "success": true,
  "tcc": {
    "id": 1,
    "titulo": "Desenvolvimento de Sistema de Gestão de TCCs",
    "tema": "Sistema web para gerenciamento de trabalhos de conclusão de curso",
    "resumo": "Este trabalho tem como objetivo desenvolver um sistema web completo...",
    "dataInicio": "2025-01-15T00:00:00.000Z",
    "dataConclusao": "2025-12-15T00:00:00.000Z",
    "orientador_nome": "Prof. Dr. João Silva",
    "coorientador_nome": "Prof. Dra. Maria Santos",
    "criado_em": "2025-07-07T12:30:00.000Z",
    "ultima_atualizacao": "2025-07-07T12:30:00.000Z",
    "status_atual": "PLANEJAMENTO",
    "alunoId": 1,
    "orientadorId": null,
    "coorientadorId": null,
    "areaConhecimentoId": 3,
    "aluno": {
      "id": 1,
      "curso": "Ciência da Computação",
      "usuario": {
        "nome": "Gabriel",
        "sobrenome": "Silva",
        "email": "gabriel@email.com"
      }
    },
    "orientador": null,
    "coorientador": null,
    "areaConhecimento": {
      "id": 3,
      "nome": "Análise de Dados"
    }
  }
}
```

---

## 🎯 **Como Implementar no Frontend**

### **1. Buscar áreas para dropdown/select:**
```javascript
// Exemplo em JavaScript/React
const buscarAreas = async () => {
  try {
    const response = await fetch('/api/public/areas-conhecimento');
    const data = await response.json();
    
    if (data.success) {
      setAreas(data.data); // Atualizar estado com as áreas
    }
  } catch (error) {
    console.error('Erro ao buscar áreas:', error);
  }
};

// Componente select
<select name="areaConhecimentoId" required>
  <option value="">Selecione uma área de conhecimento</option>
  {areas.map(area => (
    <option key={area.id} value={area.id}>
      {area.nome}
    </option>
  ))}
</select>
```

### **2. Enviar dados do TCC com área:**
```javascript
const cadastrarTCC = async (dadosTCC) => {
  try {
    const response = await fetch('/api/private/cadastrar-tcc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        ...dadosTCC,
        areaConhecimentoId: parseInt(dadosTCC.areaConhecimentoId)
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('TCC cadastrado com sucesso!');
      console.log('Área selecionada:', data.tcc.areaConhecimento.nome);
    }
  } catch (error) {
    console.error('Erro ao cadastrar TCC:', error);
  }
};
```

---

## ✅ **Validações Implementadas**

1. **Área de conhecimento opcional**: Se não for fornecida, o TCC será cadastrado sem área
2. **Validação de ID**: Verifica se a área existe antes de salvar
3. **Resposta completa**: Retorna os dados da área junto com o TCC cadastrado
4. **Ordenação alfabética**: As áreas são listadas em ordem alfabética

---

## 📋 **Algumas Áreas Disponíveis:**

- Administração
- Análise de Dados
- Arquitetura e Urbanismo
- Ciência da Computação
- Direito
- Engenharia Civil
- Engenharia de Software
- Inteligência Artificial
- Medicina
- Psicologia
- UX/UI Design
- E muitas outras... (146 no total!)
