const { Pool } = require('pg')

module.exports = new Pool({
    user: "USERNAME_POSTGRESQL",
    password:"PASSWORD_POSTGRESQL",
    host: "localhost",
    port: 5432,
    database: "DB_POSTGRESQL"
})