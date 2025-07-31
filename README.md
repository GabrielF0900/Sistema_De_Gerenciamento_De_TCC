
````
# 🎓 Sistema de Gerenciamento de TCC

Bem-vindo(a)! Este projeto foi cuidadosamente desenvolvido para simplificar e otimizar o processo de acompanhamento e avaliação de Trabalhos de Conclusão de Curso. A missão é facilitar a jornada de alunos, orientadores e bancas, promovendo organização, transparência e eficiência.

---

## ✨ Visão Geral

Imagine uma plataforma onde cada etapa do TCC — da submissão do tema à defesa final — é centralizada e gerenciada com facilidade. É exatamente isso que estamos construindo: um sistema robusto, intuitivo e modular para instituições de ensino.

---

## 🚀 Tecnologias Utilizadas

### 🔧 Backend

| Categoria | Tecnologia | Descrição                             |
| --------- | ---------- | ----------------------------------- |
| Linguagem | TypeScript | JavaScript com tipagem estática     |
| Framework | Node.js    | Ambiente de execução JavaScript     |
| ORM       | Prisma     | Mapeamento objeto-relacional moderno|
| Container | Docker     | Isolamento e orquestração de ambientes |

### 🎨 Frontend

| Categoria | Tecnologia  | Descrição                                      |
| --------- | ----------- | ---------------------------------------------- |
| Linguagem | TypeScript  | JavaScript com tipagem estática                |
| Framework | (A definir) | Framework reativo para construção de UI        |
| Bundler   | Vite        | Ferramenta de build rápida e eficiente         |
| Linter    | ESLint      | Garantia de qualidade e padronização de código |
| Container | Docker      | Isolamento e orquestração de ambientes         |

> *Nota: Substitua *(A definir)* pelo framework utilizado, como React, Vue ou Angular.*

---

## 📂 Estrutura do Projeto

```bash
.
├── backend/
│   ├── dist/                # Código compilado
│   ├── node_modules/        # Dependências
│   ├── prisma/              # Migrations e schema do Prisma
│   ├── src/                 # Código-fonte principal da API
│   ├── Dockerfile           # Build do backend com Docker
│   ├── .env                 # Variáveis de ambiente (não versionado)
│   └── package.json         # Dependências e scripts do projeto
├── frontend/
│   ├── public/              # Arquivos públicos (favicon, imagens)
│   ├── src/                 # Código-fonte da interface
│   ├── Dockerfile           # Build do frontend com Docker
│   ├── index.html           # Página principal
│   └── package.json         # Dependências e scripts da interface
````

---

## ⚙ Como Executar Localmente

### 🔧 Pré-requisitos

* [Node.js (versão LTS)](https://nodejs.org)
* npm (vem com o Node.js)
* Git
* Docker & Docker Compose (opcional, mas recomendado)

---

### 🖥 Iniciando o Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` com as variáveis de ambiente:

```env
DATABASE_URL="postgresql://user:password@host:port/database_name"
PORT=3000
# Outras variáveis, como chaves JWT
```

Rode as migrações com Prisma:

```bash
npx prisma migrate dev --name initial_setup
```

Inicie o servidor:

```bash
npm run dev
# ou npm start (modo produção)
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

### 🌐 Iniciando o Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

---

## 🐳 Usando Docker

Certifique-se de estar na *raiz do projeto*.

1. Build das imagens:

```bash
docker-compose build
```

2. Suba os serviços:

```bash
docker-compose up
```

> Isso requer um arquivo `docker-compose.yml` na raiz. Se ainda não tiver, posso gerar um modelo para você.

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

Este projeto está licenciado sob a *Licença MIT*.

---

Feito com ❤ pela equipe *Neukox*.

```

---

```
