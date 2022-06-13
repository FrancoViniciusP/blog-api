require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, _res, next) => {
  if (!req.headers.authorization) {
    next({ status: 401, message: 'Token not found' });
  }
  const token = req.headers.authorization;
  const { data } = jwt.verify(token, SECRET);

  const result = await User.findOne({ 
    where: { email: data.email },
  });

  if (!result) {
    next({ status: 401, message: 'Expired or invalid token' });
  }

  next();
};
