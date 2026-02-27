const pool = require('../db/connectionobj');

// helper to send back an error response instead of crashing the server
function handleError(response, error) {
    console.error('database error', error);
    response.status(500).json({ error: error.message || 'internal server error' });
}

const getusers = (request, response) => {
    pool.query("SELECT * from testtable1", (error, results) => {
        if (error) {
            return handleError(response, error);
        }
        response.status(200).json(results.rows);
    });
}
const saveuser = (request, response) => {
    const { name, run, country } = request.body;
    pool.query("INSERT INTO testtable1 (name, run, country) "+
        "VALUES ($1, $2, $3)", [name, run, country], (error, results) => {
        if (error) {
            return handleError(response, error);
        }
        response.status(200).send("User added successfully");
    });
}
const updateuser = (request, response) => {
    const { name, run, country, id } = request.body;
    pool.query("UPDATE testtable1 SET name=$1, run=$2, country=$3 WHERE id=$4", 
        [name, run, country, id], (error, results) => {
        if (error) {
            return handleError(response, error);
        }
        response.status(200).send("User updated successfully");
    });
}
const deleteuser = (request, response) => {
    const { id } = request.body;
    pool.query("DELETE FROM testtable1 WHERE id=$1", [id], (error, results) => {
        if (error) {
            return handleError(response, error);
        }
        response.status(200).send("User deleted successfully");
    });
}
module.exports = {
    getusers,
    saveuser,
    updateuser,
    deleteuser
}