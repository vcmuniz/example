import http from "node:http";

const port = Number(process.env.PORT || 3000);

const routes = {
  "/api/hello": { app: "API", message: "Olá do backend!" },
  "/api/users": {
    app: "API",
    users: [
      { id: 1, name: "Ana" },
      { id: 2, name: "Bruno" }
    ]
  },
  "/api/status": { app: "API", status: "ok", timestamp: new Date().toISOString() }
};

const server = http.createServer((request, response) => {
  const origin = request.headers.origin || "*";
  response.setHeader("Access-Control-Allow-Origin", origin);
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Content-Type", "application/json; charset=utf-8");

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (request.method !== "GET") {
    response.writeHead(405);
    response.end(JSON.stringify({ error: "Método não permitido" }));
    return;
  }

  const data = routes[request.url];
  if (!data) {
    response.writeHead(404);
    response.end(JSON.stringify({ error: "Rota não encontrada" }));
    return;
  }

  response.writeHead(200);
  response.end(JSON.stringify(data));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`API disponível em http://localhost:${port}`);
});
