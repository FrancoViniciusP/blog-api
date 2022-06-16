const { STATUS, MESSAGES } = require('../helpers/constants');
const login = require('../services/loginService');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  
  const token = await login(email, password);

  if (!token) return next({ status: STATUS.BAD_REQUEST, message: MESSAGES.INVALID_FIELDS });
    
  res.status(200).json({ token });
};