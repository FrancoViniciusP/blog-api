const express = require('express');
const postController = require('../controllers/postController');
const validateNewPost = require('../middlewares/validateNewPost');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateNewPost, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);
router.get('/:id', validateToken, postController.getPostById);

module.exports = router;