import fastify from "fastify";
import cookie from "@fastify/cookie";
import { env } from "./env";
import { transactionRoutes } from "./routes/transactions";
import { requestLog } from "./middlewares/request-log";

const app = fastify();

// Para que o cookie gerencia as rotas, ele deve ser registrado antes das rotas em si
app.register(cookie);

// vai ser executado para todas as rotas de todos os plugins
app.addHook("preHandler", requestLog);

app.get("/hello", () => {
  return "Hello world!";
});

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
