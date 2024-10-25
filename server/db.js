const Pool  = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nanbawebsite",
    password: "Optimus11",
    port: 5432,
});

module.exports = pool;