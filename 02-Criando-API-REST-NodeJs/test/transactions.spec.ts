import { it, beforeAll, afterAll, describe, expect, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../src/app";
import { execSync } from "node:child_process";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  });

  it("should be able to create a new transaction", async () => {
    const response = await request(app.server)
      .post("/transactions")
      .send({
        title: "Freelancer",
        amount: 8000,
        type: "credit",
      })
      .expect(201);

    console.log("_________________________________________");
    console.log(response.headers);
    console.log("_________________________________________");
    console.log(response.get("Set-Cookie"));
    console.log("_________________________________________");
  });

  it("should be able to list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "Freelancer",
        amount: 8000,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    console.log("_________________________________________");
    console.log(cookies);
    console.log("_________________________________________");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", String(cookies))
      .expect(200);

    console.log(listTransactionsResponse.body);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: "Freelancer",
        amount: 8000,
        type: "credit",
      }),
    ]);
  });
});
