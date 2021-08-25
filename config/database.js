require('dotenv').config()

const database = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.SQL_HOST,
        user : process.env.SQL_USER,
        password : process.env.SQL_PASSWORD,
        database : process.env.SQL_DATABASE
    }
})

// from https://knexjs.org/

// const otherdatabase = require('knex')({
//     client: "",
//     connection: {
//         host : "",
//         user : "",
//         password : "",
//         database : ""
//     }
// })

module.exports = { database }