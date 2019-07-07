const router = require('express').Router();
const pool = require('../modules/pool');

router.delete('/team', async(req, res)=>{
    try {
        console.log(req.query);
        const deleteQuery = ``;
        await pool.query();
        res.sendStatus(200);
    } catch (error) {
        throw error;
    }
});

router.delete('/league', (req, res)=>{
    try {
        console.log(req.query);
        res.sendStatus(200);
    } catch (error) {
        throw error;
    }
});

module.exports = router;