const router = require('express').Router();
const pool = require('../modules/pool');

router.delete('/team', async(req, res)=>{
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        // Must update the user.team_id first before deleting team
        const updateQuery = `UPDATE "user" SET "team_id"=NULL WHERE "user"."id"=$1`;
        const deleteQuery = `DELETE FROM "user_team" WHERE "user_team"."id"=$1`;

        await client.query(updateQuery, [req.query.user_id]);
        await client.query(deleteQuery, [req.query.team_id]);

        await client.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
});

// FIX: Add ability to Delete leagues
// router.delete('/league', async(req, res)=>{
//     const client = await pool.connect();
//     try {
//         await client.query('BEGIN');

//         const updateQuery = `UPDATE "user" SET "league_id"=NULL WHERE "user"."id"=$1`;
//         const deleteQuery = `DELETE FROM "league" WHERE "league"."id"=$1`;

//         await client.query(updateQuery, [req.query.user_id]);
//         await client.query(deleteQuery, [req.query.league_id]);

//         await client.query('COMMIT');
//         res.sendStatus(200);
//     } catch (error) {
//         await client.query('ROLLBACK');
//         throw error;
//     } finally {
//         client.release();
//     }
// });

module.exports = router;