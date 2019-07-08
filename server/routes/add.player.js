const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', async (req, res) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const updateQuery = `UPDATE ffdb.player SET "status"='INACTIVE' WHERE id=$1 
        RETURNING id, first_name, last_name, position;`
        const insertQuery = `INSERT INTO "user_players" 
        (player_id, player_first_name, player_last_name, player_position, user_team) 
        VALUES ($1, $2, $3, $4, $5) RETURNING player_position;`

        const queryResult = await client.query(updateQuery, [req.query.player_id]);
        const resultRows = queryResult.rows[0];

        const queryResultTwo = await client.query(insertQuery, [resultRows.id, resultRows.first_name,
            resultRows.last_name, resultRows.position, req.query.team_id]);

        await client.query('COMMIT');
        res.send(queryResultTwo.rows[0]);
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
});

module.exports = router;