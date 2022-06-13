const express = require('express');
const loginRoute = require('./login');
const userRoute = require('./user');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/user', userRoute);

module.exports = router;