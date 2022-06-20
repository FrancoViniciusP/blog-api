require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { MESSAGES, STATUS } = require('../helpers/constants');

const SECRET = process.env.JWT_SECRET;

module.exports = async (req, _res, next) => {
  if (!req.headers.authorization) {
    return next({ status: STATUS.UNAUTHORIZED, message: MESSAGES.TOKEN_MISSED }); 
  }

  try {
    const token = req.headers.authorization;
      
    const { data } = jwt.verify(token, SECRET);
      
    const result = await User.findOne({ where: { email: data.email } });
    
    if (!result) return next({ status: STATUS.UNAUTHORIZED, message: MESSAGES.TOKEN_INVALID });

    req.body.userId = result.id;
      
    next();
  } catch (e) {
    return next({ status: STATUS.UNAUTHORIZED, message: MESSAGES.TOKEN_INVALID });
  }
};
