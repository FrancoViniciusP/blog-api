const express = require('express');
const loginRoute = require('./login');
const userRoute = require('./user');
const categoryRoute = require('./category');
const postRoute = require('./post');

const router = express.Router();

router.use('/login', loginRoute);
router.use('/user', userRoute);
router.use('/categories', categoryRoute);
router.use('/post', postRoute)

module.exports = router;