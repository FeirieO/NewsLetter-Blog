const { Router} = require('express');

const LogEntry = require('../Models/LogEntry');

const router = Router();

router.get('/', (req, res)=> {
    res.json({
        message : 'read about it',
    });
});

router.post('/', ( req, res) => {
    const logEntry = new LogEntry(req.body);
    console.log(req.body);
})

module.exports = router;