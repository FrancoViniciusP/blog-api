module.exports = (req, _res, next) => {
  try {
    const { email, password, displayName } = req.body;
    if (displayName.length < 8) {
      next({ status: 400, message: '"displayName" length must be at least 8 characters long' });
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
      next({ status: 400, message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
      next({ status: 400, message: '"password" length must be at least 6 characters long' });
    }
    next();
  } catch (e) {
    next({ status: 400, message: 'Some required fields are missing' });
  }
};