const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM characters ORDER BY name;`;
    pool.query(sqlText)
    .then((result) => {
        console.log('got stuff back  from the database', result)
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
    })

// POST
router.post('/', (req, res)=>
{
    const character = req.body;
    const sqlText = `INSERT INTO characters (name, anime)
    Values ($1, $2)`;
    pool.query(sqlText, [character.name, character.anime])
    .then((result) => {
        console.log('Added characters to the database', character);
        res.sendStatus(201);
    })
    .catch((error)=> {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})
// PUT

// DELETE
router.delete('/:id', (req,res) => {
console.log('DELETE /character', req.params);
const queryText = 'DELETE FROM "characters" WHERE "id" = $1';
pool.query(queryText, [req.params.id])
.then((result) => {
    res.sendStatus(200);
}).catch((error) => {
    console.log('error in delete', error)
    res.sendStatus(500);
});
});
module.exports = router;
