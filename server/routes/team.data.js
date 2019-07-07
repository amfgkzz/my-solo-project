const router = require('express').Router();
const pool = require('../modules/pool');

// Route hit when getting data for user team
router.get('/user-team', async (req, res) => {
    // FIX: grabbing ALL leagues, want to 
    // make it so i grab only user leagues
    try {
        const querySelect = `SELECT * FROM "user_team"`;
        const queryResult = await pool.query(querySelect);
        res.send(queryResult.rows);
    } catch (error) {
        console.log(`Error with team get route ${error}`);
        res.sendStatus(500);
    }
});

router.get('/user-team/bench-players', async(req, res)=>{
    try {
        const querySelect = `SELECT "user_team"."id", "user_team"."team_name", "player_id", 
        "player_first_name", "player_last_name", "player_position", "player_start" FROM "user_players" 
        JOIN "user_team" ON "user_team"."id"="user_players"."user_team"
        WHERE "user_players"."player_start"=FALSE
        ORDER BY "user_players"."id"`;
        const queryResult = await pool.query(querySelect);
        res.send(queryResult.rows);
    } catch (error) {
        console.log(`Error with user players get route ${error}`);
        res.sendStatus(500);
    }
});

router.get('/user-team/start-players', async(req, res)=>{
    try {
        const querySelect = `SELECT "user_team"."id", "user_team"."team_name", "player_id", 
        "player_first_name", "player_last_name", "player_position", "player_start" FROM "user_players" 
        JOIN "user_team" ON "user_team"."id"="user_players"."user_team"
        WHERE "user_players"."player_start"=TRUE
        ORDER BY "user_players"."id"`;
        const queryResult = await pool.query(querySelect);
        res.send(queryResult.rows);
    } catch (error) {
        console.log(`Error with user players get route ${error}`);
        res.sendStatus(500);
    }
});

// Route hit when creating a new user team
router.post('/new', async (req, res) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        const queryInsert = `INSERT INTO "user_team" (team_name) VALUES ($1) RETURNING "user_team"."id";`;
        const { teamName, userID } = req.body;
        const queryResult = await client.query(queryInsert, [teamName]);

        const queryUpdate = `UPDATE "user" SET "team_id"=$1 WHERE "user"."id"=$2 RETURNING "user"."league_id", "user"."team_id";`;
        const queryResultTwo = await client.query(queryUpdate, [queryResult.rows[0].id, userID]);

        const queryUpdateTwo = `UPDATE "user_team" SET "league_id"=$1 WHERE "user_team"."id"=$2;`;
        await client.query(queryUpdateTwo, [queryResultTwo.rows[0].league_id, queryResultTwo.rows[0].team_id]);

        await client.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`Error with team post route ${error}`);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});

module.exports = router;