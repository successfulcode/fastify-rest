import 'dotenv/config'
import Knex from 'knex'
import knexConfig from '../knexfile.js'

const knex = Knex(knexConfig[process.env.NODE_ENV])

class Db {
  async migrate() {
    console.log('start: migrate')

    await knex.migrate.latest()

    console.log('end: migrate')
  }

  initConfig() {
   return  { 
      promise: true,
      connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    }
  }
}

export default Db

