require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
   return next({ status: 401, message: 'Token not found' });
  }

  try {
    const token = req.headers.authorization;
      
    const { data } = jwt.verify(token, SECRET);
      
    const result = await User.findOne({ 
      where: { email: data.email },
    });
    
    if (!result) {
      next({ status: 401, message: 'Expired or invalid token' });
    }

    req.body.userId = result.id;
      
    next();
  } catch (e) {
    next({ status: 401, message: 'Expired or invalid token' });
  }
};
