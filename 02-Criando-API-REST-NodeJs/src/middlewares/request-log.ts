import { FastifyRequest } from "fastify";

export async function requestLog(request: FastifyRequest) {
  console.log(`(Método: [${request.method}]`);
  console.log(` URL: [${request.url}]`);
  console.log(` Data: [${Date()}])`);
}
