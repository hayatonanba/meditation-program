const Pool  = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "192.168.3.128",
    database: "nanbawebsite",
    password: "Optimus11",
    port: 5432,
});

module.exports = pool;