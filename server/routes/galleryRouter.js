const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = (`SELECT "image" FROM "artwork"`)
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log('in router get', result.rows);
    }).catch((error) => {
        console.log('GET request error');
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;