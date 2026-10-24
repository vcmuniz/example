# Exemplo de monorepo com pnpm

Monorepo simples com uma API Node.js e três frontends estáticos, cada um consumindo uma rota diferente da API.

## Estrutura

```text
apps/
  api/          # API Node.js
  frontend-1/   # /api/hello
  frontend-2/   # /api/users
  frontend-3/   # /api/status
infra/
  docker-compose.yml
```

## Executar com Docker

Copie `.env.example` para `.env` na raiz e execute:

```bash
docker compose --env-file .env -f infra/docker-compose.yml up --build
```

Se não precisar alterar as portas, também é possível executar diretamente:

```bash
docker compose -f infra/docker-compose.yml up --build
```

URLs padrão:

- API: http://localhost:3000
- Frontend 1: http://localhost:8081
- Frontend 2: http://localhost:8082
- Frontend 3: http://localhost:8083

## Executar a API localmente

```bash
pnpm install
pnpm dev:api
```
