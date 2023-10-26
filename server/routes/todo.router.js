const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM characters ORDER BY name, origin DESC;`;
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

// PUT

// DELETE

module.exports = router;
