

* Explicação sobre instalação do frontend/backend
* Rodar `npx prisma generate`, `migrate dev`, `seed.ts`
* Uso dos arquivos `.env.example`
* Execução com Docker
* Atualização das tecnologias (React no frontend)

---

````markdown
# 🎓 Sistema de Gerenciamento de TCC

Bem-vindo(a)! Este projeto foi cuidadosamente desenvolvido para simplificar e otimizar o processo de acompanhamento e avaliação de Trabalhos de Conclusão de Curso. A missão é facilitar a jornada de alunos, orientadores e bancas, promovendo organização, transparência e eficiência.

---

## ✨ Visão Geral

Imagine uma plataforma onde cada etapa do TCC — da submissão do tema à defesa final — é centralizada e gerenciada com facilidade. É exatamente isso que estamos construindo: um sistema robusto, intuitivo e modular para instituições de ensino.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend

| Categoria | Tecnologia | Descrição                             |
| --------- | ---------- | ------------------------------------- |
| Linguagem | TypeScript | JavaScript com tipagem estática       |
| Framework | Node.js    | Ambiente de execução JavaScript       |
| ORM       | Prisma     | Mapeamento objeto-relacional moderno  |
| Container | Docker     | Isolamento e orquestração de ambientes|

### 🎨 Frontend

| Categoria | Tecnologia  | Descrição                                      |
| --------- | ----------- | ---------------------------------------------- |
| Linguagem | TypeScript  | JavaScript com tipagem estática                |
| Framework | React       | Framework reativo para construção de UI        |
| Bundler   | Vite        | Ferramenta de build rápida e eficiente         |
| Linter    | ESLint      | Garantia de qualidade e padronização de código |
| Container | Docker      | Isolamento e orquestração de ambientes         |

---

## 📂 Estrutura do Projeto

```bash
.
├── backend/
│   ├── prisma/              # Migrations, schema e seed do Prisma
│   ├── src/                 # Código-fonte da API
│   ├── Dockerfile           # Build do backend com Docker
│   ├── .env.example         # Exemplo de variáveis de ambiente
│   └── package.json         # Dependências e scripts do projeto
├── frontend/
│   ├── public/              # Arquivos públicos (favicon, imagens)
│   ├── src/                 # Código-fonte da interface
│   ├── Dockerfile           # Build do frontend com Docker
│   ├── .env.example         # Exemplo de variáveis de ambiente
│   └── package.json         # Dependências e scripts da interface
├── docker-compose.yml       # Orquestração dos serviços com Docker
````

---

## ⚙ Como Executar Localmente

### 🔧 Pré-requisitos

* [Node.js (versão LTS)](https://nodejs.org)
* npm (vem com o Node.js)
* Git
* Docker & Docker Compose (opcional, mas recomendado)

---

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Sistema_De_Gerenciamento_De_TCC.git
cd Sistema_De_Gerenciamento_De_TCC
```

---

### 2️⃣ Instalar dependências

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

---

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` em cada pasta com base no `.env.example`.

#### 📁 backend/.env

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/meu_banco
PORT=3000
NODE_ENV=development
JWT_SECRET=sua_chave_jwt
SENDGRID_API_KEY=sua_chave_sendgrid
CLIENT_URL=http://localhost:5173
```

#### 📁 frontend/.env

```env
VITE_API_URL=http://localhost:3000/api/
```

---

### 4️⃣ Executar o Prisma

No diretório `backend`:

```bash
npx prisma generate
npx prisma migrate dev --name initial_setup
npx tsx prisma/seed.ts
```

---

### 5️⃣ Iniciar os servidores

#### Backend:

```bash
cd backend
npm run dev
```

#### Frontend:

```bash
cd frontend
npm run dev
```

---

## 🐳 Executar com Docker

1. Na raiz do projeto, execute:

```bash
docker-compose build
docker-compose up
```

> Isso irá subir automaticamente o banco de dados, backend e frontend.

---

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma nova branch:

```bash
git checkout -b feature/minha-feature
```

3. Commit suas alterações:

```bash
git commit -m "feat: minha nova funcionalidade"
```

4. Envie para seu repositório remoto:

```bash
git push origin feature/minha-feature
```

5. Abra um *Pull Request* ✨

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.

---

Feito com ❤ pela equipe **Neukox**.

```

---

Se quiser, posso também te gerar um `docker-compose.yml` pronto para esse projeto com PostgreSQL + backend + frontend rodando em rede. Deseja isso agora?
```
