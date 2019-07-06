const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res)=>{
    try {
        console.log('hit!');
        res.sendStatus(200);
    } catch (error) {
        console.log(`Error with add player post route: ${error}`);
        res.sendStatus(500);
    }
});

module.exports = router;