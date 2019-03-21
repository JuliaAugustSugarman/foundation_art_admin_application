const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//  GET route template
router.get('/', rejectUnauthenticated , (req, res) => {
    const queryText = (`SELECT "image", "size", "color", "name", "price", "type", "description" FROM "artwork" 
                        FULL JOIN "junction" ON "junction"."artwork_id" = "artwork"."id" 
                        FULL JOIN "style" ON "style"."id" = "junction"."style_id"
                        FULL JOIN "color_table" ON "color_table"."id"= "junction"."color_id"
                        FULL JOIN "artist" ON "artist"."id" = "junction"."artist_id"`)
    pool.query(queryText).then((result) => {
        res.send(result.rows)
        console.log('in router get', result.rows);
    }).catch((error) => {
        console.log('GET request error');
        res.sendStatus(500);
    })
});



//  POST route template
router.post('/', (req, res) => {

});

//DELETE Route
router.delete('/id', (req, res) => {

    console.log(req.params);

    const queryText = 'DELETE FROM projects WHERE id=$1';
    pool.query(queryText, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing DELETE projects query', err);
            res.sendStatus(500);
        });
});


module.exports = router;