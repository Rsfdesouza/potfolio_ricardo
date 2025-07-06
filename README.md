# DevPortfolioHub

Portfolio pessoal do Ricardo Souza - Desenvolvedor Full Stack vivendo entre Brasil e Suécia.

## 🚀 Execução Local

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd DevPortfolioHub-1
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Copie o arquivo de exemplo
cp env.example .env

# Edite o arquivo .env com suas configurações
```

### Configuração do Banco de Dados

#### Opção 1: Desenvolvimento sem Banco de Dados (Recomendado para início rápido)

O projeto já está configurado para usar storage em memória por padrão. Para usar esta opção:

```bash
# No arquivo .env, certifique-se de que:
USE_MEMORY_STORAGE=true
```

#### Opção 2: Com PostgreSQL

1. Instale e configure PostgreSQL
2. Crie um banco de dados:
```sql
CREATE DATABASE devportfolio;
```

3. Configure a variável de ambiente:
```bash
# No arquivo .env:
DATABASE_URL="postgresql://username:password@localhost:5432/devportfolio"
USE_MEMORY_STORAGE=false
```

4. Execute as migrações:
```bash
npm run db:push
```

### Executando o Projeto

#### Desenvolvimento
```bash
npm run dev
```

O servidor estará disponível em: http://localhost:5000

#### Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
DevPortfolioHub-1/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   └── hooks/         # Custom hooks
├── server/                # Backend Express
│   ├── index.ts          # Servidor principal
│   ├── routes.ts         # Rotas da API
│   └── storage.ts        # Camada de dados
├── shared/               # Código compartilhado
│   └── schema.ts         # Schema do banco (Drizzle)
└── migrations/           # Migrações do banco
```

## 🛠️ Tecnologias

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Framer Motion

### Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM
- PostgreSQL (opcional)

## 📝 API Endpoints

- `GET /api/projects` - Lista todos os projetos
- `GET /api/projects/featured` - Lista projetos em destaque
- `GET /api/projects/:id` - Busca projeto específico
- `GET /api/blog` - Lista posts do blog publicados
- `GET /api/blog/:id` - Busca post específico
- `POST /api/contact` - Envia mensagem de contato

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Executa em modo produção
- `npm run check` - Verifica tipos TypeScript
- `npm run db:push` - Executa migrações do banco

## 🌟 Funcionalidades

- Portfolio responsivo
- Blog com posts
- Sistema de contato
- Timeline de experiências
- Downloads de recursos
- Newsletter
- Tema escuro/claro
- Animações suaves

## 📄 Licença

MIT 