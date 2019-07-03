const router = require('express').Router();
const pool = require('../modules/pool');

// Route is hit whenever user goes to their league
router.get('/user', async(req, res)=> {
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
router.post('/new', async(req, res)=> {
    // const client = pool.connect();
    const queryCall = `INSERT INTO "league" ("league_name", "league_numbers", "league_type") 
    VALUES ($1, $2, $3) RETURNING "league"."id";`
    const queryUpdate = `UPDATE "user" SET "league_id"=$1 WHERE "user"."id"=$2;`
    const queryData = [req.body.leagueName, req.body.leagueNumber, req.body.leagueType];
    console.log(req.body);
    try {
        await pool.query(queryCall, queryData);
        await res.sendStatus(200);
    } catch (error) {
        console.log(`Error with league post route ${error}`);
        res.sendStatus(500);
    }
});

module.exports = router;