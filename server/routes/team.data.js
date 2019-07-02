const router = require('express').Router();
const pool = require('../modules/pool');

// Route hit when getting data for user team
router.get('/user-team', async (req, res) => {
    const queryCall = `SELECT * FROM "user_team";`;
    try {
        const queryData = await pool.query(queryCall);
        await res.send(queryData.rows);
    } catch (error) {
        console.log(`Error with team get route ${error}`);
        res.sendStatus(500);
    }
});

// Route hit when creating a new user team
router.post('/new', async (req, res) => {
    const { teamName } = req.body;
    const queryCall = `INSERT INTO "user_team" (team_name) VALUES ($1)`;
    try {
        await pool.query(queryCall, [teamName]);
        await res.sendStatus(200);
    } catch (error) {
        console.log(`Error with team post route ${error}`);
        res.sendStatus(500);
    }
});

module.exports = router;