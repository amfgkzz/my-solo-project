const router = require('express').Router();
const pool = require('../modules/pool');
  
router.put('/', async(req, res)=>{
    const client = await pool.connect();
    try {
        client.query('BEGIN');

        const {
            leagueName,
            leagueNumbers,
            leagueType,
            teamName,
            league_id,
            team_id
        } = req.body;

        const updateQuery = `UPDATE "league" SET "league_name"=$1, 
        "league_numbers"=$2, "league_type"=$3 WHERE "id"=$4`;

        const updateQueryTwo = `UPDATE "user_team" SET "team_name"=$1 WHERE "id"=$2`;

        client.query(updateQuery, [leagueName, leagueNumbers, leagueType, league_id]);
        client.query(updateQueryTwo, [teamName, team_id]);

        client.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        client.query('ROLLBACK');
        console.log(`Error with server put route: ${error}`);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});

module.exports = router;