const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"sample",
    password:"raghu24k",
    port:5432
});
module.exports = pool;