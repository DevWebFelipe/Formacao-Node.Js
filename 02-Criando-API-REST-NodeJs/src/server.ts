import fastify from "fastify";
import cookie from "@fastify/cookie";
import { env } from "./env";
import { transactionRoutes } from "./routes/transactions";

const app = fastify();

// Para que o cookie gerencia as rotas, ele deve ser registrado antes das rotas em si
app.register(cookie);

app.register(transactionRoutes, {
  prefix: "transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
