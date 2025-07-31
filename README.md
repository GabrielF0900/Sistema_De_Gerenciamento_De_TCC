Claro! Aqui está o **README.md** atualizado, bem estruturado, com base no que você escreveu e nas imagens das pastas `Backend` e `Frontend`:

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
| Framework | React       | Biblioteca reativa para construção de UI       |
| Bundler   | Vite        | Ferramenta de build rápida e moderna           |
| Estilo    | TailwindCSS | Utilitário CSS para estilização                |
| Linter    | ESLint      | Padronização e qualidade de código             |
| Container | Docker      | Isolamento e orquestração de ambientes         |

---

## 📂 Estrutura do Projeto

```bash
.
├── backend/
│   ├── prisma/                        # Schema, migrations e seed do banco
│   ├── src/                           # Código-fonte da API
│   ├── templates/                     # Templates de e-mail
│   ├── .env.example                   # Exemplo de variáveis de ambiente
│   ├── Dockerfile.backend             # Dockerfile da API
│   ├── Dockerfile.postgres            # Dockerfile do banco de dados
│   ├── diversos arquivos .md          # Exemplos, algoritmos e documentação
│   ├── package.json                   # Dependências e scripts
│   └── tsconfig.json                  # Configuração TypeScript
│
├── frontend/
│   ├── public/                        # Assets públicos
│   ├── src/                           # Código-fonte React
│   ├── .env.example                   # Exemplo de variáveis de ambiente
│   ├── README.md                      # Documentação do Frontend
│   ├── tailwind.config.js            # Configuração do Tailwind
│   ├── vite.config.ts                # Configuração do Vite
│   └── tsconfig.*.json               # Configurações TS específicas
│
├── docker-compose.yml                # Orquestração dos serviços
└── README.md                         # Este arquivo
````

---

## ⚙ Como Executar Localmente

### 🔧 Pré-requisitos

* [Node.js (versão LTS)](https://nodejs.org)
* npm (ou yarn)
* Git
* Docker & Docker Compose (opcional, mas recomendado)

---

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/Sistema_De_Gerenciamento_De_TCC.git
cd Sistema_De_Gerenciamento_De_TCC
```

---

### 2️⃣ Instalar as Dependências

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

---

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` em **backend/** e outro em **frontend/** com base nos respectivos `.env.example`.

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

### 4️⃣ Rodar Prisma

No diretório `backend`:

```bash
npx prisma generate
npx prisma migrate dev --name initial_setup
npx tsx prisma/seed.ts
```

---

### 5️⃣ Iniciar os Servidores

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

---

## 🐳 Executar com Docker

Na raiz do projeto:

```bash
docker-compose build
docker-compose up
```

> Isso irá subir automaticamente o banco de dados, a API e a interface web.

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma nova branch:

```bash
git checkout -b feature/nova-funcionalidade
```

3. Faça commits claros e objetivos:

```bash
git commit -m "feat: adiciona nova funcionalidade"
```

4. Envie para seu fork:

```bash
git push origin feature/nova-funcionalidade
```

5. Crie um Pull Request 🚀

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

Feito com 💙 pela equipe **Neukox**.

```

Se quiser, posso salvar isso como um novo `README.md` diretamente ou ajustar ainda mais o conteúdo. Deseja?
```
