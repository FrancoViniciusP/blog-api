const { STATUS, MESSAGES } = require('../helpers/constants');

module.exports = (req, _res, next) => {
  try {
    const { email, password, displayName } = req.body;
    if (displayName.length < 8) {
      next({ status: STATUS.BAD_REQUEST, message: MESSAGES.ERROR_DISPLAY_NAME });
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
      next({ status: STATUS.BAD_REQUEST, message: MESSAGES.ERROR_EMAIL });
    }
    if (password.length < 6) {
      next({ status: STATUS.BAD_REQUEST, message: MESSAGES.ERROR_PASSWORD });
    }
    next();
  } catch (e) {
    next({ status: STATUS.BAD_REQUEST, message: MESSAGES.FIELD_MISSED });
  }
};