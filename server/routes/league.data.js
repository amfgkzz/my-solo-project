const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=> {
    res.sendStatus(200);
});

module.exports = router;