const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//  GET route template
router.get('/', rejectUnauthenticated , (req, res) => {
    const queryText = (`SELECT * FROM "artwork" 
                        JOIN "junction" ON "junction"."artwork_id" = "artwork"."id" 
                        JOIN "style" ON "style"."id" = "junction"."style_id"
                        JOIN "color_table" ON "color_table"."id"= "junction"."color_id"
                        JOIN "artist" ON "artist"."id" = "junction"."artist_id"
                        ;`)
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
    console.log('TJ', req.body);
    
    const newArtWork = req.body;
    const queryText = `INSERT INTO "artwork" ("image", "size", "price", "description","title")
                    VALUES ($1, $2, $3, $4, $5)`;
    const queryValues = [
        newArtWork.image,
        newArtWork.size,
        newArtWork.price,
        newArtWork.description,
        newArtWork.title,
       
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
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