import buildServer from './server.js'
import 'dotenv/config'

const server = await buildServer()

async function start() {  
  try {
    await server.listen({ port: process.env.PORT, host: process.env.HOST })

    const startMessage = `Start: Server listening on ${server.server.address().port}`

    console.info(`${startMessage}`)
    server.log.info(`${startMessage}`)
  } catch (error) {
    console.error('Error starting server')
    
    server.log.error(error)
    process.exit(1)
  }
}

start()
