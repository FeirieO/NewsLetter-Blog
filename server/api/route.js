const {Router} = require('express');

const router = Router();

router.get('/', () => {
    res.json({
        message: '🌍'
    });
});