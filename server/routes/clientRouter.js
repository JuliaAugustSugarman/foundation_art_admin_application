const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



//  POST route
router.post('/', (req, res) => {
    console.log('new client info', req.body);

    const newClient = req.body;
    const queryText = `INSERT INTO "client" ("company", "location", "address", "contact_name", "contact_title", "contact_email", "contact_phone", "notes")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`
    const queryValues = [
        newClient.companyName,
        newClient.location,
        newClient.address,
        newClient.contactName,
        newClient.contactTitle,
        newClient.contactEmail,
        newClient.contactPhone,
        newClient.notes,
    ];
    pool.query(queryText, queryValues)
        .then((res) => {
            console.log('this is my returning res.rows', res.rows);
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error completing SELECT project query', err);
            res.sendStatus(500);
        });
});

module.exports = router;