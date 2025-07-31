
---

```markdown
# 🎓 Sistema de Gerenciamento de TCC

Plataforma completa para gerenciamento de Trabalhos de Conclusão de Curso (TCC), com foco em organização, transparência e automação de tarefas entre alunos, orientadores e bancas.

---

## 📁 Estrutura do Projeto

```

Sistema\_De\_Gerenciamento\_De\_TCC/
├── Backend/
│   ├── prisma/                     # Schema, migrations e seed do Prisma
│   ├── src/                        # Código-fonte principal (controllers, routes, services etc.)
│   ├── templates/                 # Templates de e-mail ou mensagens
│   ├── .env.example                # Exemplo de variáveis de ambiente
│   ├── Dockerfile.backend          # Dockerfile do backend
│   ├── Dockerfile.postgres         # Dockerfile para serviço PostgreSQL
│   ├── *.md                        # Documentações técnicas (uso de API, exemplos, conflitos, progresso)
│   ├── package.json                # Dependências e scripts do backend
│   └── tsconfig.json               # Configuração TypeScript do backend
│
├── Frontend/
│   ├── public/                     # Arquivos públicos (favicon, etc.)
│   ├── src/                        # Código-fonte React (componentes, pages, etc.)
│   ├── .env.example                # Exemplo de variáveis de ambiente
│   ├── index.html                  # Página principal
│   ├── vite.config.ts              # Configuração do Vite
│   ├── tailwind.config.js          # Configuração do Tailwind CSS
│   ├── tsconfig.*.json             # Configurações TypeScript separadas
│   ├── \*.md                        # Documentações de integração e testes
│   └── package.json                # Dependências e scripts do frontend
│
├── docker-compose.yml              # Orquestração dos serviços
├── README.md                       # Este arquivo

````

---

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js + TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Express**
- **JWT para autenticação**
- **SendGrid (e-mail)**
- **Docker**

### Frontend
- **React + TypeScript**
- **Vite (bundler)**
- **Tailwind CSS**
- **Axios (requisições HTTP)**
- **ESLint/Prettier**
- **Docker**

---

## ⚙ Como Executar Localmente

### 🔧 Pré-requisitos

- [Node.js LTS](https://nodejs.org)
- npm (vem com o Node.js)
- Docker + Docker Compose (opcional, mas recomendado)
- Git

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Sistema_De_Gerenciamento_De_TCC.git
cd Sistema_De_Gerenciamento_De_TCC
````

---

### 2️⃣ Instalar dependências

```bash
# Frontend
cd Frontend
npm install

# Backend
cd ../Backend
npm install
```

---

### 3️⃣ Configurar variáveis de ambiente

#### Backend `.env`

Baseado no `.env.example`:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/meu_banco
PORT=3000
NODE_ENV=development
JWT_SECRET=sua_chave_jwt
SENDGRID_API_KEY=sua_chave_sendgrid
CLIENT_URL=http://localhost:5173
```

#### Frontend `.env`

```env
VITE_API_URL=http://localhost:3000/api/
```

---

### 4️⃣ Rodar o Prisma

```bash
cd Backend
npx prisma generate
npx prisma migrate dev --name initial_setup
npx tsx prisma/seed.ts
```

---

### 5️⃣ Iniciar os servidores

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
cd ../Frontend
npm run dev
```

---

## 🐳 Executar com Docker (Recomendado)

Na raiz do projeto:

```bash
docker-compose build
docker-compose up
```

> O arquivo `docker-compose.yml` irá orquestrar:
>
> * PostgreSQL
> * Backend (Node/Express)
> * Frontend (React/Vite)

---

## 📚 Documentação adicional

Você pode encontrar documentação e exemplos dentro das seguintes pastas:

### Backend:

* `EXEMPLO_USO_API.md`
* `EXEMPLOS_JSON_INSONMIA.md`
* `ALGORITMO_CALCULO_PROGRESSO.md`
* `MIGRACAO_NOME_COMPLETO.md`
* `RESOLUCAO_CONFLITOS.md`

### Frontend:

* `INTEGRACAO_FRONTEND.md`
* `CORRECAO_REGISTRO.md`
* `TESTE_INTEGRACAO.md`
* `RESOLUCAO_ERRO_JSON.md`

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch com sua funcionalidade:

   ```bash
   git checkout -b feature/minha-feature
   ```
3. Commit:

   ```bash
   git commit -m "feat: minha nova funcionalidade"
   ```
4. Push:

   ```bash
   git push origin feature/minha-feature
   ```
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a Licença MIT.

---

Feito com 💙 por **Neukox**.

```

---
