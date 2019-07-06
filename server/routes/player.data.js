const router = require('express').Router();
const pool = require('../modules/pool');

// initial route hit when page loads
router.get('/', async (req, res) => {
    try {
        const queryCall = `SELECT "player"."id","position", "first_name", "last_name", "name" FROM ffdb.player
        JOIN ffdb.player_team_map ON ffdb.player.id=ffdb.player_team_map.player_id
        JOIN ffdb.team ON ffdb.team.id=ffdb.player_team_map.team_id
        WHERE "position"='QB' LIMIT 40;`
        const queryResponse = await pool.query(queryCall);
        res.send(queryResponse.rows);
    } catch (error) {
        console.log(`Error with data query call ${error}`);
        res.sendStatus(500);
    }
});

// route hit when user clicks player position button
router.put('/player-position', async (req, res) => {
    try {
        const queryCall = `SELECT "player"."id","position", "first_name", "last_name", "name" FROM ffdb.player
        JOIN ffdb.player_team_map ON ffdb.player.id=ffdb.player_team_map.player_id
        JOIN ffdb.team ON ffdb.team.id=ffdb.player_team_map.team_id
        WHERE "position"=$1 LIMIT 40;`
        const queryData = [req.body.payload];
        const queryResponse = await pool.query(queryCall, queryData);
        res.send(queryResponse.rows);
    } catch (error) {
        console.log(`Error with data query call ${error}`);
        res.sendStatus(500);
    }
});

module.exports = router;