# HardwareCheck

HardwareCheck é um sistema dividido em duas partes:

- **Backend**: serviço Node.js em TypeScript que reúne dados de diferentes lojas, gerencia filas e fornece uma API para o frontend.
- **Frontend**: aplicação React + Vite que consome a API e apresenta os produtos em uma interface responsiva.

## Estrutura do repositório

- `/backend` — código do servidor, rotas, scrapers, filas e configuração do banco.
- `/frontend` — interface web construída com React, Vite e Tailwind.

## Requisitos

- Node.js 20+ (ou compatível com `typescript@6` e `tsx`)
- npm 10+ ou equivalente
- PostgreSQL local se for utilizar a conexão de banco definida em `backend/src/.env`

## Configuração do backend

1. No diretório raiz do projeto, instale as dependências do backend:

```bash
npm install
```

2. Verifique as variáveis de ambiente em `backend/src/.env`:

```env
PORT=3333
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/hardwarecheck
```

3. Execute o backend em modo de desenvolvimento:

```bash
npm run dev:backend
```

4. Para compilar o backend para produção:

```bash
npm run build
```

5. Para iniciar o backend compilado:

```bash
npm start
```

## Configuração do frontend

1. Acesse a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Ajuste a variável de ambiente em `frontend/.env` para apontar para o backend local:

```env
VITE_API_URL=http://localhost:3333
```

4. Execute o frontend em modo de desenvolvimento:

```bash
npm run dev
```

5. Para construir a versão de produção:

```bash
npm run build
```

## Ordem de execução recomendada

1. Inicie o backend primeiro:

```bash
npm run dev:backend
```

2. Em outro terminal, inicie o frontend:

```bash
cd frontend && npm run dev
```

## Observações

- O backend está configurado como ES Modules (`type: "module"`).
- O frontend utiliza React 19 com Vite.
- Se você usar um banco de dados PostgreSQL local, deve criar a database `hardwarecheck` ou ajustar `DATABASE_URL` conforme necessário.

---

Se quiser, posso também incluir exemplos de como testar a API ou detalhar melhor quais endpoints estão disponíveis.