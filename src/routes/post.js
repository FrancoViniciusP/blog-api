const express = require('express');
const post = require('../controllers/postController');
const validateEdition = require('../middlewares/validateEdition');
const validateNewPost = require('../middlewares/validateNewPost');
const auth = require('../auth/auth');

const router = express.Router();

router.post('/', auth, validateNewPost, post.create);
router.get('/', auth, post.getAll);
router.get('/search', auth, post.search);
router.get('/:id', auth, post.getById);
router.put('/:id', auth, validateEdition, post.edit);
router.delete('/:id', auth, post.destroy);

module.exports = router; 