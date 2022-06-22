const { STATUS, MESSAGES } = require('../helpers/constants');

module.exports = (req, _res, next) => {
  try {
    const { email, password } = req.body;
    if (email.length < 1 || password.length < 1) {
      next({ status: STATUS.BAD_REQUEST, message: MESSAGES.FIELD_MISSED });
    }
    
    next();
  } catch (e) {
    next({ status: STATUS.BAD_REQUEST, message: MESSAGES.FIELD_MISSED });
  }
};