const express = require('express');
const user = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateNewUser, user.create);
router.get('/', validateToken, user.getAll);
router.get('/:id', validateToken, user.getById);
router.delete('/me', validateToken, user.destroy);

module.exports = router;