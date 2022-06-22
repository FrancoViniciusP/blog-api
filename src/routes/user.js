const express = require('express');
const user = require('../controllers/userController');
const validateNewUser = require('../middlewares/validateNewUser');
const auth = require('../auth/auth');

const router = express.Router();

router.post('/', validateNewUser, user.create);
router.get('/', auth, user.getAll);
router.get('/:id', auth, user.getById);
router.delete('/me', auth, user.destroy);

module.exports = router;