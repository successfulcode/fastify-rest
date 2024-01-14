import buildServer from './server.js'
import 'dotenv/config'

const server = buildServer()

async function start() {  
  try {
    await server.listen({ port: process.env.PORT, host: process.env.HOST })

    console.log(`Server listening on ${server.server.address().port}`)
  } catch (err) {
    console.log('Error starting server')
    
    server.log.error(err)
    process.exit(1)
  }
}

start()