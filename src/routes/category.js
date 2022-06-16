const express = require('express');
const category = require('../controllers/categoryController');
const validateNewCategory = require('../middlewares/validateNewCategory');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, validateNewCategory, category.create);
router.get('/', validateToken, category.getAll);

module.exports = router;