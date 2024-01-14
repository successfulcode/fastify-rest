
import Fastify from 'fastify'

function buildServer() {

  const server = Fastify({
    logger: true
  })

  server.get("/", async function () {
    return { status: "Rest api" };
  });

  server.get("/first", async function () {
    return { status: "OK" };
  });

  return server
}

export default buildServer