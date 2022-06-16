const Joi = require('joi');
const { STATUS, MESSAGES } = require('../helpers/constants');

const categoryPattern = Joi.object({
  Name: Joi.string().min(1).required(),
  userId: Joi.required(),
});

module.exports = async (req, _res, next) => {
  const { error } = categoryPattern.validate(req.body);

  if (error) return next({ status: STATUS.BAD_REQUEST, message: MESSAGES.NAME_MISSED });

  next();
};