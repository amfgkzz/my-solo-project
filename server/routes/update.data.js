const router = require('express').Router();
const pool = require('../modules/pool');
  
router.put('/', (req, res)=>{
    try {
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

        pool.query(updateQuery, [leagueName, leagueNumbers, leagueType, league_id]);
        pool.query(updateQueryTwo, [teamName, team_id]);

        res.sendStatus(201);
    } catch (error) {
        console.log(`Error with server put route: ${error}`);
        res.sendStatus(500);
    }
});

router.put('/start-player', (req, res)=>{
    try {
        const updateQuery = `UPDATE "user_players" SET "player_start"=TRUE 
        WHERE "user_players"."player_id"=$1`;

        pool.query(updateQuery, [req.query.player_id]);

        res.sendStatus(200);
    } catch (error) {
        console.log('Error with server put route:', error);
        res.sendStatus(500);
    }
});

router.put('/bench-player', (req, res)=>{
    try {
        const updateQuery = `UPDATE "user_players" SET "player_start"=FALSE 
        WHERE "user_players"."player_id"=$1`;

        pool.query(updateQuery, [req.query.player_id]);

        res.sendStatus(200);
    } catch (error) {
        console.log('Error with server put route:', error);
        res.sendStatus(500);
    }
});

module.exports = router;