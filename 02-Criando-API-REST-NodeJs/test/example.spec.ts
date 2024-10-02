import { expect, test } from "vitest";
import request from "supertest";
import { app } from "../src/app";

test("o usuário consegue criar uma nova transação", async () => {
  // fazer a chamada HTTP para criar uma nova transação

  const response = await request(app.server).post("/transactions").send({
    title: "Freelancer",
    amount: 8000,
    type: "credit",
  });

  // validar se o registro foi inserido no banco
  expect(response.statusCode).toEqual(201);

  // outra forma de fazer, fazendo direto
  // await request(app.server)
  //   .post("/transactions")
  //   .send({
  //     title: "Freelancer",
  //     amount: 8000,
  //     type: "credit",
  //   })
  //   .expect(201);
});
