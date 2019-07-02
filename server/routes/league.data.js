const router = require('express').Router();
const pool = require('../modules/pool');

// /league/new, route is hit whenever use creates a new league
router.post('/new', async(req, res)=> {
    const queryCall = `INSERT INTO "league" ("league_name", "league_numbers", "league_type") 
    VALUES ($1, $2, $3);`
    const queryData = [req.body.leagueName, req.body.leagueNumber, req.body.leagueType];
    try {
        await pool.query(queryCall, queryData);
        await res.sendStatus(200);
    } catch (error) {
        console.log(`Error with post route ${error} `);
        res.sendStatus(500);
    }
});

module.exports = router;