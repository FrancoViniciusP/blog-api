const express = require('express');
const userController = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateNewUser, userController.createUser);
router.get('/', validateToken, userController.getAll);
router.get('/:id', validateToken, userController.getById);

module.exports = router;