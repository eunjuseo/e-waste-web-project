const express = require('express');
const router = express.Router();

router.get('/progress', (req, res, next) => {
    console.log('Successfully loaded!'); 
});

module.exports = router;