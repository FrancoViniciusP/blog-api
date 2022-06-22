const express = require('express');
const category = require('../controllers/categoryController');
const validateNewCategory = require('../middlewares/validateNewCategory');
const auth = require('../auth/auth');

const router = express.Router();

router.post('/', auth, validateNewCategory, category.create);
router.get('/', auth, category.getAll);

module.exports = router;