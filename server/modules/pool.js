const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'full-stack-to-do-app', 
});

module.exports = pool;
