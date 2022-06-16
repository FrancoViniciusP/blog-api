const express = require('express');
const category = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, category.create);
router.get('/', validateToken, category.getAll);

module.exports = router;