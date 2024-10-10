import fastify from "fastify";
import { appRoutes } from "./http/routes";
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, _request, replay) => {
  if (error instanceof ZodError) {
    return replay
      .status(400)
      .send({ message: "Valçidation error", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // TODO: fazer log para uma ferramenta externa como DataLog/NewRelic/Sentry
  }

  return replay.status(500).send({
    message: "Internal server error.",
  });
});
