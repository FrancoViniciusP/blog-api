const express = require('express');
const categoryController = require('../controllers/categoryController');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateToken, categoryController.createCategory);

module.exports = router;