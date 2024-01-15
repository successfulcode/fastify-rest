// import mysql from 'mysql2/promise';

// class Db {
//   constructor(db) {
//     console.log('constructor')
//     this._db = db
//   }

//   async createPool(config) {
//     console.log(`createPool: ${config.user}@${config.host}/${config.database}`)

//     const pool = await mysql.createPool(config)

//     const connection = await pool.getConnection()
//     connection.release()

//     return pool
//   }

//   async close() {
//     try {
//       if (this._db) {
//         console.log('Db: close no db')
//       }

//       await this._db.end()

//       console.log('Db: close success')
//     } catch (err) {
//       console.error('Db: close error')
//       console.error(err);
//     }
//   }
// }

// export default Db