# Front End - Sistema de Gerenciamento de TCC

Este repositório contém o código fonte do Front End do Sistema de Gerenciamento de TCC.

## Estrutura do Projeto

```
Frontend/
├── src/ // Código fonte do Front End
│   ├── assets/ // Imagens, fontes e outros recursos estáticos
│   ├── components/ // Componentes reutilizáveis
│   │   ├── ui/ // Componentes de interface do usuário
│   │   ├── shared/ // Componentes compartilhados
│   ├── features/
│   │   ├── auth/ // Funcionalidades de autenticação
│   ├── hooks/
│   ├── lib/ // Bibliotecas e utilitários
│       ├── api/ // Comunicação com a API
│   ├── pages/ // Páginas do aplicativo
│   ├── types/ // Tipos TypeScript
│   │   ├── response/ // Tipos de resposta da API
│   ├── utils/ // Funções utilitárias
│   └── App.tsx // Componente principal do aplicativo, onde são definidas as rotas e o layout
│   └── index.css // Estilos globais do aplicativo
│   └── main.tsx  // Ponto de entrada do aplicativo
│   └── vite-env.d.ts // Declarações de ambiente do Vite
├── .env.example // Exemplo de arquivo de variáveis de ambiente
├── index.html // Arquivo HTML principal
├── package.json // Dependências e scripts do projeto
├── tsconfig.json // Configuração do TypeScript
├── vite.config.ts // Configuração do Vite
└── README.md // Documentação do projeto
```

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de construção e desenvolvimento para aplicações web modernas.

## Bibliotecas e Dependências

### Estilo e UI
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Tailwind Merge**: Biblioteca para mesclar classes do Tailwind CSS, evitando duplicações e conflitos.
- **clsx**: Biblioteca para manipulação de classes CSS condicionalmente.
- **React Icons**: Conjunto de ícones SVG para React.
- **Lucide**: Biblioteca de componentes de interface do usuário para React.
- **Huge Icons**: Biblioteca de ícones SVG para React.
- **React Toastify**: Biblioteca para exibição de notificações toast.

### Gerenciamento de Estado e Rotas
- **React Router**: Para gerenciamento de rotas.

### API e Comunicação
- **Axios**: Para requisições HTTP.

### Formulários e Validação
- **React Hook Form**: Biblioteca para gerenciamento de formulários.
- **Zod**: Biblioteca para validação de esquemas de dados.

## Configuração do Ambiente

Obs: Tenha certeza de que você tem o Node.js e o npm instalados em sua máquina.

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
      ```

5. Abra o navegador e acesse `http://localhost:5173` para ver o aplicativo em execução.

Observação: Copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente conforme necessário.




