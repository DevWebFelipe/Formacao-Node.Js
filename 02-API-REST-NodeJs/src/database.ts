import { knex as setupKnex } from "knex";

export const config = {
  client: "sqlite3",
  connection: {
    filename: "./temp/app.db",
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './migrations',
}
};

export const knex = setupKnex(config);
