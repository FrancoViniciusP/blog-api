const express = require('express');
const postController = require('../controllers/postController');
const validateEdition = require('../middlewares/validateEdition');
const validateNewPost = require('../middlewares/validateNewPost');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateNewPost, postController.createPost);
router.get('/', validateToken, postController.getAllPosts);
router.get('/search', validateToken, postController.getByTerm);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, validateEdition, postController.editPostById);
router.delete('/:id', validateToken, postController.deletePostById);

module.exports = router; 