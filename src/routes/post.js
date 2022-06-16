const express = require('express');
const post = require('../controllers/postController');
const validateEdition = require('../middlewares/validateEdition');
const validateNewPost = require('../middlewares/validateNewPost');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateNewPost, post.create);
router.get('/', validateToken, post.getAll);
router.get('/search', validateToken, post.search);
router.get('/:id', validateToken, post.getById);
router.put('/:id', validateToken, validateEdition, post.edit);
router.delete('/:id', validateToken, post.destroy);

module.exports = router; 