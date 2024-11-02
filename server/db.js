const Pool  = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "126.88.239.54",
    database: "nanbawebsite",
    password: "Optimus11",
    port: 5432,
});

module.exports = pool;