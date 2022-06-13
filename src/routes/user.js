const express = require('express');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');

const router = express.Router();

router.post('/', validateNewUser, userController.createUser);

module.exports = router;