
import 'dotenv/config'

import Fastify from 'fastify'
import fastifyMySQL from '@fastify/mysql'
// import knex from 'knex'
// import knexConfig from './knexfile.js'
import swagger from '@fastify/swagger'

import productRoutes from './routes/products.route.js'
import Db from './services/Db.js'

const db = new Db()

async function buildServer() {
  const server = Fastify({
    logger: { level: 'info' }
  })
  
  server.register(fastifyMySQL, db.initConfig())

  server.addHook('onReady', async () => {
    await db.migrate()
  });
  

  server.register(swagger, {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
      info: { title: 'fastify-api' }
    }
  })

  server.register(productRoutes, { prefix: '/api' })

  server.get("/", async function () {
    return { status: "Rest api1" };
  })

  server.get("/first", async function (request, reply) {
    try {
      const [rows] = await server.mysql.query('SELECT * FROM test')
      reply.send(rows)
    } catch (error) {
      reply.status(500).send(error)
    } finally {
      connection.release()
    }
  })

  return server
}

export default buildServer