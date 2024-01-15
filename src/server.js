import 'dotenv/config'

import Fastify from 'fastify'
import fastifyMySQL from '@fastify/mysql'

import productRoutes from './routes/product.route.js'

const mysqlConfig = { 
  promise: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}

async function buildServer() {
  const server = Fastify({
    logger: { level: 'info' }
  })

  server.register(fastifyMySQL, mysqlConfig)

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