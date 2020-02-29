const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

router.get('/ewaste', feedController.getPosts);

router.post('/new-post', feedController.createPost);

module.exports = router;