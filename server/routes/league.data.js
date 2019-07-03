const router = require('express').Router();
const pool = require('../modules/pool');

// Route is hit whenever user goes to their league
router.get('/user', async (req, res) => {
    // FIX: grabbing ALL leagues, want to 
    // make it so i grab only user leagues
    const queryCall = `SELECT * FROM "league";`
    try {
        const queryResponse = await pool.query(queryCall);
        await res.send(queryResponse.rows);
    } catch (error) {
        console.log(`Error with league get route ${error}`);
    }
});

// Route is hit whenever use creates a new league
router.post('/new', async (req, res) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        const queryCall = `INSERT INTO "league" ("league_name", "league_numbers", "league_type") 
        VALUES ($1, $2, $3) RETURNING "league"."id";`;
        const queryData = [req.body.leagueName, req.body.leagueNumber, req.body.leagueType];

        const queryResponse = await client.query(queryCall, queryData);
        const queryUpdate = `UPDATE "user" SET "league_id"=$1 WHERE "user"."id"=$2;`;
        const queryDataTwo = [queryResponse.rows[0].id, req.body.userID];

        await client.query(queryUpdate, queryDataTwo);
        await client.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`Error with post route ${error}`);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});

module.exports = router;